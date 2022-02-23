import React from "react";
import { Link } from "react-router-dom";
import Logo from '../../Components/assests/TechSierra.png';
import icon from '../../Components/assests/devloper.png';
import profile from '../../Components/assests/profileicon.png';


function Sidebar(){

    return(

     
          <div className='container1' >
             <div className='logo2'>
                <img className='techsierralogo1' img src={Logo}/>
            </div>
          <Link to="/Dashboard">
          <div className='devapp'> 
            <button  className='devlopersbutton'> 
                <img className='devicon' img src={icon} />
                    <p className='pdev'>Developers</p>
             </button>  
            </div>
            </Link>
            <Link to='/MyProfile'>
            <div className='proapp'>
              <button className='profilebutton'  >
                 <img className='profileicon' img src={profile}></img>
                    <h1 className='myprofile'>My Profile</h1>
                </button>
            </div></Link>
            </div>
            
             );
            };
        export default Sidebar;