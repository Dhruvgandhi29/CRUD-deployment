const express = require("express");
const studentRoute = express.Router();
const studentSchema = require("../Model/studentSchema");
const mongoose = require("mongoose");

studentRoute.post("/create-student", (req, res) => {
  studentSchema.create(req.body, (err, data) => {
    if (err) return err;
    else res.json(data);
  });
});
studentRoute.get("/", (req, res) => {
  studentSchema.find((err, data) => {
    if (err) return err;
    else res.json(data);
  });
});
studentRoute.delete("/delete-student/:id", (req, res) => {
  studentSchema.findByIdAndRemove(
    mongoose.Types.ObjectId(req.params.id),
    (err, data) => {
      if (err) return err;
      else res.json(data);
    }
  );
});

studentRoute
  .route("/update-student/:id") ///updates
  .get((req, res) => {
    //req.body.id

    studentSchema.findById(
      mongoose.Types.ObjectId(req.params.id),
      (err, data) => {
        if (err) return err;
        else res.json(data);
      }
    );
  })
  .put((req, res) => {
    studentSchema.findByIdAndUpdate(
      mongoose.Types.ObjectId(req.params.id),
      { $set: req.body },
      (err, data) => {
        if (err) return err;
        else res.json(data);
      }
    );
  });

module.exports = studentRoute;
//http://localhost:4000/students->GET
//http://localhost:4000/students/create-student +if requst type is post ->

//Axios.post(url,obj)
//Axios.post(http://localhost:4000/students/create-student ,obj)->it will be a request
//Axios.delete(http://localhost:4000/students/delete-student/)
//http://localhost:4000/students/update-student/:id
/*
_id: unique
name: Rekha
email:rekha@gmail.com
rollNo:*/
//done
