import React, { useState } from "react";


 function Login(){


  const [form, setFrom]=useState({})

   const handelChange=(e)=>{

    setFrom({
       ...form,
       [e.target.name]:e.target.value
    })

}
const onSubmit = (e)=>{
    e.preventDefault();
    dispatch(LoginAction(form, navigate))
    }


 return (
     <div>




        <form onSubmit={onSubmit}>

            <div className="form-group">
                 <label for="email"><i className="zmdi zmdi-email"></i></label>
                 <input type="email" name="email" handelChange={handelChange} placeholder="Your Email"/>
            </div>
            <div className="form-group">
                 <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                 <input type="password" name="password" handelChange={handelChange} placeholder="Password"/>
            </div>











     </form>

    


     </div>

 )}

 export default Login
 