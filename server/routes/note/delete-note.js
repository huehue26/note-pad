const express = require("express");
const router = express.Router();
const clientPromise = require("../../mongodb-config");

router.post("/delete-note", async (req, res) => {
  if (req.method === "POST") {
    const noteId = req.body.id;
    const client = await clientPromise;
    const db = client.db("user-notes");
    await db.collection("notes").deleteOne({ id: noteId });
    res.json({ message: "Note succesfully deleted", success: true });
  } else {
    res.json({ message: "This request is not allowed", success: false });
  }
});

module.exports = router;
