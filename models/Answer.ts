import mongoose from "@/lib/mongodb";

const answerSchema = new mongoose.Schema({
  content: {
    type: String,
  },
  questionId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

export default mongoose.models.Answer || mongoose.model("Answer", answerSchema);
