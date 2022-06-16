import axios from "axios";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@mui/material";
import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getUserData } from "../../utils/LocalStorage";
import { getDemande } from "../../redux/actions/demandeAction";
import { demandeReducer } from "../../redux/reducers/demandeReducer";
import "./Mydemade.css";
import { useDispatch, useSelector } from "react-redux";
function Mydemade() {
  const [open, setOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [ratingIn, setRatingIn] = useState({ rating: 0, comment: "" });
  const [demandes, setDemandes] = useState([]);
  const [user, setUser] = useState();
  const dispatch = useDispatch();
  const { demande } = useSelector((state) => {
    return state.demandeReducer;
  });
  const location = useLocation();
  const navigate = useNavigate();
  const options = {
    readOnly: true,
    precision: 0.5,
  };
  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };
  const { rating, comment } = ratingIn;
  const reviewSubmitHandler = (e) => {
    e.preventDefault();

    setRatingIn({ rating: "", comment: "" });
    setOpen(false);
  };
  function addfeedback(id) {
    axios.post(`http://localhost:5000/api/FeedBack/${id}/addFeedBack`).then();
  }

  function getData(id) {
    axios
      .get("http://localhost:5000/api/Demande/Demandes/" + id)
      .then((result) => setDemandes(result.data.ListOfDemande));
     
  }
  useEffect(() => {

    
    getUserData().then((res) => getData(res._id));
  }, []);
  const setRInput = (e) => {
    setRatingIn({ ...ratingIn, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      {demandes.map((demn) => (
      
        <div className="card_item">
          <div className="card_inner">
            <div className="userName">
              {" "}
              <div>
              {demn.description}
              <div/>
              {demn.prix}
              <div>
                {demn.date}
              </div>
          
          </div></div>
            <div class="userName">{demn.etat}</div>

            {demn.etat === "validé" && (
              <button onClick={submitReviewToggle} className="btnPrimary">
                Submit Review
              </button>
            )}
            <Dialog open={open} onClose={submitReviewToggle}>
              <DialogTitle>Submit Review</DialogTitle>
              <DialogContent className="submitDialog">
                <Rating
                  onChange={setRInput}
                  value={ratingIn.rating}
                  size="large"
                  name="rating"
                />

                <textarea
                  className="submitDialogTextArea"
                  cols="30"
                  rows="5"
                  value={ratingIn.comment}
                  onChange={setRInput}
                  name="comment"
                ></textarea>
              </DialogContent>
              <DialogActions className="dialogActions">
                <Button onClick={submitReviewToggle} color="secondary">
                  Cancel
                </Button>
                <Button onClick={reviewSubmitHandler} color="primary">
                  Submit
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Mydemade;
