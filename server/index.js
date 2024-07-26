import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import cors from "cors";
import EmployeeModel from "./models/Employee.js"; // Include the .js extension

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/employee", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
  });

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Success");
      } else {
        res.json("The password is incorrect");
      }
    } else {
      res.json("No record existed");
    }
  });
});

app.post("/register", async (req, res) => {
  console.log("Request body:", req.body); // Log the request body for debugging

  try {
    // Check if an employee with the given email already exists
    const existingEmployee = await EmployeeModel.findOne({
      email: req.body.email,
    });
    if (existingEmployee) {
      return res
        .status(400)
        .json({ error: "An account with this email already exists." });
    }

    // Create a new employee
    const newEmployee = await EmployeeModel.create(req.body);
    res.status(201).json(newEmployee);
  } catch (err) {
    console.error("Error creating employee:", err); // Log the error for debugging
    res.status(500).json({ error: err.message });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
