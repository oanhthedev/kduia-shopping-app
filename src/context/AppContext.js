import React, { createContext, useReducer } from 'react';


export const AppReducer =(state,action)=> 
{   
    // let new_expenses=[];
    switch (action.type)
    {
        case 'ADD_QUANTITY':
            
            
             state.expenses.map((expense) => {
                if(expense.name===action.loca.selectedName )
                {
                    expense.quantity +=  parseInt(action.loca.selectedQuantity); 
                }
                
                return true;
            }); 
            action.type ="DONE"; 
            return {...state}; 
     
        case 'REDUCE': 
            state.expenses.map((expense) =>{
                if(expense.name===action.loca.selectedName)
                {
                    expense.quantity = expense.quantity - action.loca.selectedQuantity; 
                    if (expense.quantity < 0) 
                    {
                        expense.quantity = 0;
                    }  
                }
                 
                return true; 
               
            }) ;
            action.type ="DONE";
            return { ...state};
       
        case 'DELETE': 
            state.expenses.map((expense)=>{
                if (expense.name === action.loca.selectedName)
                {
                    expense.quantity = 0; 
                }
                return true; 
            }); 
            action.type ="DONE";
            return {...state}; 

        case 'LOCATION': 
            action.type ="DONE";
            state.location = action.loca; 
            return{ ...state};
        default: 
            return {...state}; 
    }      

}; 

const initialState ={
    expenses: [ 
        {id:1, name:"Shirt", quantity: 5, unitPrice:500 }, 
        {id:2, name:"Jeans", quantity: 0, unitPrice:300 }, 
        {id:3, name:"Dress", quantity: 0, unitPrice:400 },
        {id:4, name:"Dinner Set", quantity: 0, unitPrice:600 },
        {id:5, name:"Bag", quantity: 0, unitPrice:200 },
    ],
    location: '₹',  
    cartValue: 0

}; 


export const AppContext = createContext(); 

export const AppProvider = (props) =>
{   const [state,dispatch]=useReducer(AppReducer,initialState); 
    
    const totalExpenses = state.expenses.reduce((total,item) => { 
        return (total=total + (item.unitPrice * item.quantity)) ;
    },0);
    state.cartValue = totalExpenses;  

    
    return(
    <AppContext.Provider 
        value={
            {expenses : state.expenses,
            location : state.location, 
            cartValue: state.cartValue, 
            dispatch,} 
            }
    >
            {props.children}  
    </AppContext.Provider>
    ); 
}




