//create user schema
import { Schema, model } from "mongoose";

//create employee schema
const employeeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email"]
    },

    mobile: {
      type: String,
      required: [true, "Mobile number is required"],
      unique: true,
      match: [/^[0-9]{10}$/, "Mobile number must be 10 digits"]
    },

    designation: {
      type: String,
      required: [true, "Designation is required"],
      trim: true
    },

    companyName: {
      type: String,
      required: [true, "Company name is required"],
      trim: true
    }
  },
  {
    versionKey: false,
    timestamps: true
  }
);

//generate EmployeeModel
export const EmployeeModel = model("Employee", employeeSchema);
