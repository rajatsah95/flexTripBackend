const express = require("express");
const dotenv = require("dotenv");
const { AuthRouter } = require("./routes/auth.route");
const { TripRouter } = require("./routes/trip.route");
const { connection } = require("./config/mongodbConnection.config");

dotenv.config();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Flex Trip" });
});
app.use("/auth", AuthRouter);
app.use("/trip", TripRouter);


app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Database Connected");
    console.log(`Server is running at ${process.env.PORT}`);
  } catch (err) {
    console.log(err.message);
  }
});
