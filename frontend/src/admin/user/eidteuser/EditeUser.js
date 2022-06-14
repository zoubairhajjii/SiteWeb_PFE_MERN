import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory, useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../sidebar/Sidebar";

const EditUser = () => {
  let Navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    prenom: "",
    email: "",
    Telephone: "",
  });

  const { name, prenom, email, Telephone } = user;
  const onInputChange = (e) => {
    setUser({
       ...user, 
      [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/user/edituser/${id}`, user);
    Navigate("/listUser");
  };

  const loadUser = async () => {
    const result = await axios.get("http://localhost:5000/api/user/users");
    setUser(result.data);
  };
  return (
    <>
   
      <div className="user">
     
        <div className="userTitleContainer">
          <h1>Edit User</h1>
          <Link to="/newUser">
            <button>Create</button>
          </Link>
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
                <label>name</label>
                <input
                name="name"
                  type="text"
                  placeholder="name"
                  className="userUpdateInput"
                  value={name}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="userUpdateLeftItmes">
                <label>prenom</label>
                <input
                  type="text"
                  name="prenom"
                  placeholder="prenom "
                  value={prenom}
                  className="userUpdateInput"
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="userUpdateLeftItmes">
                <label>Email</label>
                <input
                name="email"
                  type="text"
                  placeholder="email99@gmail.com "
                  className="userUpdateInput"
                  value={email}
                  onChange={(e) => onInputChange(e)}
                />
              </div>
              <div className="userUpdateLeftItmes">
                <label>Telephone</label>
                <input
                name="Telephone"
                  type="text"
                  placeholder="+216 456 7894"
                  className="userUpdateInput"
                  value={Telephone}
                  onChange={(e) => onInputChange(e)}
                />
              </div>

              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditUser;
