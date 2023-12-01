import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CartValue = () => 
{   const { cartValue, location } = useContext(AppContext);  
    
    
    return(
    <div id="cartval" > 
        <label id='cartvallab' > Cart Value: {location} {cartValue} 
        </label>   
    </div>
    );

};

export default CartValue;
