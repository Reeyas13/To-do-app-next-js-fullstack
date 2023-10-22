import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: String,

    description: String,
  },
  { timestamps: true }
);

// Check if the model is already defined, if not, define it
const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
