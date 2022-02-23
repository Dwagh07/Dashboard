import React from 'react'
import './Dropdown.css'
const Dropdown = () => {
  return (
    <div>
        <div className='head1'>
           <h1 className='Dropdownh1'>Status</h1>
           </div>
           <div className='Dropdown'>
                 <label>
                 <select className='optionall' id="All">
            <option className='option1' value="ALL">All</option>
             <option className='option2'value="Available">Available</option>
             <option  className='option3'value="Not available">Not Available</option>
          </select>
        </label>
           </div>  
    </div>
  )
}
export default Dropdown