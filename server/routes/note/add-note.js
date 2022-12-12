const express = require("express");
const router = express.Router();
const clientPromise = require("../../mongodb-config");

router.post("/add-note", async (req, res) => {
  if (req.method == "POST") {
    const noteHeading = req.body.heading;
    const noteContent = req.body.note;
    const client = await clientPromise;
    const db = client.db("user-notes");
    const lastNote = await db
      .collection("notes")
      .find({})
      .sort({ _id: -1 })
      .toArray();
    const newNoteId = parseInt(lastNote[0].id) + 1;
    await db.collection("notes").insertOne({
      id: newNoteId,
      heading: noteHeading,
      note: noteContent,
    });
    res.json({ noteId: lastNote[0].id + 1, success: true });
  } else {
    res.json({ error: "This request is not allowed", success: false });
  }
});

module.exports = router;
