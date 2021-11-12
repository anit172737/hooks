import React from 'react';
import { useHistory, useParams } from 'react-router';

const Contact =()=>{
       const {name} = useParams();
       const history=useHistory();
       // const location = useLocation();
 return   (
 <div className='component'>
        <h2>Contact Detail</h2>
        <div className='component_sec'>
              <p>Email ID : {name}</p>
              <p>Mobile No : 8628637672</p>
              {/* <p>the URL : {location.pathname}</p> */}
              <button className='component_sec-btn' onClick={()=>history.push('/')}> home page</button>
        </div>
        
 </div>)
}

export default Contact;