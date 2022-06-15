import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import "./editeSerivce.css"
import { getUserData } from "../../utils/LocalStorage";
const EditUser = () => {
  let Navigate = useNavigate();
  const [user, setUser] = useState();
  const { id } = useParams();
  const [service, setService] = useState({
    category: "",
    DescriptionService: "",
    
    localisation: "",
    price:"",
   
  });

  const { category, DescriptionService,  localisation, price} = service;
  const onInputChange = (e) => {
    setService({
       ...service, 
      [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getUserData().then((res) => setUser(res));
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/Service/editService/${id}/${user._id}`, service);
    Navigate("/listeService");
  };

  const loadUser = async () => {
    const result = await axios.get("http://localhost:5000/api/user/users");
    setService(result.data);
  };
  return (
    <>
   <Sidebar />
      <div className="user">
     
        <div className="userTitleContainer">
          <h1>Edit SERVCIE</h1>
         
        </div>

        <div className="userUpdate">
          <h3>Edit</h3>
          <form
            action=""
            className="userUpdateForm"
            onSubmit={(e) => onSubmit(e)}
          >
            <div className="userUpdateLeft">
              <div className="userUpdateLeftItmes">
                <label>category</label>
                <input
                name="category"
                  type="text"
                  placeholder="category"
                  className="userUpdateInput"
                  value={category}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="userUpdateLeftItmes">
                <label>DescriptionService</label>
                <input
                  type="text"
                  name="DescriptionService"
                  placeholder="DescriptionService "
                  value={DescriptionService}
                  className="userUpdateInput"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="userUpdateLeftItmes">
                <label>localisation</label>
                <input
                name="localisation"
                  type="text"
                  placeholder="localisation "
                  className="userUpdateInput"
                  value={localisation}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="userUpdateLeftItmes">
                <label>price</label>
                <input
                name="price"
                  type="number"
                  placeholder="price"
                  className="userUpdateInput"
                  value={price}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <button className="btt">Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUser;
