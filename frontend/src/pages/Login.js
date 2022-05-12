import React, { useState } from "react";


 function Login(){


  const [form, setFrom]=useState({})

   const handelChange=(e)=>{

    setFrom({
       ...form,
       [e.target.name]:e.target.value
    })

}


 return (
     <div>




        <form onSubmit={onSubmit}>

            <div className="form-group">
                 <label for="email"><i className="zmdi zmdi-email"></i></label>
                 <input type="email" name="email" id="email" placeholder="Your Email"/>
            </div>
            <div className="form-group">
                 <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                 <input type="password" name="password" id="pass" placeholder="Password"/>
            </div>











     </form>

    







     </div>

 )}

 export default Login
 