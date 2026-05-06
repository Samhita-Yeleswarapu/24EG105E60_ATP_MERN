import exp from 'express';
import { connect } from 'mongoose';
import { empApp } from './APIs/EmployeeAPI.js';
import cors from 'cors';

const app = exp();
const port = 1000;

//CORS middleware
app.use(cors({
  origin: ['http://localhost:5173']
}));

//body parser
app.use(exp.json());

//routes
app.use("/employee-api", empApp);


//DB connection,server
async function connectDB() {
  try {
    await connect('mongodb://127.0.0.1:27017/backend3db');
    console.log("DB connection success");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

  } catch (err) {
    console.log("Error in DB connection:", err.message);
  }
}
connectDB();


//error handling middleware
app.use((err, req, res, next) => {

  // validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation Error",
      error: err.message
    });
  }

  // duplicate key error
  if (err.code === 11000) {
    return res.status(400).json({
      message: "Duplicate field value",
      error: err.keyValue
    });
  }

  res.status(500).json({
    message: "Server Error",
    error: err.message
  });
});