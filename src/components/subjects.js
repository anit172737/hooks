import React from 'react';
import { useRouteMatch} from 'react-router';

import {BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Topic from './topic';

const About =()=>{
    
    let { path, url } = useRouteMatch();
    return(
    <Router>   
    <div className='component'>
        <h2>Topics</h2>
      <ul className='topic'>
        <li>
          <NavLink className='topic_list' activeClassName='active' to={`${url}/routing`}>Routing and Nested Routing</NavLink>
        </li>
        <li>
          <NavLink className='topic_list' to={`${url}/hooks`}>Hooks</NavLink>
        </li>
        <li>
          <NavLink className='topic_list' to={`${url}/props-v-state`}>Props v. State</NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic></Topic>
        </Route>
      </Switch>
        
    </div>
    </Router> )
}

export default About;
