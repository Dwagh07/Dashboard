import React, { useState, useEfect } from 'react';
import './App.css'
import axios from 'axios';

const Cardcompnents =(val)=>{
  const [display, setDisplay] = useState([""]);
}


export const getReview = (e) => {
  
  e.preventDefault()
  axios.get("http://localhost:3011/api/get").then((response) => {
    console.log(response)
    setDisplay(response.data);
  });
};

export default Cardcompnents;
// const Cardcompnents = [{ id:1, NameOfDev:"Darshana", language:"Java",Date:"Jan 2022",ExperianceYears:"2",
//       },
        
//       { id:1, NameOfDev:"Dipesh",  language:"C++", Date:"Nov 2021", ExperianceYears:"2",
//       },
       
//       { id:2, NameOfDev:"surya", language:"C#",Date:"Dec 2021", ExperianceYears:"2",
//        },

//       { id:3, NameOfDev:"Harshada", language:"java", Date:"feb 2021", ExperianceYears:"2",
//         },

//         { id:4, NameOfDev:"pratik", language:"java", Date:"feb 2021", ExperianceYears:"2",
//         },
        
//         { id:5, NameOfDev:"Dipesh",  language:"C++", Date:"Jan 2022", ExperianceYears:"2 yrs",
//         },
//         { id:5, NameOfDev:"Dipesh",  language:"C++", Date:"Jan 2022", ExperianceYears:"2 yrs",
//         },
//         { id:5, NameOfDev:"Dipesh",  language:"C++", Date:"Jan 2022", ExperianceYears:"2 yrs",
//         },
//         { id:5, NameOfDev:"Dipesh",  language:"C++", Date:"Jan 2022", ExperianceYears:"2 yrs",
//         },
//         { id:5, NameOfDev:"Dipesh",  language:"C++", Date:"Jan 2022", ExperianceYears:"2 yrs",
//         },

//         { id:5, NameOfDev:"Dipesh",  language:"C++", Date:"Jan 2022", ExperianceYears:"2 yrs",
//         },
//       ];
        
// export default Cardcompnents;


    

  