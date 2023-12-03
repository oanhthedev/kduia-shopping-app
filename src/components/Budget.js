import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css'

 const Budget = () => 
{  const {dispatch, Currency} = useContext(AppContext);
   

   const handleBudget= (val) => 
   { 
        if (Currency===""){
            alert("You have not selected the Currency!");
             }
   
        dispatch (
            { type:'BUDGET', 
            total: val ,  
            }
    ); 
    } 

    
    return(
        <div className='budget' >
            Budget: {Currency} 
            <input type='number'  min="0" onChange={(e)=>{ 
                if (e.target.value <0 ) 
                {e.target.value=0; alert("Budget must be a positive number!")}
                 handleBudget(e.target.value)}} /> 
            
        </div>   

    ); 

};
export default Budget; 


export const Remaining = () => 
{  const {Currency, Budget, Spent } = useContext(AppContext);

    const Remains = Budget - Spent; 
    

    
    return(
        <div id="accRemains" className='accSum'  > 
            <label id='cartvallab' > Remaining : {Currency} {Remains} 
            </label>   
        </div>

    ); 

};

export const Spent = () => 
{  const { Spent, Currency } = useContext(AppContext);

    
    return(
        <div id="acc" className='spent' > 
            <label id='cartvallab' > Spent so far : {Currency} {Spent} 
            </label>   
        </div>

    ); 

};

