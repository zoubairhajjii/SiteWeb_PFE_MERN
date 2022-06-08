import { Card } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom';

function Product() {
    const location = useLocation();
    const [prods,setProds]=useState([]);
    useEffect(() => {
     axios.get("http://localhost:5000/api/Service/getByServiceName/"+location.state.name).then((res)=>setProds(res.data.ListOfService))
    }, [])
    

  return (
    <div >
       <Card sx={{ maxWidth: 345 ,marginTop:25,marginLeft :20}}> {prods.map((el)=>(

        <div>
            <p>{el.DescriptionService}</p>
            <p>{el.price}</p>
            <h1>{el.location}</h1>
            </div>
        ))}
        </Card>
    </div>
    
  )
}

export default Product
