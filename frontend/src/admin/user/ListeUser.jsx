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
    <div className="li">
    <Sidebar />
    </div>
    <div className="aa">
    
    <div className="py-6">
      <h1>Liste USER</h1>
      <div className="zz">
      <table className="tableau" class="table border shadow">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">prenom</th>
            <th scope="col">Email</th>
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
              <td>
                <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}>
                  View
                </Link>
                <Link
                  class="btn btn-outline-primary mr-2"
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

  </div>
  </>
);
};

export default ListeUser;
