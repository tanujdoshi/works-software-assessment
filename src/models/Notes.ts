import { Schema, model } from "mongoose";

interface INotes {
  title: string;
  content: string;
}

const noteSchems = new Schema<INotes>({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});

noteSchems.set("timestamps", true);

export const Notes = model<INotes>("notes", noteSchems);
