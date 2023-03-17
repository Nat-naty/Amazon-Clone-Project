
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home.js';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import { useStateValue } from './Components/StateProvider';
import React, { useEffect } from 'react';
import { auth } from './firebase';


function App() {
  const [ , dispatch] = useStateValue();
  
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
    // eslint-disable-next-line
  }, []);
  return (
    
    <Router>
      <div className="App"> 
      <Routes>
          <Route path="/" element={<><Header /><Home /> </>} />
          <Route path='/login' element={<><Login /></>} />
          <Route path='/checkout' element={<><Header /><Checkout /></>} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
