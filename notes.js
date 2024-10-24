import chalk from "chalk";
import { NOTES_FILENAME } from "./constants.js";
import * as fs from "fs";

function listNotes() {
  const notes = loadNotes();
  if (notes.length === 0) {
    console.log(chalk.yellow.bold("You have no notes saved."));
    return;
  }
  console.log(chalk.bold.cyan("Your notes:"));
  notes.forEach((note) => {
    console.log(`- ${note.title}`);
  });
  return notes;
}
function readNote(title) {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (!note) {
    console.log(chalk.red.bold("Note with this title does not exist."));
    return;
  }
  console.log(chalk.bold.cyan(`Title: ${note.title}`));
  console.log(`Body: ${note.body}`);
  return note;
}

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);
  if (duplicateNote) {
    console.log(chalk.red.bold("Note title already taken."));
    return;
  }
  notes.push({ title: title, body: body });
  saveNotes(notes);
  console.log(chalk.green.bold("Note successfully added."));
};

const removeNote = (title) => {
  const notes = loadNotes();
  const foundNote = notes.find((note) => note.title === title);
  if (!foundNote) {
    console.log(chalk.red.bold("Note with this title does not exist"));
    return;
  }
  const filteredNotes = notes.filter((note) => note.title !== foundNote.title);
  saveNotes(filteredNotes);
  console.log(chalk.green.bold("Note successfully removed."));
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync(NOTES_FILENAME, dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync(NOTES_FILENAME);
    return JSON.parse(dataBuffer);
  } catch (error) {
    return [];
  }
};

export { listNotes, addNote, removeNote, readNote };
