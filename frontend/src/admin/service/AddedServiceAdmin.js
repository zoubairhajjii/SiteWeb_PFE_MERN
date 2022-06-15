import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import FileBase from "react-file-base64";
import "./addservice.css";
import axios from "axios";
function AddedServiceAdmin() {
  const [service, setService] = useState({
    category: "",
    DescriptionService: "",
    image: "",
    localisation: "",
    price: "",
  });
  const categories = ["électricite", "plombier", "cheff", "climatisation"];
  const { category, DescriptionService, image, localisation, price } = service;

  const onInputChange = (e) => {
    setService({
      ...service,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/user/addUser", {
        service,
      })
      .then(() => {
        console.log("seccus");
        console.log();
      });
  };

  return (
    <>
      <Sidebar />
     
      <div className="newUser">
        <h1>New SERVICE</h1>
       
        <form
          action=""
          className="userUpdateForm"
          onSubmit={(e) => onSubmit(e)}
        > 
        <div className="container">

          <div className="newUserItem">
            <select
              value={category}
              onChange={(e) => onInputChange(e)}
              name="category"
            >
              <option>Choose Category</option>
              {categories.map((cate) => (
                <option key={cate} value={cate}>
                  {cate}
                </option>
              ))}
            </select>
          </div>
          <div className="newUserItem">
            <label>DescriptionService</label>
            <input
              type="text"
              name="DescriptionService"
              placeholder="DescriptionService "
              value={DescriptionService}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="newUserItem">
            <label>localisation</label>
            <input
              name="localisation"
              type="text"
              placeholder="localisation "
              value={localisation}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="newUserItem">
            <label>price</label>
            <input
              name="price"
              type="number"
              placeholder="price"
              value={price}
              onChange={(e) => onInputChange(e)}
            />
          </div>

          <div className="newUserItem">
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setService({ ...service, image: base64 })}
            />
          </div>
          <button className="newUserButton">Create</button>
          </div>
        </form>
        </div> 
     
    </>
  );
}
export default AddedServiceAdmin;
