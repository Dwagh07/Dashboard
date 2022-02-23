import React, { useState } from 'react'
import Logo from '../../Components/assests/TechSierra.png'
import hide from '../../Components/assests/Vector.png'
import validate from './LoginFormValidationRules'
import useForm from './useForm'
import './login.css'
import { Redirect } from "react-router-dom";


const Form = props => {
    const {values,errors, handleChange,handleSubmit} = useForm(
        login,
        validate
    );
    const [loggedIn, setLoggedIn] = useState(false);

    function login() {
        setLoggedIn(true);
        props.parentCallback(true);
        return <Redirect to="/default" />;
      }
        
    return (
       
       <div className='container'>
       <div className='leftdiv'>
         <img className= 'techsierralogo' src={Logo} />
         {loggedIn && <Redirect to="/default" />}
        </div>
        <div className='rightdiv'>
            
            {/*<img className='backgroundimg' src={background}/>*/}
            <div className='formcontainer'>
                <div className='block1'></div>
                <div className='block2'></div>
                <div className='block3'></div>
            </div>
            
             {/* <form onSubmit= {handleSubmit}> */}
             <div className='whitebox'>
             <form className='form' onSubmit= {handleSubmit} noValidate>
                 <p className='p1'> EMPLOYEE DASHBOARD</p>
                 <p className='p2'> Sign In </p>
                 <div className='emaildiv'>
                 <fieldset  className='emailbox' >
                <legend>EMAIL</legend>
               <input 
               autoComplete="on"
               className={`inputemail ${errors.email && "is-danger"}`}   
               type="email"  
               name="email"
               id="email" 
               placeholder='abc.xyz@techsierra.in'
               onChange={handleChange}
               value={values.email || ""}  
               required 
              />
              {errors.email && (
                    <p className="requiredemail">{errors.email}</p>
                  )}
                  
               </fieldset>
               </div>
               <br/><br/>
               <fieldset  className='passwordbox'>
                <legend>PASSWORD</legend>
               <input 
               autoComplete="off"
               className={`inputpassword ${errors.password && "is-danger"}`}  
               type="password" 
               name="password"
               id="password" 
               onChange={handleChange} 
               value= {values.password || ""}
               required 
               />
               {errors.password && (
                <p className="requiredpassword">{errors.password}</p>
              )}
             <img className='hidelogo'  src={hide} />
               </fieldset>
               <a className='forgetpassword' href="#"> Forget password?</a>.
               <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
              <button type="onSubmit" className='loginbutton'>Log IN
                </button>
               </form>
           </div>
        </div>
        </div>
      
      )
               
}

export default Form;

