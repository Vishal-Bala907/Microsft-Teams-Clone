var express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
// const helmet = require("helmet");

var app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.set("strictQuery", false);

//!************ Database URL
const DB_URL = "mongodb://localhost:27017/Teams";
const DB_URL2 = "mongodb://localhost:27017/Chats";

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connected to User MongoDB...");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });

mongoose
  .connect(DB_URL2)
  .then(() => {
    console.log("Connected to Chats MongoDB...");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });
// }

// Schema
const schema = mongoose.Schema;
const userModelSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  number: String,
  imageFilename: String,
});

// Model
const userModel = mongoose.model("user", userModelSchema);

//! Defining storage for the images
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../Microsoft-Teams-Clone/public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

app.get("/", function (req, res) {
  res.send("Hello world!");
});

// Initialize multer with the storage options

app.post("/signup", upload.single("image"), async function (req, res) {
  // Access form fields and uploaded image from req.body and req.file respectively
  console.log(req.body);
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const number = req.body.number;
  const image = req.file;
  // Extract the filename of the uploaded image
  const imageFilename = req.file ? req.file.filename : null;
  // Create a new user document
  const newUser = new userModel({
    username,
    password,
    email,
    number,
    imageFilename,
  });
  try {
    const { email } = req.body;
    const findUser = await userModel.findOne({ email: email });
    if (findUser) {
      res.status(404).send({
        message: "Email is already registerd,Please use another email",
        alert: true,
        data: {
          message: "Email is already registerd,Please use another email",
        },
      });
    } else {
      const user = newUser.save();
      res.status(200).send({
        message: "Registration sucessfull",
        alert: true,
        data: user,
      });
    }
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ error: "An error occurred while saving the user" });
  }
});

//api login
// db.users.findOne({$and : [{username : {$eq:'vishalBala'}},{password:{$eq:'1234'}}]})
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email: email });

    if (user) {
      if (user.password === password) {
        const dataSend = {
          _id: user._id,
          username: user.username,
          email: user.email,
          number: user.number,
        };
        res.send({
          message: "Login is successful",
          alert: true,
          data: user,
        });
      } else {
        res.status(404).send({
          message: "Invalid Email or Password",
          alert: true,
          data: {
            message: "Invalid Email or Password",
          },
        });
      }
    } else {
      res.status(404).send({
        message: "Entered email is not registered !!! ",
        alert: true,
        data: {
          message: "Entered email is not registered !!! ",
        },
      });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "An error occurred during login" });
  }
});

app.get("/getAllUsers", async function (req, res) {
  console.log("Hello");
  try {
    const user = await userModel.find();
    res.status(200).json(user);
  } catch (error) {
    console.error("Error retrieving data:", error);
    res.status(500).json({ error: "An error occurred while retrieving data" });
  }
});

// TODO chats
const chatSchema = mongoose.Schema;
const chatModelSchema = mongoose.Schema({
  sender: String,
  message: String,
  date: String,
  time: String,
  receiver: String,
});

// Model
const chatModel = mongoose.model("char", chatModelSchema);

app.post("/send", async function (req, res) {
  // Access form fields and uploaded image from req.body and req.file respectively
  console.log(req.body);
  const sender = req.body.sender;
  const message = req.body.message;
  const date = req.body.date;
  const time = req.body.time;
  const receiver = req.body.receiver;
  // Extract the filename of the uploaded image
  // const imageFilename = req.file ? req.file.filename : null;
  // Create a new user document
  const newChat = new chatModel({
    sender,
    message,
    date,
    time,
    receiver,
  });
  try {
    const save = await chatModel.save();
    res.status(200).send({
      message: "Message saved",
      alert: true,
      data: save,
    });
    // }
  } catch (error) {
    console.error("Error saving user:", error);
    res.status(500).json({ error: "An error occurred while saving the user" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
