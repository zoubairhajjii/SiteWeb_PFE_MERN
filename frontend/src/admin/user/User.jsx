import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@mui/icons-material"
import React from "react"
import "./user.css"
import { Link } from "react-router-dom"
const User = () => {
  return (
    <>
      <div className='user'>
        <div className='userTitleContainer'>
          <h1>Edit User</h1>
          <Link to='/newUser'>
            <button>Create</button>
          </Link>
        </div>

        <div className='userContainer'>
          <div className='userShow'>
            <div className='userShowTop'>
              <img src='https://images.pexels.com/photos/1557843/pexels-photo-1557843.jpeg?cs=srgb&dl=pexels-arnie-chou-1557843.jpg&fm=jpg' alt='' />
              <div className='userShowTopTitle'>
                <h3>Anna Becker</h3>
                <span>Software Enginner</span>
              </div>
            </div>
            <div className='userShowBottom'>
              <h3>Account Details</h3>
              <div className='userShowInfo'>
                <PermIdentity className='userShowIcon' />
                <span>annbace99</span>
              </div>
              <div className='userShowInfo'>
                <CalendarToday className='userShowIcon' />
                <span>1999.08.24</span>
              </div>
              <h3>Contact Details</h3>
              <div className='userShowInfo'>
                <PhoneAndroid className='userShowIcon' />
                <span>9813253082</span>
              </div>
              <div className='userShowInfo'>
                <MailOutline className='userShowIcon' />
                <span>annbace99@gmail.com</span>
              </div>
              <div className='userShowInfo'>
                <LocationSearching className='userShowIcon' />
                <span>New York </span>
              </div>
            </div>
        
          
          </div>
        </div>
      </div>
    </>
  )
}

export default User
