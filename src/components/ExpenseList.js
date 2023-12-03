import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ExpenseItem from './ExpenseItem';


const ExpenseList = () => 
{   
    const {expenses} = useContext(AppContext); 

    return( 
    <div id="expenseList" class="container">
        <div class="row">
        <h2> Shopping Cart</h2>
        </div>
        <div class="row">
       
        <table class="table" className='cartrow' >
            <thead>
            <tr >
                <th> Items</th>
                <th> Quantity</th>
                <th> Unit Price</th>
                <th> Items Price</th>
                <th > Remove </th>
            </tr>
            </thead>
            <tbody>
                {
                    expenses.map((expense) =>
                    {
                        return (
                            <ExpenseItem key={expense.id} id={expense.name} name={expense.name} quantity={expense.quantity} unitPrice={expense.unitPrice}/> 
                        ); 
                    })
                }
            </tbody>
            
        </table>
        </div>
        </div>

  

    );

};

export default ExpenseList;
