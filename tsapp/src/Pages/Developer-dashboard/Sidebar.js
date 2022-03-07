import React from "react";
import Logo from '../../Components/assests/TechSierra.png';
import icon from '../../Components/assests/devloper.png';
import profile from '../../Components/assests/Profileicon1.png';
import { Route,Switch}  from 'react-router-dom'
import MyProfile from "../MyProfile/MyProfile";




function Sidebar(){

  

    return(
        <>
       
          <div className='container1' >
             <div className='logo2'>
                <img className='techsierralogo1' img src={Logo}/>
            </div>
        
          <div className='devapp'> 
            <button  className='devlopersbutton'> 
                <img className='devicon' img src={icon} />
                    <p className='pdev'>Developers</p>
             </button>  
            </div>
          
          
            <div className='proapp'>
         
              <button className='profilebutton'  >
                 <img className='profileicon' img src={profile}></img>               
                    <h1 className='myprofile'>My Profile</h1>
                </button>              
            </div>
         
            </div>
            </>
             );
            };
        export default Sidebar;