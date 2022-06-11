
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

import axios from "axios";
import { Container } from "@mui/material";

const Ajout = () => {
  const [data, setData] = useState({
    name: "",
    prenom: "",
    email: "",
    password: "",
    Telaphone: "",
    adresse: "",
    profile: "",
    role: "",
  });
  const [files, setFiles] = useState("");
  const [info, setInfo] = useState({});
  const [rooms, setRooms] = useState([]);

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSelect = (e) => {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setRooms(value);
  };

  console.log(files);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const list = await Promise.all(
        Object.values(files).map(async (file) => {
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "upload");
          const uploadRes = await axios.post(
            "https://api.cloudinary.com/v1_1/lamadev/image/upload",
            data
          );

          const { url } = uploadRes.data;
          return url;
        })
      );

      const newhotel = {
        ...info,
        rooms,
        photos: list,
      };

      await axios.post("/hotels", newhotel);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container className="container">
      <div className="new">
        <div className="newContainer">
          <div className="top">
            <h1 className="h1">Add New USER</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img
                src={
                  files
                    ? URL.createObjectURL(files[0])
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
              />
            </div>
            <div className="right">
              <form>
                

                <div className="formInput" id="name">
                  <label>name</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    placeholder="name"
                  />
                </div>
                <div className="formInput" id="prenom">
                  <label>prenom</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    placeholder="your prenom"
                  />
                </div>
                <div className="formInput" id="email">
                  <label>email</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    placeholder="your email"
                  />
                </div>
                <div className="formInput" id="password">
                  <label>pasword</label>
                  <input
                    onChange={handleChange}
                    type="password"
                    placeholder="your password"
                  />
                </div>
                <div className="formInput" id="Telephone">
                  <label>Telephone</label>
                  <input
                    onChange={handleChange}
                    type="number"
                    placeholder="Telephone"
                  />
                </div>
                <div className="formInput" id="adresse">
                  <label>adresse</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    placeholder="your adresse"
                  />
                </div>
                <div className="formInput" id="role">
                  <label>role</label>
                  <input
                    onChange={handleChange}
                    type="text"
                    placeholder="role"
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="file">
                    Image: <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    multiple
                    onChange={(e) => setFiles(e.target.files)}
                    style={{ display: "none" }}
                  />
                </div>

                <button onClick={handleClick}>add</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Ajout;
