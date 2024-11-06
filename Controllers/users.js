const express = require("express");
const User = require("../models/User");
const Subject = require("../models/Subject");

// const assignSubjectForStudent = async (req, res) => {
//   const { userId, subjectId } = req.body;

//   try {
//     const user = await User.findById(userId);
//     const subject = await Subject.findById(subjectId);

//     if (!user || !subject) {
//       return res.status(404).json({ message: "User or Subject not found" });
//     }

//     if (!user.subjects) user.subjects = [];
//     user.subjects.push({
//       subjectId,
//       passMark: subject.passMark,
//       markObtained: null,
//     });
//     await user.save();

//     res.json({ message: "Subject assigned successfully!", user });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

const assignSubjectForStudent = async (req, res) => {
  const { userId, subjectId } = req.body;

  try {
    const user = await User.findById(userId);
    const subject = await Subject.findById(subjectId);

    if (!user || !subject) {
      return res.status(404).json({ message: "User or Subject not found" });
    }

    if (!user.subjects) user.subjects = [];

    // إضافة subjectId فقط إلى قائمة المواد
    user.subjects.push(subjectId);

    await user.save();

    res.json({ message: "Subject assigned successfully!", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllSubjectsFromStudent = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate(
      "subjects.subjectId"
    );
    res.json(user.subjects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editSubject = async (req, res) => {
  const { userId, subjectId } = req.params;

  try {
    // تحديث المستخدم لإضافة المادة
    const user = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { subjects: subjectId } }, // إضافة المادة بدون تكرار
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// const editSubject = async (req, res) => {
//   const { subjectId } = req.params;
//   const { name, passMark } = req.body; // الحقول التي ترغب في تعديلها

//   try {
//     // العثور على المستخدم الذي يحاول التعديل
//     const user = await User.findById(req.user.id); // يمكن استخدام `req.user.id` بعد التحقق من صلاحيات المستخدم

//     // تحقق إذا كان المستخدم هو مسؤول
//     if (!user.isAdmin) {
//       return res
//         .status(403)
//         .json({ message: "You do not have permission to edit the subject" });
//     }

//     // العثور على المادة بناءً على المعرف
//     const subject = await Subject.findById(subjectId);
//     if (!subject) {
//       return res.status(404).json({ message: "Subject not found" });
//     }

//     // تعديل الحقول المطلوبة
//     if (name) subject.name = name;
//     if (passMark) subject.passMark = passMark;

//     // حفظ التغييرات في المادة
//     await subject.save();

//     // إرجاع المادة المعدلة
//     res.json({ message: "Subject updated successfully!", subject });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

module.exports = {
  assignSubjectForStudent,
  getAllSubjectsFromStudent,
  editSubject,
};
