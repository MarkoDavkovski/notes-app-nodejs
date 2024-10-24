import { addNote, removeNote, listNotes, readNote } from "./notes.js";

import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
  .version("1.1.0")
  .command({
    command: "add",
    describe: "Add a new note",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
      body: {
        describe: "Note Body",
        demandOption: true,
        type: "string",
      },
    },
    handler: function (argv) {
      addNote(argv.title, argv.body);
    },
  })
  .command({
    command: "remove",
    describe: "Remove the note",
    builder: {
      title: {
        describe: "Note title",
        demandOption: true,
        type: "string",
      },
    },
    handler: function (argv) {
      removeNote(argv.title);
    },
  })
  .command({
    command: "read",
    describe: "Read the note",
    builder: {
      title: {
        describe: "Note title to read",
        demandOption: true,
        type: "string",
      },
    },
    handler: function (argv) {
      readNote(argv.title);
    },
  })
  .command({
    command: "list",
    describe: "List your notes",
    handler: function () {
      listNotes();
    },
  })
  .help().argv;
