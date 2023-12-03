import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FcPlus } from "react-icons/fc"; 
import { FaMinusCircle } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";


const AllocatedAccount= (props) => 
{  
  const {dispatch,Currency, Budget, Spent} =useContext(AppContext); 

  const handleDeleteAccount = () =>
  {  const account = {
             selectedName:props.name,
            }; 
   
     dispatch(
      { type:"DELETE", 
        acc:account
      }
      );
  }
  const handleDecrease10 = () =>
  {  
      if (Currency===""){
      alert("You have not selected the Currency!")
      }

      const account = {
             selectedName:props.name,
            }; 
   
     dispatch(
      { type:"DECREASE_10", 
        acc:account
      }
      );
  }
  const handleIncrease10= () =>
  {  
      if (Currency===""){
      alert("You have not selected the Currency!")
       }

       if (  Budget - Spent < 10 )
       {
           alert("The Remaining budget is less than 10!"); 
      
       }
       else{

            const account = {
              selectedName:props.name,
                  }; 
        
          dispatch(
            { type:"INCREASE_10", 
              acc:account
            });
    }
  }


  return(
    <tr id={props.name}  className='cartrow'>
      <td  id="Department"> {props.name} </td>
      <td id="allocateBudget"> {Currency} {props.budget} </td>
      <td id="increase_10"> <FcPlus data-testid={props.name} size='2.2em' color='green' onClick={handleIncrease10}></FcPlus> </td>
      <td id="decrease_10"> <FaMinusCircle data-testid={props.name} size='2.2em' color='pink' onClick={handleDecrease10}> </FaMinusCircle> </td>
      <td> <IoTrashOutline data-testid={props.name} size='2.2em' color='black' onClick={handleDeleteAccount} ></IoTrashOutline> </td>
    </tr>
    
  ); 
   
};

export default AllocatedAccount;
