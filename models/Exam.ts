import mongoose from "@/lib/mongodb";

const createdByUserSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { _id: false },
);

const examSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
    },
    noOfQuestions: {
      type: Number,
    },
    createdByUser: {
      type: createdByUserSchema,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.models.Exam || mongoose.model("Exam", examSchema);
