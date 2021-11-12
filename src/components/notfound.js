import React from 'react';
import Status from './status';

const NotFound =()=>{
return(
    <Status code ={404}>
        <div>
            <h1>sorry not found</h1>
        </div>
    </Status>
)
}

export default NotFound;