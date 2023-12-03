import React, { createContext, useReducer } from 'react';


export const AppReducer =(state,action)=> 
{   
   
    switch (action.type)
    {
        case 'ADD_ALLOCATION':
          
             state.AllocatedAccounts.map((account) => {
                if(account.name===action.acc.selectedName )
                {   
                    account.budget += parseInt(action.acc.selectedAmount); 
                }
                return true;
            }); 
            action.type ="DONE"; 
            return {...state}; 
        
        case 'INCREASE_10': 
            state.AllocatedAccounts.map((account) => {
                if(account.name===action.acc.selectedName )
                {
                    account.budget += 10; 
                }
                return true;
            }); 
            action.type ="DONE"; 
            return {...state}; 
     
        case 'REDUCE_ALLOCATION': 
            state.AllocatedAccounts.map((account) =>{
                if(account.name===action.acc.selectedName)
                {
                    account.budget = account.budget - action.acc.selectedAmount; 
                    if (account.budget < 0) 
                    {
                        account.budget = 0;
                    }  
                }   
                return true;   
            }) ;
            action.type ="DONE";
            return { ...state};

        case 'DECREASE_10': 
            state.AllocatedAccounts.map((account) =>{
                if(account.name===action.acc.selectedName)
                {
                    account.budget = account.budget - 10; 
                    if (account.budget < 0) 
                    {
                        account.budget = 0;
                    }  
                }   
                return true;   
            }) ;
            action.type ="DONE";
            return { ...state};
       
        case 'DELETE': 
            state.AllocatedAccounts.map((account) => {
                if(account.name===action.acc.selectedName )
                {
                    account.budget =0 ; 
                }
                return true;
            });  
            action.type ="DONE";
            return {...state}; 

        case 'BUDGET': 
            action.type ="DONE";
            state.TotalBudget = action.total;  
            return{ ...state};

        case 'CURRENCY': 
            action.type ="DONE";
            state.Currency = action.currency; 
            return{ ...state};

        default: 
            return {...state}; 

    }      

}; 

const initialState ={
    AllocatedAccounts: [ 
        {id:"Marketing", name:"Marketing", budget:0 }, 
        {id:"Human Resource", name:"Human Resource", budget: 0 }, 
        {id:"Sales", name:"Sales", budget: 0 }, 
        {id:"IT", name:"IT", budget: 0 }, 
        {id:"Finance", name:"Finance", budget: 0 }, 
      
    ],
    Currency: '',  
    TotalBudget: 0,
    Spent: 0,

}; 


export const AppContext = createContext(); 

export const AppProvider = (props) =>
{   
    const [state,dispatch]=useReducer(AppReducer,initialState); 
    
    const totalExpenses = state.AllocatedAccounts.reduce((total,account) => { 
        return (total += parseInt(account.budget)) ;
    },0);
    state.Spent = totalExpenses;  

    
    return(
    <AppContext.Provider 
        value={
            {Accounts : state.AllocatedAccounts,
            Currency : state.Currency, 
            Budget: state.TotalBudget, 
            Spent: state.Spent, 
            dispatch,} }
    >
            {props.children}  
    </AppContext.Provider>
    ); 
}




