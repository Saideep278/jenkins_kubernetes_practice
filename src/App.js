import React from 'react';
import { BrowserRouter, Routes, Route   } from 'react-router-dom';

import Home from './components/Home';
import Accounts from './components/Accounts';
import Ex from './components/Ex';



const App = () => {


  return (
      <BrowserRouter>
        <div >
          <Routes>
            <Route path="/" exact element={<Home/>} />         
            <Route path="/accounts" element={<Accounts/>} />
            <Route path="/cli" element={<Ex/>} /> 
          </Routes>
        </div>
    </BrowserRouter>
  )
};

export default App;