import React, { useState } from 'react';
import '../Developer-dashboard/dashboard.css';
import Sidebar from '../Developer-dashboard/Sidebar';
import image from '../../Components/assests/profile image.png'
import './Myprofile.css';

function MyProfile () {
  
    return (
     
        <div className='profile_container'>
        <div className='container1'>
           <Sidebar/>
        </div>
        <div className='profile'>
            <div className='imgdiv'>
                <img className='proimage' img src={image}/>
                <h1>Aligator M.</h1>
                <h1>CEO/Founder</h1>
                </div>
            </div>
    </div>
    );
};
    
export default MyProfile