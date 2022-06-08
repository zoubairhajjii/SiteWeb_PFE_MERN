import React, { useState, useEffect, Fragment } from "react";
import "./NewServiceAdd.css";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import MetaData from "../../../../utils/title/MetaData";
import { addService } from "../../../../redux/actions/serviceAction";
import PhoneIcon from "@mui/icons-material/Phone";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PinDropIcon from "@mui/icons-material/PinDrop";
import DescriptionIcon from "@mui/icons-material/Description";
import { useNavigate } from "react-router-dom";
import Loading from "../../../../components/loaders/Loading";
const NewServiceAdd = () => {
  const dispatch = useDispatch();

  const Navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.serviceReducer);

  const [data, setData] = useState({
    category: "",
    nom_de_fournisseur: "",
    DescriptionService: "",
    imageService: "f",
    price: 0,
    localisation: "",
  });
  const categories = ["électricite", "plombier", "cheff", "climatisation"];
  const {
    category,
    nom_de_fournisseur,
    DescriptionService,
    imageService,
    price,
    localisation,
  } = data;

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addService(data, Navigate));
  };

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <MetaData title="Add New Product" />
          <div className="allTypeFormPage">
            <div className="mainFormContainer ">
              <div className="form__header">
                <h2>Create Service</h2>
              </div>
              <form
                className="formClass"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
              >
                <div className="form__control newp">
                  <select
                    onChange={onChange}
                    name="category"
                    value={data.category}
                  >
                    <option>Choose Category</option>
                    {categories.map((cate) => (
                      <option key={cate} value={cate}>
                        {cate}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form__control ship">
                  <DescriptionIcon />
                  <textarea
                    placeholder="Product Description"
                    value={data.DescriptionService}
                    onChange={onChange}
                    cols="30"
                    rows="1"
                    name="DescriptionService"
                    maxLength="200"
                  ></textarea>
                </div>
                <div id="createProductFormFile" className="form__control ship">
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    name="image"
                    onChange={onChange}
                    value={data.image}
                  />
                  {}
                </div>
                <div className="form__control ship">
                  <AttachMoneyIcon />
                  <input
                    type="number"
                    placeholder="Price"
                    required
                    onChange={onChange}
                    name="price"
                    min="1"
                  />
                </div>

                <div className="form__control ship">
                  <PinDropIcon />
                  <input
                    type="text"
                    placeholder="localisation"
                    name="localisation"
                    value={data.localisation}
                    onChange={onChange}
                  />
                </div>

                <button
                  id="createProductBtn"
                  className="formSubmitBtn"
                  type="submit"
                >
                  Create
                </button>
              </form>
            </div>
          </div>
        </Fragment>
      )}
      <ToastContainer />
    </Fragment>
  );
};

export default NewServiceAdd;
