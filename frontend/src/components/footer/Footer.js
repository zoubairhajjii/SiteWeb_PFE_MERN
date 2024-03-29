import React, { Fragment } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Footer() {
    return (
        <Fragment>
            <div className='footer'>
                <div className='links'>
                    <div className="col">
                        <h4>INFORMATION</h4>
                        <Link to='#'><span>About us</span></Link>
                        <Link to='#'><span>Contact Us</span></Link>
                        <Link to='#'><span>Term & Conditions</span></Link>
                        <Link to='#'><span>Shipping Guide</span></Link>
                    </div>
                    <div className="col">
                        <h4>SERVICES</h4>
                       
                        <Link to='#'><span>électricite</span></Link>
                        <Link to='#'><span>plombier</span></Link>
                        <Link to='#'><span>chef</span></Link>
                        <Link to='#'><span>climatisation</span></Link>
                    </div>
                    <div className="social__Icons">
                        <span><FacebookIcon /></span>
                        <span><InstagramIcon /></span>
                        <span><GitHubIcon /></span>
                        <span><TwitterIcon /></span>
                        <span><PinterestIcon /></span>
                    </div>
                </div>
                
            </div>
        </Fragment>
    )
}
