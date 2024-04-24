import { Notes } from "../models/Notes";
import { MESSAGES } from "../utils/messages";
import { isValidObjectId } from "../utils/helper";

class notesService {
  getnotes = async () => {
    const notes = await Notes.find({});
    return notes;
  };

  async createNote(data: any) {
    const newNote = await Notes.create(data);
    return newNote;
  }

  async updateNote(id: string, data: any) {
    if (!isValidObjectId(id)) {
      throw new Error(MESSAGES.INVALID_MONGO_ID);
    }
    const note = await Notes.findByIdAndUpdate({ _id: id }, data, {
      new: true,
    });
    if (!note) {
      throw new Error(MESSAGES.NOTE_NOT_AVAILABLE);
    }
    return note;
  }

  async deleteNote(id: string) {
    if (!isValidObjectId(id)) {
      throw new Error(MESSAGES.INVALID_MONGO_ID);
    }
    const note = await Notes.findByIdAndDelete(id);
    if (!note) {
      throw new Error(MESSAGES.NOTE_NOT_AVAILABLE);
    }
  }

  async getNote(id: string) {
    if (!isValidObjectId(id)) {
      throw new Error(MESSAGES.INVALID_MONGO_ID);
    }
    const note = await Notes.findById({ _id: id });
    if (!note) {
      throw new Error(MESSAGES.NOTE_NOT_AVAILABLE);
    }
    return note;
  }
}

export const NotesService = new notesService();
