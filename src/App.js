import React from 'react'; 
import './sass/App.scss';
import {BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Home from './components/home';
import About from './components/subjects';
import Contact from './components/contact';


const App = ()=>{
  
  return(
  <Router>
    <div className='container'>
      <nav className='nav'>
        <ul className='App'>
          <li className='list'>
            <NavLink exact to='/' activeClassName='active' className='link'>Home</NavLink>
          </li>
          <li className='list'>
            <NavLink  to='/subjects'  className='link'>Topics</NavLink>
          </li>
          <li className='list'>
            <NavLink  to='/contact/anit@gmail.com' className='link'>contact us</NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        
        <Route path='/subjects'>
        <About/>
        </Route>
        <Route path='/contact/:name'>
          <Contact></Contact>
        </Route>
        <Route path='/'>
          <Home/>
        </Route>
      </Switch>
    </div>
    </Router>
    )

}

export default App;
