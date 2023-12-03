import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Location = () => 
{  const {dispatch} = useContext(AppContext);

   const handleLocation= (val) => 
   {
    dispatch (
        { type:'LOCATION', 
          loca: val,  
        }
    ); 
    } 

    
    return(
    <div id="locat">
        Location: 
        <select data-testid="location" onChange={(e)=>handleLocation(e.target.value) } >
            <option value="₹" defaultValue >India (₹) </option>
            <option value="$" >USA ($) </option>
            <option value="¥" >YEN (¥) </option>
            <option value="€">Europe(€)</option>
            <option value="CAD">Canada(CAD)</option>
            <option value="£">Uk(£)</option>
        </select>
    </div>

    ); 

};

export default Location;