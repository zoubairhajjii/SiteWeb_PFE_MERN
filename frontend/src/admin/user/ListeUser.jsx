import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './listeUser.css';
import Sidebar from "../sidebar/Sidebar";

const ListeUser = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5000/api/user/users");
    setUser(result.data.listOfUsers);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/user/deleteuser/${id}`);
    loadUsers();
  };

  return (
    <>
    {" "}
    <Sidebar />
    <div classNameName="cc">
      <div className="py-6 cc container">
        <h1>Liste Service</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">prenom</th>
              <th scope="col">email</th>
              <th scope="col">Telephone</th>
              <th scope="col">role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.prenom}</td>
              <td>{user.email}</td>
              <td>{user.Telephone}</td>
              <td>{user.role}</td>
              <td>
                <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                  View
                </Link>
                <Link
                  class="btn btn-success"
                  to={`/users/edit/${user._id}`}
                >
                  Edit
                </Link>
                <td
                
                  class="btn btn-danger mr-2"
                  onClick={() => deleteUser(user._id)}
                >
                  Delete
                
                </td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>

 
  </>
);
};

export default ListeUser;
