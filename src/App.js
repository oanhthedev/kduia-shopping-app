import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';
import { Carousel } from 'bootstrap';
import './App.css'

function App() {
  return (
    <div className="App"  >
      
      <div class="container " > 
          <div class="row">
           <h1 > Shopping App </h1>
           </div>

          <div class="row">
          <div class="col-5 col-sm-6" > <CartValue /></div> 
          <div class="col-7 col-sm-6" > <Location/>  </div>
          </div>
       
      </div> 
     
      <br/>
      
        <div >
        <ExpenseList/>
        </div >
        <br/> 
       <div >
        <ItemSelected/>
        </div>
       
      </div>
      
  
  );
}

export default App;
