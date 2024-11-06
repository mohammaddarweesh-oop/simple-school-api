const express = require("express");
const router = express.Router();
const {
  createSubject,
  getSubjects,
  editSubject,
  deleteSubject,
} = require("../Controllers/subjects");
const authenticateToken = require("../middlewares/authenticateJWT ");

router.post("/create", authenticateToken, createSubject);

router.get("/", authenticateToken, getSubjects);

router.delete("/:id", authenticateToken, deleteSubject);
router.put("/:id", authenticateToken, editSubject);

module.exports = router;
