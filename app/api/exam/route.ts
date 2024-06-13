import authConfig, { NSession } from "@/lib/authConfig";
import openai from "@/lib/openai";
import { prompt } from "@/lib/prompt";
import Exam from "@/models/Exam";
import { Difficulty, ExamResponse } from "@/types";
import { getServerSession } from "next-auth";

export async function POST(request:Request) {
    try {
        type Body = {
            examName:string,
            numberOfQuestions:number,
            difficulty:Difficulty,
            topics:string,
            questionTypes:string,
            isExamPublic:boolean
        }

        const session : NSession | null = await getServerSession(authConfig)
        if(!session){
            return new Response("Unauthorized!",{
                status:403
            })
        }

        const body: Body = await request.json()
        const prom = prompt(body.examName,body.topics,body.numberOfQuestions,body.difficulty,body.questionTypes)
        const response = await openai.chat.completions.create({
            messages:[
                {
                    role:"system",
                    content:"You are a helpful exam creator, create unique questions. Output JSON"
                },
                {
                    role:"user",
                    content:prom
                }
            ],
            model:"gpt-4o",
            response_format:{type:"json_object"}
        })
        const json : ExamResponse = JSON.parse(response.choices[0].message.content || "")

        const exam = new Exam({
            name:json.examName,
            difficulty:body.difficulty,
            noOfQuestions:body.numberOfQuestions,
            createdByUser:{
                username:(session as NSession).username,
                userId:(session as NSession).id
            }
        })
        await exam.save()
        return new Response(response.choices[0].message.content,{
            status:200
        })
    } catch (error) {
        return new Response(JSON.stringify(error), {
            status: 500,
          });
    }
}