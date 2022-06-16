import React from "react";

function EditeProfilePoff() {
  return (
    <div className="container">
      <h1>Edit Profile</h1>
      <hr />
      <div className="row">
        {/* left column */}
        <div className="col-md-3">
          <div className="text-center">
            <img
              src="//placehold.it/100"
              className="avatar img-circle"
              alt="avatar"
            />
           
            <input type="file" className="form-control" />
          </div>
        </div>
        {/* edit form column */}
        <div className="col-md-9 personal-info">
          <div className=" alert-info alert-dismissable">
            

          
         
          </div>
          <h3>Personal info</h3>
          <form className="form-horizontal" role="form">
            <div className="form-group">
              <label className="col-lg-3 control-label"> firstname:</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                  placeholder="name"

                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-lg-3 control-label">lastName</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                  placeholder="prenom"
                />
              </div>
            </div>
           
          
            <div className="form-group">
              <label className="col-lg-3 control-label">Email:</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                 placeholder="Email"
                />
              </div>
               <div className="form-group">
              <label className="col-lg-3 control-label">phone:</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                 placeholder="Phone"
                />
              </div>
              <div className="form-group">
              <label className="col-lg-3 control-label">Adresse:</label>
              <div className="col-lg-8">
                <input
                  className="form-control"
                  type="text"
                 placeholder="Adresse"
                />
              </div>
              </div>
            </div>
            </div>  
           
            <div className="form-group">
              <label className="col-md-3 control-label">Password:</label>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="password"
                 
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label">
                Confirm password:
              </label>
              <div className="col-md-8">
                <input
                  className="form-control"
                  type="password"
                />
              </div>
            </div>
            <div className="form-group">
              <label className="col-md-3 control-label" />
              <div className="col-md-8">
                <input
                  type="button"
                  className="btn btn-primary"
                  defaultValue="Save Changes"
                />
                <span />
                <input
                  type="reset"
                  className="btn btn-default"
                  defaultValue="Cancel"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default EditeProfilePoff;
