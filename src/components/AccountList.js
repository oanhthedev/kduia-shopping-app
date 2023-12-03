import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import AllocatedAccount from './AllocatedAccount';


const AccountList = () => 
{   
    const {Accounts} = useContext(AppContext); 

    return( 
    <div id="accountList" class="container">
        <div class="row">
        <h2> Allocation</h2>
        </div>
        <div class="row">
       
        <table class="table" className='cartrow' >
            <thead>
            <tr >
                <th> Department</th>
                <th> Allocated Budget</th>
                <th> Increase by 10</th>
                <th> Decrease by 10</th>
                <th > Delete </th>
            </tr>
            </thead>
            <tbody>
                {
                    Accounts.map((account) =>
                    {
                        return (
                            <AllocatedAccount key={account.id} id={account.name} name={account.name} budget={account.budget}/> 
                        ); 
                    })
                }
            </tbody>
            
        </table>
        </div>
    </div>

  

    );

};

export default AccountList;
