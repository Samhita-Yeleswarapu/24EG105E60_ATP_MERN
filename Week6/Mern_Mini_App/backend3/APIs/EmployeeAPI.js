import exp from "express";
import { EmployeeModel } from "../models/EmployeeModel.js";

export const empApp = exp.Router();


empApp.post("/employees", async (req, res) => {

  try {

    console.log(req.body);

    const newEmployee =
      new EmployeeModel(req.body);

    const savedEmployee =
      await newEmployee.save();

    res.status(201).json({
      message: "Employee created",
      payload: savedEmployee
    });

  } catch (error) {

    console.log("CREATE ERROR:", error);

    // duplicate email/mobile
    if (error.code === 11000) {

      const duplicateField =
        Object.keys(error.keyPattern)[0];

      return res.status(400).json({
        message: `${duplicateField} already exists`
      });
    }

    // mongoose validation
    if (error.name === "ValidationError") {

      return res.status(400).json({
        message: error.message
      });
    }

    res.status(500).json({
      message: error.message
    });
  }
});

// READ all employees
empApp.get("/employees", async (req, res) => {
  try {

    const employees =
      await EmployeeModel.find();

    res.status(200).json({
      message: "Employees fetched successfully",
      payload: employees
    });

  } catch (error) {

    console.log(
      "FETCH EMPLOYEES ERROR:",
      error
    );

    res.status(500).json({
      message: "Internal Server Error",
      error: error.message
    });
  }
});


// UPDATE employee
empApp.put("/employees/:email", async (req, res) => {
  try {

    const updatedData = req.body;

    const updatedEmployee =
      await EmployeeModel.findOneAndUpdate(
        {
          email: req.params.email
        },
        {
          $set: updatedData
        },
        {
          new: true,
          runValidators: true
        }
      );

    if (!updatedEmployee) {
      return res.status(404).json({
        message: "Employee not found"
      });
    }

    res.status(200).json({
      message: "Employee updated successfully",
      payload: updatedEmployee
    });

  } catch (error) {

    console.log(
      "UPDATE EMPLOYEE ERROR:",
      error
    );

    res.status(500).json({
      message: "Internal Server Error",
      error: error.message
    });
  }
});


// DELETE employee
empApp.delete("/employees/:email", async (req, res) => {
  try {

    const deletedEmployee =
      await EmployeeModel.findOneAndDelete({
        email: req.params.email
      });

    if (!deletedEmployee) {
      return res.status(404).json({
        message: "Employee not found"
      });
    }

    res.status(200).json({
      message: "Employee deleted successfully",
      payload: deletedEmployee
    });

  } catch (error) {

    console.log(
      "DELETE EMPLOYEE ERROR:",
      error
    );

    res.status(500).json({
      message: "Internal Server Error",
      error: error.message
    });
  }
});
