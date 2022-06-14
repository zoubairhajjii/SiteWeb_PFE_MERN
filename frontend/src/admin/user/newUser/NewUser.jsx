import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import "./NewUser.scss";
import Sidebar from "../../sidebar/Sidebar";

const NewUser = () => {
  const [name, setName] = useState();
  const [prenom, setPernom] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [Telephone,setTelephone]=useState()
  const [role,setRole]=useState()
const [Adresse,setAdresse]=useState()
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:5000/api/user/addUser", {
        name,
        prenom,
        email,
        password,
        Telephone,
        Adresse,
        role
      })
      .then(() => {
        console.log("seccus");
        console.log();
      });
  };
  return (
    <>
      <div className="">
        <Sidebar />
      </div>
      <div className="">
        <Container className="container">
          <div className="new">
            <div className="newContainer">
              <div className="top">
                <h2 className="h1">Add New USER</h2>
              </div>
              <div className="bottom">
                <div className="left"></div>
                <div className="right">
                  <form onSubmit={handleSubmit}>
                    <div className="formInput" id="name">
                      <label>name</label>
                      <input
                        type="text"
                        placeholder="name"
                        name="name"
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                        value={name}
                      />
                    </div>
                    <div className="formInput" id="prenom">
                      <label>prenom</label>
                      <input
                        type="text"
                        placeholder="your prenom"
                        name="prenom"
                        onChange={(e) => {
                          setPernom(e.target.value);
                        }}
                        value={prenom}
                      />
                    </div>
                    <div className="formInput" id="email">
                      <label>email</label>
                      <input
                        type="email"
                        placeholder="your email"
                        name="email"
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        value={email}
                      />
                    </div>
                    <div className="formInput" id="password">
                      <label>password</label>
                      <input
                        type="password"
                        placeholder="your password"
                        name="password"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                        value={password}
                      />
                    </div>
                    <div className="formInput" id="Telephone">
                      <label>Telephone</label>
                      <input
                        type="number"
                        placeholder="your Telephone"
                        name="Telephone"
                        onChange={(e) => {
                          setTelephone(e.target.value);
                        }}
                        value={Telephone}
                      />
                    </div>
                    <div className="formInput" id="Adresse">
                      <label>Adresse</label>
                      <input
                        type="text"
                        placeholder="your Adress"
                        name="Adresse"
                        onChange={(e) => {
                          setAdresse(e.target.value);
                        }}
                        value={Adresse}
                      />
                    </div>
                    <div className="formInput" id="role">
                      <label>role</label>
                      <input
                        type="text"
                        placeholder="role"
                        name="role"
                        onChange={(e) => {
                          setRole(e.target.value);
                        }}
                        value={role}
                      />
                    </div>

                    <button onClick={handleSubmit}>add</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default NewUser;
