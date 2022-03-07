import './dashboard.css'
import Cards from '../Cards/Cards'
import Checkbox from './Checkbox';
import Sidebar from './Sidebar';
import Dropdown from './Dropdown';
import Cardcompnents from '../Cards/Cardcomponents';
// import MyProfile from '../MyProfile/MyProfile'
// import PaginatedItems from './Pagination'



function createCards (val,key ){
  return( 
  <Cards
  key={val.id}
  NameOfDev = {val.NameOfDev}
  language = {val.language}
  Date={val.Date}
  ExperianceYears ={val.ExperianceYears}/>
)};

const ListCards = () => {
  return (
  <div 
  style={{display: "flex", flexWrap: "wrap",justifyContent:"space-between"}}>
  {Cardcompnents.map(createCards)}
  </div>
  )
}

function Dashboard  (props) {
  console.log(props)
    return (
      
     <>
      <div className='main_container'>
        <div className='container1'>
          <Sidebar/>
        </div>

          <div className='container2' >
         <div className='checkbox' style={{marginRight: "150px",marginLeft:'50PX', marginTop:"100px"}}>
           <Checkbox/></div>
           <div className='container3' style={{height: "800px"}}>
          <ListCards/>
        </div >
         <div>
           <Dropdown/>
         </div>
        </div>
        </div>


</>  
  );
};
export default Dashboard