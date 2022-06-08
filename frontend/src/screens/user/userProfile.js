    import axios from "axios";
    import React, { Fragment } from 'react'
    import { Link } from 'react-router-dom'
    import './UserProfile.css'
    import { useSelector } from 'react-redux'
    import { ToastContainer } from 'react-toastify';
    import image from './img/profile.png';
    import authReducer from "../../redux/reducers/authReducer"
    
    const UserProfile = () => {
        const { user } = useSelector(state => state.authReducer)
        return (
            <Fragment>
            
                    
                   
                        <Fragment>
                            <div className='userProfile'>
                                <div className='profile__info'>
                                    <div className='userProfile__image'>
                                        
                                    </div>
                                    <h2 className='UserName'>{user && user.name}</h2>
                                    <div className='personal__info'>
                                        <span>Member Since</span>
                                    </div>
                                    <Link to='/me/update'>
                                        <div className='btnPrimary'>Edit Profile</div></Link>
                                </div>
                                <div className='moreAboutUser'>
                                    <Link to='/orders'>
                                        <div className='btnPrimary profileBtn'>My orders</div>
                                    </Link>
                                    <Link to='/me/password/update'>
                                        <div className='btnPrimary profileBtn'>Change Password</div>
                                    </Link>
                                </div>
                            </div>
                        </Fragment>
                 
                <ToastContainer />
            </Fragment>
        )
    }
    
    export default UserProfile