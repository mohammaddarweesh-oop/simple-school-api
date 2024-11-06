const express = require("express");
const Subject = require("../models/Subject");

const createSubject = async (req, res) => {
  const { name, passMark } = req.body;

  try {
    const newSubject = new Subject({ name, passMark });
    await newSubject.save();
    res
      .status(201)
      .json({ message: "Subject created successfully!", subject: newSubject });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getSubjects = async (req, res) => {
  try {
    const subjects = await Subject.find();
    res.json(subjects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const editSubject = async (req, res) => {
  const { id } = req.params;
  const { name, passMark } = req.body;
  try {
    const subject = await Subject.findByIdAndUpdate(
      id,
      { name, passMark },
      { new: true }
    );
    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }
    res.json(subject);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteSubject = async (req, res) => {
  const { id } = req.params;
  try {
    const subject = await Subject.findByIdAndDelete(id);
    if (!subject) {
      return res.status(404).json({ message: "Subject not found" });
    }
    res.json({ message: "Subject deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createSubject,
  getSubjects,
  editSubject,
  deleteSubject,
};
