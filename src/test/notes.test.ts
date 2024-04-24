import dotenv from "dotenv";
dotenv.config({ path: ".env.test" });

import request from "supertest";
import app from "../app";
import { NotesService } from "../services/notesService";
import connectToDB, { closeConnection } from "../config/db";

beforeAll(async () => {
  await connectToDB();
});

afterAll(async () => {
  await closeConnection();
});

describe("Note API tests", () => {
  // Notes Mock data
  const mockNotes = [
    { id: "1", title: "Note 1", content: "Content 1" },
    { id: "2", title: "Note 2", content: "Content 2" },
  ];

  const newNote = { title: "New Note", content: "New Content" };
  const createdNote = { id: "1", ...newNote };

  const updatedNote = { title: "Updated Note", content: "Updated Content" };
  const noteId = "1";
  const updatedNoteWithId = { id: noteId, ...updatedNote };

  it("Get - List of all Notes API", async () => {
    //@ts-ignore
    jest.spyOn(NotesService, "getnotes").mockResolvedValueOnce(mockNotes);

    const response = await request(app).get("/api/v1/notes");
    expect(response.status).toBe(200);
    expect(response.body.data).toEqual(mockNotes);
  });

  it("POST - create new Note", async () => {
    // @ts-ignore
    jest.spyOn(NotesService, "createNote").mockResolvedValueOnce(createdNote);

    const response = await request(app).post("/api/v1/notes").send(newNote);

    expect(response.status).toBe(201);
    console.log(JSON.stringify(response.body));
    expect(response.body.data).toEqual(createdNote);
  });

  it("PUT - update notes", async () => {
    jest
      .spyOn(NotesService, "updateNote")
      // @ts-ignore
      .mockResolvedValueOnce(updatedNoteWithId);

    const response = await request(app)
      .put(`/api/v1/notes/${noteId}`)
      .send(updatedNote);

    expect(response.status).toBe(200);
    expect(response.body.data).toEqual(updatedNoteWithId);
  });

  it("DELETE -  delete a note", async () => {
    // @ts-ignore
    jest.spyOn(NotesService, "deleteNote").mockResolvedValueOnce(true);

    const response = await request(app).delete(`/api/v1/notes/${noteId}`);

    expect(response.status).toBe(200);
  });
});
