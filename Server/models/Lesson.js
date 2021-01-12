const mongoose = require("mongoose");

const LessonSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
  },
  { timestamps: true }
);

mongoose.model("Lesson", LessonSchema);
