import React from 'react';
import { useHistory } from 'react-router';

const Home =(props)=>{
    const history = useHistory()
    const location={
        pathname:`/subjects`
    }
    return(
        <div className='component'>
            <h1> Home</h1>
            <div className='component_sec'>
            
            <h3 className='component_sec-heading'>Welcome to React </h3>
            <button className='component_sec-btn' onClick={()=>history.push(location)}>topics section</button>
            </div>
        
    </div>
    )
    
}

export default Home;