const { tripModel } = require("../models/tripModel");
const { allTrip } = require("../util/trip.util");

let postTrip = async (req, res) => {
  try {
    const { name, email, phone,message } = req.body;
    const newTrip = new tripModel({ name, email, phone,message });
    await newTrip.save();
    return res.status(201).json({ message: "Your Trip Query has been submitted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

let putTrip = async (req, res) => {
  try {
    const existingTrip = await tripModel.findById(req.params.id);
    if (!existingTrip) {
      return res.status(404).json({ message: "Trip Query not found" });
    }
    await tripModel.findOneAndUpdate(existingTrip._id, req.body);
    return res.status(200).json({ message: "Trip Query has been updated" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

let deleteTrip = async (req, res) => {
  try {
    const tripId = req.params.id;
    const existingTrip = await tripModel.findById(tripId);
    if (!existingTrip) {
      return res.status(404).json({ message: "Trip Query not found" });
    }
    await tripModel.findOneAndDelete({ _id: existingTrip._id });
    return res.status(200).json({ message: "Trip Query has been deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

let getAllTrip = async (req, res) => {
  try {
    let query = req.query;
    let payload = {};
    if ("pageNumber" in query && "pageSize" in query) {
      payload.limit = parseInt(query.pageSize);
      payload.offset =
        (parseInt(query.pageNumber) - 1) * parseInt(query.pageSize);
    } else {
      payload.limit = 10;
      payload.offset = 0;
    }
    if ("name" in query) {
      payload.name = { name: query.name };
    } else {
      payload.name = {};
    }
    if ("email" in query) {
      payload.email = { email: query.email };
    } else {
      payload.email = {};
    }
    let AllTrip = await allTrip(payload);
    return res.status(200).json({ AllTrip });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


module.exports = {
  postTrip,
  putTrip,
  deleteTrip,
  getAllTrip
};
