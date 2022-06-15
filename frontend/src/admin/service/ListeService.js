import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../sidebar/Sidebar";
import "./listeservice.css";
import { Link } from "react-router-dom";
const ListeService = () => {
  const [service, setService] = useState([]);

  useEffect(() => {
    loadService();
  }, []);

  const loadService = async () => {
    const result = await axios.get(
      "http://localhost:5000/api/Service/services"
    );
    setService(result.data.ListOfService);
  
    console.log(result.data);
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
                <th scope="col">category</th>
                <th scope="col">localisation</th>
                <th scope="col">price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {service.map((service, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{service.category}</td>
                  <td>{service.localisation}</td>
                  <td>{service.price}</td>
                  <Link class="btn btn-primary mr-2" to={`/users/${service._id}`}>
                  View
                </Link>
                <Link
                  class="btn btn-success"
                  to={`/EditeSerivce/${service._id}`}
                >
                  Edit
                </Link>
                <td
                
                  class="btn btn-danger mr-2"
                 
                >
                  Delete
                
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

export default ListeService;
