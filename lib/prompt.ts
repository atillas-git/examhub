export function prompt(examName:string,topics:string,noOfQuestion:Number,difficulty:string,type:string):string{
    const propmt = `Create a an exam which have ${noOfQuestion} questions and includes the following topics ${topics}. Exam must be ${difficulty} difficulty.
    Questions type should be ${type}.
    Do not write the answers yet. Do not write a paragraph make sure to return a JSON with the following format {examName:${examName},exam:[{question:"Example Question",type:"essay"},{question:"Example question2",type:"multiple-choice",answers:["answer a","answer b","answer c",answer d]}]}.
    Type of the a question can only be the following : essay,multiple-choice,boolean`
    return propmt;
}