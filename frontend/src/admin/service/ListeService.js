import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../sidebar/Sidebar";
import "./listeservice.css";
import { Link } from "react-router-dom";
import { getUserData } from "../../utils/LocalStorage";
import { notifySuccess } from "../../utils/alerts/Alerts";
const ListeService = () => {
  const [service, setService] = useState([]);
  const [user, setUser] = useState([]);



  useEffect(() => {
    getUserData().then((res) => setUser(res));
    loadService();
  }, []);

  const loadService = async () => {
    const result = await axios.get(
      "http://localhost:5000/api/Service/services"
    );
    setService(result.data.ListOfService);
  };
  const deletService = async (id) => {
    await axios
      .delete(`http://localhost:5000/api/Service/deleteService/${user._id}/${id}/`)
      .then(() => notifySuccess("Delete successful"),
      loadService());
  };

  return (
    <>
     
      <Sidebar />
      <div classNameName="xx">
        <div className="py-6 cc image.png">
          <h1>Liste Service</h1>
          <table className="table border shadow" style={{padding:"auto"}}>
            <thead className="thead-dark"  >
              <tr style={{alignItem:"center",justifyContent:"center"}}>
                <th  style={{width:"150px"}} scope="col">#</th>
                <th  style={{width:"150px"}} scope="col">category</th>
                <th  style={{width:"150px"}} scope="col">localisation</th>
                <th  style={{width:"150px"}} scope="col">price</th>
                <th >Action</th>
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
                
                  className="btn btn-danger mr-2"
                  onClick={() => deletService(service._id)}
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
