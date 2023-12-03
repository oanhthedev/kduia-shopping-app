import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';

import AccountSelected from './components/AccountSelected';
import { Carousel } from 'bootstrap';
import './App.css'
import Currency from './components/Currency';
import Budget, { Remaining, Spent } from './components/Budget';
import AccountList from './components/AccountList';

function App () {
  return (
    <div className="App"  >
      
      <div class="container" > 
          <div class="row">
           <h1 > Company's Budget Allocation</h1>
           </div>

          <div class="row">
          <div class="col-5 col-sm-3" > <Budget/></div> 
          <div class="col-2 col-sm-3" > <Remaining/> </div>
          <div class="col-2 col-sm-3"> <Spent/> </div>
          <div class="col-3 col-sm-3"  > <Currency/>  </div>
          </div>
       
      </div> 
     
      <br/>
      
        <div >
        <AccountList/>
        </div >
        <br/> 
       <div class="container"  >
        <AccountSelected/>
        </div>
       
      </div>
      
  
  );
}

export default App;
