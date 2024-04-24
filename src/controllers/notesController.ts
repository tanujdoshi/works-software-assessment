import { Request, Response } from "express";
import { NotesService } from "../services/notesService";
import { MESSAGES } from "../utils/messages";
import { errorHandler } from "../utils/errorHandler";

export const getnotes = async (req: Request, res: Response) => {
  try {
    const notes = await NotesService.getnotes();
    res.json({
      success: true,
      message: MESSAGES.GET_NOTE_SUCCESS,
      data: notes,
    });
  } catch (error: any) {
    errorHandler(error, res);
  }
};

export const addNotes = async (req: Request, res: Response) => {
  try {
    const data = {
      title: req.body.title,
      content: req.body.content,
    };
    const note = await NotesService.createNote(data);
    res.status(201).json({
      success: true,
      message: MESSAGES.CREATE_NOTE_SUCCESS,
      data: note,
    });
  } catch (error: any) {
    errorHandler(error, res);
  }
};

export const getNote = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const note = await NotesService.getNote(id);
    res.status(200).json({
      success: true,
      message: MESSAGES.GET_NOTE_SUCCESS,
      data: note,
    });
  } catch (error: any) {
    errorHandler(error, res);
  }
};

export const updateNote = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const note = await NotesService.updateNote(id, req.body);
    res.status(200).json({
      success: true,
      message: MESSAGES.UPDATE_NOTE_SUCCESS,
      data: note,
    });
  } catch (error: any) {
    errorHandler(error, res);
  }
};

export const deleteNote = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await NotesService.deleteNote(id);
    res.status(200).json({
      success: true,
      message: MESSAGES.DELETE_NOTE_SUCCESS,
    });
  } catch (error: any) {
    errorHandler(error, res);
  }
};
