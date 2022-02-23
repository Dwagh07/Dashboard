import React, { useState ,useEffect} from "react";
import './Checkbox.css'

const languages =[
       {id:1,name:"Android"},   {id:2,name:"Angular"},
    {id:3,name:"Appium"},  {id:4,name:"ASP.NET"},   {id:5,name:".NET Core"},
    {id:6,name:"AWS"},  {id:7,name:"Bootstrap"},    {id:8,name:"C#"},
    {id:9,name:"c++"},  {id:10,name:"java"},    {id:11,name:"Cassandra"},
    {id:11,name:"Other"}
];

const Check =() =>{
    const [users,setUsers] = useState([])

    useEffect(()=>{
        setUsers(languages);

    },
   []);

const handleChange =  (change) =>{
    const {name,checked} = change.target; 
    if(name==="allSelect"){
        let tempUser = users.map(user =>{
            return{...user, isChecked :checked};
        });
        setUsers(tempUser);
    } else{
    let tempUser = users.map(user =>
        user.name === name?{...user,isChecked : checked} :user);
    setUsers(tempUser)
    }
   }


   return(
        <>
        <h1 className="technology" >TECHNOLOGIES</h1>
           
        <div className="mb-3">
        <input type="checkbox" 
        className="checkbox1" 
        name="allSelect" 
        checked={users.filter((user) => user?.isChecked !== true).lenght <1}
        onChange={handleChange} />
       <label className="lable">All</label>
      </div>
      {
         users.map((user)=>(
          <div className="mb-3" >
        <input  type="checkbox" className="checkbox1" 
        name={user.name}
        checked={user?.isChecked || false}
        onChange={handleChange} />
       <label className="lable" >{user.name}</label>
    </div>))}
    <p  className="reset">Reset the filter</p>
    </>
 );
    

};
export default Check;