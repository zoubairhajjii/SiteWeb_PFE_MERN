import { Publish } from "@mui/icons-material";
import React from "react";
import "./EditeSerivce.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
const EditeUser = () => {
  let Navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    prenom: "",
    email: "",
    Telephone: "",
    Addresse:"",
    role: "",
  });

  const { name, username, email, phone, website } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/api/user/edituser${id}`, user);
    Navigate("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3003/users/${id}`);
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
          <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateLeftItmes">
                <label>name</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="userUpdateInput"
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="userUpdateLeftItmes">
                <label>prenom</label>
                <input
                  type="text"
                  placeholder="Anna Beck "
                  className="userUpdateInput"
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="userUpdateLeftItmes">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com "
                  className="userUpdateInput"
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="userUpdateLeftItmes">
                <label>Telephone</label>
                <input
                  type="text"
                  placeholder="+ 123 456 7894"
                  className="userUpdateInput"
                  onChange={e => onInputChange(e)}
                />
              </div>
              <div className="userUpdateLeftItmes">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York / USA"
                  className="userUpdateInput"
                  onChange={e => onInputChange(e)}
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

export default EditeUser;
