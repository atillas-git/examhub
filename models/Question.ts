import mongoose from "@/lib/mongodb";

const questionSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
    },
    topics: {
      type: [],
    },
  },
  { timestamps: true },
);

export default mongoose.models.Question ||
  mongoose.model("Question", questionSchema);
