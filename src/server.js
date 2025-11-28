const express = require("express");
const dotenv = require("dotenv");
const { AuthRouter } = require("./routes/auth.route");
const { connection } = require("./config/mongodbConnection.config");
const { TripRouter } = require("./routes/trip.route");

dotenv.config();
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Flex Trip" });
});
app.use("/auth", AuthRouter);
app.use("/trip", TripRouter);


app.listen(PORT, async () => {
  try {
    await connection;
    console.log("Database Connected");
    console.log(`Server is running at ${process.env.PORT}`);
  } catch (err) {
    console.log(err.message);
  }
});
