const express = require("express");
const {
  assignSubjectForStudent,
  getAllSubjectsFromStudent,
  editSubject,
} = require("../Controllers/users");
const router = express.Router();

// إسناد مادة دراسية لطالب
router.post("/assign", assignSubjectForStudent);

// الحصول على المواد الدراسية الخاصة بالطالب
router.get("/:userId/subjects", getAllSubjectsFromStudent);

router.put("/:userId/subjects/:subjectId", editSubject);

module.exports = router;
