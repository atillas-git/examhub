"use client";
import { difficulties } from "@/lib/difficulty";
import { BreadcrumbItem, Breadcrumbs, Button, Checkbox, Input, Select, SelectItem, useDisclosure } from "@nextui-org/react";
import React, {useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
import {  Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter} from "@nextui-org/modal";
import {Textarea} from "@nextui-org/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Difficulty } from "@/types";
import toast from "react-hot-toast";

const MyExams = () => {
  const {isOpen,onOpen,onClose} = useDisclosure()
  const [searchInput,setSearchInput] = useState("")
  const [searchDifficulty,setSearchDifficulty] = useState<Difficulty>("easy")
  const [examName,setExamName] = useState("")
  const [numberOfQuestions,setNumberOfQuestions] = useState("")
  const [difficulty,setDifficulty] = useState<Difficulty>("easy")
  const [topics,setTopics] = useState("")
  const [questionTypes,setQuestionTypes] = useState("")
  const [isExamPublic,setIsExamPublic] = useState(true)
  const [isLoading,setIsLoading] = useState(false)

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
 
  const createQueryString = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("search",searchInput)
    params.set("difficulty",searchDifficulty)
    return params.toString()
  }
  
  const handleSearch = ()=>{
    router.push(pathname+"?"+createQueryString())
  }
  
  const handleCreateExam = async (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
    setIsLoading(true)
    try {
      if(!examName || !numberOfQuestions || !difficulty || !topics || !questionTypes || !isExamPublic){
        return toast.error("Please fill the required fields!")
      }
    } catch (error) {
      
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen w-full p-7 flex flex-col gap-4">
      <Breadcrumbs>
        <BreadcrumbItem>App</BreadcrumbItem>
        <BreadcrumbItem>My Exams</BreadcrumbItem>
      </Breadcrumbs>
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-12 sm:col-span-6">
          <Input
            label = "Search Exams"
            size="sm"
            startContent = {
              <CiSearch/>
            }
            onChange={(e)=>setSearchInput(e.target.value)}
            value={searchInput}
          />
        </div>
        <div className="col-span-12 sm:col-span-4">
            <Select label = "Difficulty" size="sm" onChange={(e)=>setSearchDifficulty(e.target.value as Difficulty)} value={searchDifficulty}>
              {difficulties.map((difficulty)=>{
                return(
                  <SelectItem key={difficulty.value}>
                    {difficulty.label}
                  </SelectItem>
                )
              })}
            </Select>
        </div>
        <div className="col-span-12 sm:col-span-2">
            <Button fullWidth variant="faded" className="rounded-md py-6 border-none" disableRipple onClick={handleSearch}>
              <CiSearch/>
              Search
            </Button>
        </div>
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-end items-end gap-4">
        <Button variant="faded" className="rounded-md py-6 border-none bg-teal-700 text-white w-full sm:w-fit" disableRipple onClick={onOpen}>
          <IoMdAdd className="w-4 h-4"/>
          Create an Exam with AI
        </Button>
        <Button variant="faded" className="rounded-md py-6 border-none bg-teal-500 text-white w-full sm:w-fit underline" disableRipple>
          Create an Exam Yourself
          <MdOutlineArrowOutward/>
        </Button>
      </div>
       <Modal isOpen = {isOpen} size="4xl" onClose={onClose}>
            <ModalContent>
              {
                (onClose)=>(
                  <>
                    <ModalHeader className="flex flex-col gap-1">Create an Exam With AI</ModalHeader>
                    <ModalBody className="grid grid-cols-12">
                      <div className="col-span-12">
                        <Input
                          label = "Name of the Exam"
                          type="text"
                          isRequired
                          onChange={(e)=>setExamName(e.target.value)}
                          value={examName}
                        />
                      </div>
                      <div className="col-span-12 sm:col-span-6">
                        <Input
                          label = "Number Of Questions"
                          type="number"
                          isRequired
                          min={1}
                          value={numberOfQuestions}
                          onChange={(e)=>setNumberOfQuestions(e.target.value)}
                        />
                      </div>
                      <div className="col-span-12 sm:col-span-6">
                        <Select label = "Difficulty" onChange={(e)=>setDifficulty(e.target.value as Difficulty)} isRequired value={difficulty}>
                          {difficulties.map((difficulty)=>{
                            return(
                              <SelectItem key={difficulty.value}>
                                {difficulty.label}
                              </SelectItem>
                            )
                          })}
                        </Select>
                      </div>
                      <div className="col-span-12 sm:col-span-6">
                        <Textarea
                          label = "Topics To Cover"
                          type="text"
                          isRequired
                          value={topics}
                          placeholder="Example(Write comma seperated):Computer Networks,TCP,UDP"
                          onChange={(e)=>setTopics(e.target.value)}
                        />
                      </div>
                      <div className="col-span-12 sm:col-span-6">
                        <Textarea
                          label = "Customize the question types"
                          type="text"
                          isRequired
                          value={questionTypes}
                          placeholder="Example:Create essay, true false and multiple choice questions"
                          onChange={(e)=>setQuestionTypes(e.target.value)}
                        />
                      </div>
                      <div className="col-span-12 sm:col-span-6">
                        <Checkbox defaultSelected color="default" onChange={(e)=>setIsExamPublic(!isExamPublic)}>Is this Exam public?</Checkbox>
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button variant="ghost" onClick={onClose}>Cancel</Button>
                      <Button onClick={handleCreateExam} isDisabled = {isLoading} isLoading = {isLoading}>Create</Button>
                    </ModalFooter>
                  </>
                )
              }
            </ModalContent>
        </Modal>       
    </div>
  );
};

export default MyExams;
