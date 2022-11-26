const express = require("express");
const connectDB = require("./config/db.js");
const UserRoutes = require("./routes/UserRoutes.js");
const AuthRoutes = require("./routes/AuthRoutes.js");
const PostRoutes = require("./routes/PostRoutes.js");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const { urlencoded } = require("express");

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(morgan("common"));

app.use(UserRoutes);
app.use(AuthRoutes);
app.use(PostRoutes);

app.listen(5000, () => {
  console.log("server started on port: 5000");
});
