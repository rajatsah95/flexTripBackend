let { Router } = require("express");
const {
  postTrip,
  putTrip,
  deleteTrip,
  getAllTrip,
} = require("../controllers/trip.controller");
const { authMiddleware } = require("../middlewares/auth.middleware");


let TripRouter = Router();

TripRouter.post("", authMiddleware, postTrip);
TripRouter.put("/:id", authMiddleware, putTrip);
TripRouter.delete("/:id", authMiddleware, deleteTrip);
TripRouter.get("", getAllTrip);


module.exports = { TripRouter };
