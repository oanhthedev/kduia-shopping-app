import { AppContext } from '../context/AppContext';
import React, { useContext, useState } from 'react';


const ItemSelected = (props) => 
{  
    const {dispatch} = useContext(AppContext);
    const [name,setName] = useState("");
    const [quantity,setQuantity] = useState("");
    const [action,setAction] = useState(""); 


    const submitEvent =(event,act)=>
    {  
         
        event.preventDefault(); 

        const item ={
            selectedName: name, 
            selectedQuantity: quantity, 
        }; 
        
        
        switch (act) 
        {
            case 'add':  
                dispatch({
                type: 'ADD_QUANTITY', 
                loca: item,
                 }); 
           
                 break; 
            case 'reduce': 
                 dispatch({
                type: 'REDUCE', 
                loca: item,
                }); break; 
        }
    }

    return(
    <div class="container"  >
        <form id="saveForm" onSubmit={(e)=>submitEvent(e,action)}>
     
        <div class="row">
        <h2>Add Items</h2>
        </div>

        <div id='addForm' class=" row"  >
            
         
           <div class=" col-md-4 col-lg-3">
                <label className='label'> Items </label>
                <select data-testid="nameSelect" required className='addItem' onChange={(e) => setName(e.target.value)}  >
                    <option value='' defaultValue > Choose </option>
                    <option value='Jeans' > Jeans </option>
                    <option value='Dress' > Dress </option>
                    <option value='Shirt' > Shirt </option>
                    <option value='Dinner Set' > Dinner Set </option>
                    <option value='Bag' > Bag </option>
                   
                   
                </select>  
            </div>
          
           <div class="col-md-4 col-lg-3"> 
           <label className='label'> Quantity </label>
            <select data-testid="actionSelect" required className='addItem' onChange={(e)=> setAction(e.target.value)}> 
                <option value='' defaultValue > Choose </option>
                <option value='add' > Add </option>
                 <option value='reduce' > Reduce </option>     

            </select >  
            </div>
            <div class=" col-md-3 col-lg-3">
            <input data-testid="quantitySelect" type='number' onChange={(e) => setQuantity(e.target.value) } required ></input>
            
            
            </div>
            <div class="col-md-1 col-lg-3">
          
            <button id="addBtn" type='submit' > Save</button>
   
            </div>
        
        </div>
        </form>
      
     </div>


    ); 


};

export default ItemSelected;
