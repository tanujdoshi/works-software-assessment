import express from "express";
import {
  getnotes,
  addNotes,
  getNote,
  updateNote,
  deleteNote,
} from "../controllers/notesController";
import { validateNotes } from "../middleware/validationMiddleware";

const router = express.Router();

/**
 * @swagger
 * /api/v1/notes/:
 *   post:
 *     summary: create new notes
 *     description: This api will create new notes based on title and content
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the note
 *               content:
 *                 type: string
 *                 description: The content of the note
 *     responses:
 *       201:
 *         description: Successful response with a single list of notes.
 */
router.post("/", validateNotes, addNotes);

/**
 * @swagger
 * /api/v1/notes:
 *   get:
 *     summary: Get a list of notes
 *     description: Retrieve a list of notes from the database.
 *     responses:
 *       200:
 *         description: Successful response with a list of notes.
 */
router.get("/", getnotes);

/**
 * @swagger
 * /api/v1/notes/:id:
 *   get:
 *     summary: Get a single list of notes
 *     description: Retrieve a single list of notes from the database.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the note to fetch
 *     responses:
 *       200:
 *         description: Successful response with a single list of notes.
 */
router.get("/:id", getNote);

/**
 * @swagger
 * /api/v1/notes/{id}:
 *   put:
 *     summary: update a note
 *     description: This api will update an existing note based on ID with new title and content
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the note to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *             properties:
 *               title:
 *                 type: string
 *                 description: The new title of the note
 *               content:
 *                 type: string
 *                 description: The new content of the note
 *     responses:
 *       200:
 *         description: Successful response with the updated note.
 *       404:
 *         description: Note not found.
 */
router.put("/:id", validateNotes, updateNote);

/**
 * @swagger
 * /api/v1/notes/{id}:
 *   delete:
 *     summary: delete a note
 *     description: This api will delete an existing note based on ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the note to delete
 *     responses:
 *       200:
 *         description: Successful deletion message of note
 *       404:
 *         description: Note not found.
 */
router.delete("/:id", deleteNote);

export default router;
