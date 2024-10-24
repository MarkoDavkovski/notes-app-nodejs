# Notes App

This is a simple Notes App built using **Node.js**. It allows users to create, remove, read, and list notes from the command line using the `yargs` library for argument parsing and `chalk` for colored output.

## Features

- **Add a note**: Add a new note with a title and body.
- **Remove a note**: Remove a note by specifying its title.
- **Read a note**: Read the contents of a note by title.
- **List notes**: List all saved notes.

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/your-username/notes-app.git
```

2. Navigate to the project directory:
   `cd notes-app`

3. Install the required dependencies
   `npm install`

## Usage

The following commands are available to interact with the Notes App:

1. Add a new note
   `node app.js add --title="Your Note Title" --body="Your Note Body"`

   - `--title`: The title of the note.
   - `--body`: The content of the note.
     Example: `node app.js add --title="Shopping List" --body="Buy milk, eggs, and bread."`

2. Remove a note
   `node app.js remove --title="Your Note Title"`

   - `--title`: The title of the note to remove.
     Example: `node app.js remove --title="Shopping List"`

3. Read a note
   `node app.js read --title="Your Note Title"`

   - `--title`: The title of the note to read.
     Example: `node app.js read --title="Shopping List"`

4. List all notes
   `node app.js list`
   Example output:

   ```
   Your notes:
   - Shopping List
   - Work Tasks
   ```
