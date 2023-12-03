import { AppContext } from '../context/AppContext';
import React, { useContext, useState } from 'react';


const AccountSelected = (props) => 
{  
    const {dispatch, Spent, Budget, Currency} = useContext(AppContext);
    const [name,setName] = useState("");
    const [budget,setBudget] = useState("");
    const [action,setAction] = useState(""); 
    const remaining = Budget - Spent; 
    


    const submitEvent =(event,act)=>
    {  
         
        event.preventDefault(); 

        if (Currency===""){
            alert("You have not selected the Currency!")
        }

        const account ={
            selectedName: name, 
            selectedAmount: budget, 
        }; 
       
        
        
        switch (act) 
        {
            case 'add':  
                dispatch({
                    type: 'ADD_ALLOCATION', 
                    acc: account,
                 }); 
           
                 break; 
            case 'reduce': 
                dispatch({
                    type: 'REDUCE_ALLOCATION', 
                    acc: account,
                }); break; 
            default :
                dispatch({
                    type:"DONE"
                }); 
        }

        document.getElementById("amount").value = ""; 
        document.getElementById("name").value = "";
        document.getElementById("action").value = "";
        setBudget("");
        setAction("");  

    }

    return(
    <div >
        <form id="saveForm" onSubmit={(e)=>submitEvent(e,action)}>
     
        <div class="row">
        <h2>Change Allocation</h2>
        </div>

        <div id='addForm' class=" row"  >
            
         
           <div class=" col-md-4 col-lg-3">
                <label className='label'> Department </label>
                <select id="name" data-testid="nameSelect" required className='addItem' onChange={(e) => setName(e.target.value)}  >
                    <option value='' defaultValue >-- Choose -- </option>
                    <option value='Marketing' > Marketing </option>
                    <option value='IT'> IT </option>
                    <option value='Human Resource' > Human Resource </option>
                    <option value='Finance' > Finance </option>
                    <option value='Sales' > Sales </option>
                   
                </select>  
            </div>
          
           <div class="col-md-3 col-lg-3"> 
           <label className='label'> Allocation </label>
            <select id='action' data-testid="actionSelect" required className='addItem' onChange={(e)=> 
                { setAction(e.target.value) 
                    if ( e.target.value === "add" && budget > remaining )
                    {
                        alert("Added amount can not be larger than Remaining budget!"); 
                        document.getElementById("amount").value = remaining; 
                        setBudget(document.getElementById("amount").value );
                       
                    }
                    
                }}> 
                <option value='' defaultValue >-- Choose --</option>
                <option value='add' > Add </option>
                <option value='reduce' > Reduce </option>     

            </select >  
            </div>
            <div class=" col-md-3 col-lg-3"> 
            <label> {Currency} </label>
            <input  id= "amount" data-testid="quantitySelect" type='number' min="0" onChange={(e) => { 
                
                if ( e.target.value > remaining  && action =="add" )
                {
                    alert("Added amount can not be larger than Remaining budget!"); 
                    e.target.value =  remaining ;
                    setBudget(e.target.value);
                   
                }
                else
                { 
                    setBudget(e.target.value);
                
                }
                }} 
            required />  
            
            
            </div>
            <div class="col-md-2 col-lg-3">
          
            <button id="addBtn" type='submit'> Save</button>
   
            </div>
        
        </div>
        </form>
      
     </div>


    ); 


};

export default  AccountSelected;
