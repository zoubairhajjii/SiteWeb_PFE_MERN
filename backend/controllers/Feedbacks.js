const FeedbackSchema = require("../models/Feedbacks");

exports.addFeedBack = async (req, res) => {
  const { id } = req.params;
  try {
    const Feedback = new FeedbackSchema({
      ...req.body,
      DemId: id,
    });
    await Feedback.save();
    res.status(200).send({ msg: "new feedback", Feedback });
  } catch (error) {
    res.status(500).send({ msg: "could not add a feedback" });
  }
};
exports.deleteFeedBack = async (req, res) => {
  const { id } = req.params;
  try {
    const feedbackDeleted = await FeedbackSchema.findByIdAndDelete(id);
    res.status(200).send({ msg: "feedback deleted", feedbackDeleted });
  } catch (error) {
    res.status(500).send({ msg: "could not delete feedback", error });
  }
};
exports.getFeedBack = async (req, res) => {
  const { id } = req.params;
  try {
    const listOfFeedBack = await FeedbackSchema.find({
      DemId: id,
    });

    res.status(200).send({ msg: "list of Feedback", listOfFeedBack });
  } catch (error) {
    res.status(500).send({ msg: "could not get FeedBacks", error });
  }
};
