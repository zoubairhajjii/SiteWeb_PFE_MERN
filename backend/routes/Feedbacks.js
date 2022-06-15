const express = require("express");
const {
  addFeedBack,
  getFeedBack,
  deleteFeedBack,
} = require("../controllers/Feedbacks");
const { isAuth } = require("../middlewares/isAuth");

const FeedbackRoute = express.Router();

FeedbackRoute.post("/:id/addFeedBack/", addFeedBack);
FeedbackRoute.get("/:id/FeedBacks", getFeedBack);
FeedbackRoute.delete("/deleteFeedBack/:id", isAuth, deleteFeedBack);

module.exports = FeedbackRoute;
