const express = require("express");
const router = express.Router();
const clientPromise = require("../../mongodb-config");

router.get("/get-note", async (req, res) => {
  if (req.method == "GET") {
    const client = await clientPromise;
    const db = client.db("user-notes");
    const allNotes = await db.collection("notes").find({}).toArray();
    res.json({ data: allNotes, success: true });
  } else {
    res.json({ message: "This request is not allowed", success: false });
  }
});

module.exports = router;
