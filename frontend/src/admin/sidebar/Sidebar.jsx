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
            <Link to='/' className='sidebarListItem active'>
              <LineStyle className='sidebarIcon' />
              Home
            </Link>
            </ul>
        </div>
        <div className='sidebarMenu'>
      
          <ul className='sidebarList'>
            <Link to='/listUser' className='sidebarListItem '>
              <PersonOutline className='sidebarIcon' />
              Users
            </Link>
            <Link to='/listeService' className='sidebarListItem'>
              <Storefront className='sidebarIcon' />
             Services
            </Link>
            <Link  to='/newUser'className='sidebarListItem'>
              <PersonOutline className='sidebarIcon' />
              AddUSER
            </Link>
            <Link to='/addedServiceAdmin' className='sidebarListItem'>
              <BarChart className='sidebarIcon' />
              Add Service
            </Link>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3>Notification</h3>
          <ul className='sidebarList'>
            
            <Link  to='/users' className='sidebarListItem'>
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
