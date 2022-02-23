import React, { useState } from 'react'
import './cards.css'
import pic from '../../Components/assests/resumelogo.png'
import image from '../../Components/assests/profile image.png'
import Cardcomponents from './Cardcomponents';

function Cards(props) {

  return (
    <div className='Container_Main'>
      <button className='resumediv'>
        <div className='resumelogo'>
          <img img src={pic} /></div>
        <p className='resumeh1'>Resume</p>
      </button>
      <div className='card'>
        <div className='img-div'>
        <img className='cardpic' img src={image} />
        <h1 className='cardname'>{props.NameOfDev}</h1>
        </div>
        <h1 className='language'>{props.language}</h1>
        <div className='bottom-div'>
          <div className='text_div'>
            <h4 className='available' >Available from</h4>
            <h1 className='experience'>Experiance(year)</h1>
            </div>
        <div className='date-div'>
          <h1 className='date'>{props.Date}</h1>
          <h1 className='years'>{props.ExperianceYears}</h1> </div></div>
        <div className='Available-Div'>
          <h1>Available</h1>
        </div>

      </div>
    </div>
  );
};
export default Cards
