import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency= () => 
{    
    const {dispatch} = useContext(AppContext);
    

    const handleCurrency = (val) =>
    {

        dispatch (
            { type:'CURRENCY', 
              currency : val ,  
            }
        ); 

    }
    
    return(
    <div id="" className='budget' > 
         <select className='currency' data-testid="currency" onChange={(e)=>handleCurrency(e.target.value) } >
                <option  disabled selected > -- Choose Currency --</option>
                <option value="₹"  >₹ Ruppee </option>
                <option value="$" >$ Dollar </option>
                <option value="¥" >¥ Yen  </option>
                <option value="€">€ Euro</option>
                <option value="£">£ Pound</option>
            </select>
    </div>
    );

};

export default Currency;
