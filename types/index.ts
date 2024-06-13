import mongoose from "mongoose"

export type Difficulty = "easy" | "medium" | "hard" | "expert"

export type User = {
    _id:mongoose.Types.ObjectId,
    username:string,
    email:string,
    password?:string,
    createdAt:NativeDate,
    updatedAt:NativeDate
}

type Question = {
  question:string,
  type:"essay" | "multiple-choice" | "boolean",
  answers?: string []      
}

export type ExamResponse = {
    examName:string,
    exam: Question []
}