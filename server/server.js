const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

app.use(cors());
app.use(express.json({ limit: "50mb" }));

dotenv.config({ path: "./.env.local" });

const addNote = require("./routes/note/add-note");
const getNote = require("./routes/note/get-note");
const deleteNote = require("./routes/note/delete-note");

app.use("/note", addNote);
app.use("/note", getNote);
app.use("/note", deleteNote);

app.listen(5000);
