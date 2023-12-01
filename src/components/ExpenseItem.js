import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';

const ExpenseItem = (props) => 
{  
  const {dispatch,location} =useContext(AppContext); 

  const handleDeleteItem = () =>
  {  const item = {
             selectedName:props.name,
            }; 
   
     dispatch(
      { type:"DELETE", 
        loca:item 
      }
      );
  }


  return(
    <tr id={props.name} >
      <td  id="expenseName"> {props.name} </td>
      <td id="expenseQuantity"> {props.quantity} </td>
      <td id="unitPrice"> {location} { props.unitPrice } </td>
      <td id="itemPrice"> {location} { props.unitPrice * props.quantity } </td>
      <td> <FaTimesCircle data-testid={props.name} size='2.2em' color='red' onClick={handleDeleteItem} ></FaTimesCircle> </td>
    
    </tr>
    
  ); 
   
};

export default ExpenseItem;
