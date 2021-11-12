import React from 'react';
import { useParams } from 'react-router';

const Topic =()=> {
    
    let { topicId } = useParams();

    return (
      <div className='topic_sec'>
        <h3>{topicId}</h3>
      </div>
    );

    }

export default Topic;