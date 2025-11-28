const { tripModel } = require("../models/tripModel");


async function allTrip(payload) {
  let result = await tripModel.aggregate([
    { $match: payload.name },
    { $match: payload.email },
    { $skip: parseInt(payload.offset) },
    { $limit: parseInt(payload.limit) },
  ]);
  return result;
}

module.exports = { allTrip };
