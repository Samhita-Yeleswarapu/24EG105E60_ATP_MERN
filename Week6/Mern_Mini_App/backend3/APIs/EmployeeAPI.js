import exp from 'express';
import { EmployeeModel } from '../models/EmployeeModel.js';

export const empApp = exp.Router();


//CREATE employee
empApp.post("/employees", async (req, res) => {
  try {
    const newEmployee = req.body;
    console.log(req.body);
    //validation
    if (!newEmployee.email || !newEmployee.name) {
      return res.status(400).json({
        message: "Name and Email are required"
      });
    }

    const newEmployeeDocument = new EmployeeModel(newEmployee);
    const result = await newEmployeeDocument.save();
    res.status(201).json({
      message: "Employee created",
      payload: result
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating employee",
      error: error.message
    });
  }
});


//READ all employees
empApp.get("/employees", async (req, res) => {
  try {
    const employeeList = await EmployeeModel.find();
    res.status(200).json({
      message: "Employees fetched",
      payload: employeeList
    });
  } catch (error) {
    res.status(500).json({
      message: "Error fetching employees",
      error: error.message
    });
  }
});

//UPDATE employee
empApp.put("/employees/:email", async (req, res) => {
  try {
    const modifiedEmployee = req.body;
    const updatedEmployee = await EmployeeModel.findOneAndUpdate(
      { email: req.params.email },
      { $set: modifiedEmployee },
      { new: true, runValidators: true }
    );
    if (!updatedEmployee) {
      return res.status(404).json({
        message: "Employee not found"
      });
    }
    res.status(200).json({
      message: "Employee updated",
      payload: updatedEmployee
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating employee",
      error: error.message
    });
  }
});


//DELETE employee
empApp.delete("/employees/:email", async (req, res) => {
  try {
    const deletedEmployee = await EmployeeModel.findOneAndDelete({
      email: req.params.email
    });
    if (!deletedEmployee) {
      return res.status(404).json({
        message: "Employee not found"
      });
    }
    res.status(200).json({
      message: "Employee deleted",
      payload: deletedEmployee
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting employee",
      error: error.message
    });
  }
});
