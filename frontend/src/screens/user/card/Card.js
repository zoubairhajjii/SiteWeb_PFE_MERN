import React from "react";
import Avatar from 'react-avatar';
import { Link, NavLink } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
 
     
      <div class="row">
        <div class="column">
          <div class="card">
              <div>
                  aa
             

              </div>
             
            
           
            
          </div>
        </div>

        <div class="column">
          <div class="card">
            <img
              className="card__comma"
            />
            bb
           
          </div>
        </div>

        <div class="column">
          <div class="card">
          <a href="/login">Login</a>
            <img
             
              
            />
            
          </div>
        </div>
      </div>
      <hr className="footer__line" />
    </div>
  );
}