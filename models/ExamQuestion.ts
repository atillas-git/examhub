import mongoose from "@/lib/mongodb";

const examQuestionSchema = new mongoose.Schema(
  {
    examId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    questionId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.models.ExamQuestion ||
  mongoose.model("ExamQuestion", examQuestionSchema);
