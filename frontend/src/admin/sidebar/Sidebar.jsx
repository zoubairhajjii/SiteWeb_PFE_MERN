import { AttachMoney, BarChart, ChatBubbleOutline, DynamicFeed, LineStyle, MailOutline, PersonOutline, Report, Storefront, Timeline, TrendingUp, WorkOutline } from "@mui/icons-material"
import React from "react"
import "./Sidebar.css"
import { Link } from "react-router-dom"
const Sidebar = () => {
  return (
   
    <>
         <div className='appContainer'>
    <div className='sidebar'>
      <div className='sideWrapper'>
        <div className='sidebarMenu'>
          <h1>Admin</h1>
          <ul className='sidebarList'>
            <Link to='/' className='zamba active'>
              <LineStyle className='sidebarIcon' />
              Home
            </Link>
            </ul>
        </div>
        <div className='sidebarMenu'>
      
          <ul className=''>
            <Link to='/listUser' className='zamba '>
              <PersonOutline className='sidebarIcon' />
              Users
            </Link>
            <Link to='/listeService' className='zamba'>
              <Storefront className='sidebarIcon' />
             Services
            </Link>
            <Link  to='/newUser'className='zamba'>
              <PersonOutline className='sidebarIcon' />
              AddUSER
            </Link>
            <Link to='/addedServiceAdmin' className='zamba'>
              <BarChart className='sidebarIcon' />
              Add Service
            </Link>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3>Notification</h3>
          <ul className='sidebarList'>
            
            <Link  to='/users' className='zamba'>
              <DynamicFeed className='sidebarIcon' />
              Feedback
            </Link>
          
          </ul>
        </div>
        <div className='sidebarMenu'>
         
         
        </div>
      </div>
    </div>
    </div>
  </>
)
}

export default Sidebar
