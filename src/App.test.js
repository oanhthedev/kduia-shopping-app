
import App from './App';
import React from 'react';
import userEvent from '@testing-library/user-event'

import {AppProvider} from './context/AppContext';
import { screen, } from '@testing-library/react';
import {unmountComponentAtNode,render } from "react-dom"; 
import { act } from "react-dom/test-utils";
import ItemSelected from './components/ItemSelected';



  let container = null;
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });
  
  afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });
  

  it('renders App component initially', () => {
    act(() => {
      render(<AppProvider> <App/> </AppProvider>, container);
      
    });
    expect(screen.getByText(/shopping cart/i)).toBeInTheDocument(); 
    expect(screen.getByText(/cart value/i)).toBeInTheDocument();
    expect(screen.getByText(/location:/i)).toBeInTheDocument();
    expect(screen.getByText(/add item/i)).toBeInTheDocument();
    expect(container.querySelector('[id="Shirt"] [id="expenseName"]').textContent).toMatch("Shirt");
    expect(container.querySelector('[id="Shirt"] [id="expenseQuantity"]').textContent).toMatch("5");
    expect(container.querySelector('[id="Shirt"] [id="unitPrice"]').textContent).toMatch("₹ 500");
    expect(container.querySelector('[id="Shirt"] [id="itemPrice"]').textContent).toMatch("₹ 2500");
    expect(container.querySelector('[id="Jeans"] [id="expenseName"]').textContent).toMatch("Jeans");
    expect(container.querySelector('[id="Jeans"] [id="expenseQuantity"]').textContent).toMatch("0");
    expect(container.querySelector('[id="Jeans"] [id="unitPrice"]').textContent).toMatch("₹ 300");
    expect(container.querySelector('[id="Jeans"] [id="itemPrice"]').textContent).toMatch("₹ 0");
    expect(container.querySelector('[id="cartvallab"]').textContent).toMatch(" Cart Value: ₹ 2500");
  });

  it('add items to the cart', () => {
   
    const onSubmit = jest.fn();  
    const onChange = jest.fn(); 
    const onChangeA = jest.fn();
    const onChangeN = jest.fn();
    act (() => {
      render(<AppProvider> <App> <ItemSelected> </ItemSelected> </App> </AppProvider> , container);
    });
    expect(container.querySelector('[id="Shirt"] [id="expenseName"]').textContent).toMatch("Shirt");
    expect(container.querySelector('[id="Shirt"] [id="expenseQuantity"]').textContent).toMatch("5");
    expect(container.querySelector('[id="Shirt"] [id="unitPrice"]').textContent).toMatch("₹ 500");
    expect(container.querySelector('[id="Shirt"] [id="itemPrice"]').textContent).toMatch("₹ 2500");
 
    const form= container.querySelector('[id="saveForm"]') ; 
    form.onsubmit = onSubmit; 
    const selectName = container.querySelector('[data-testid="nameSelect"]');
    const selectAction = container.querySelector('[data-testid="actionSelect"]');
    const selectQuantity = container.querySelector('[data-testid="quantitySelect"]'); 
    const button = container.querySelector('[id="addBtn"]');
    selectQuantity.onchange = onChange; 
    selectName.onchange = onChangeN; 
    selectAction.onchange = onChangeA; 
    
    act (() => {
       userEvent.selectOptions(screen.getByTestId("nameSelect"), 'Shirt'); 
       userEvent.selectOptions(screen.getByTestId("actionSelect"), 'add'); 
       userEvent.type(screen.getByTestId("quantitySelect"), '2'); 
       userEvent.click(screen.getByText(/Save/i)); 

      
    });
   
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChangeA).toHaveBeenCalledTimes(1);
      expect(onChangeN).toHaveBeenCalledTimes(1);
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(selectQuantity.value).toEqual('2');
      expect(selectAction.value).toMatch("add");
      expect(selectName.value).toMatch("Shirt");
      
      expect(container.querySelector('[id="Shirt"] [id="expenseName"]').textContent).toMatch("Shirt");
      expect(container.querySelector('[id="Shirt"] [id="expenseQuantity"]').textContent).toMatch("7");
      expect(container.querySelector('[id="Shirt"] [id="unitPrice"]').textContent).toMatch("₹ 500");
      expect(container.querySelector('[id="Shirt"] [id="itemPrice"]').textContent).toMatch("₹ 3500");

    act (() => {
      userEvent.clear(screen.getByTestId("quantitySelect")); 
      userEvent.selectOptions(screen.getByTestId("location"), "$"); 
      userEvent.selectOptions(screen.getByTestId("nameSelect"), 'Shirt'); 
      userEvent.selectOptions(screen.getByTestId("actionSelect"), 'reduce'); 
      userEvent.type(screen.getByTestId("quantitySelect"), '4'); 
      userEvent.click(screen.getByText(/Save/i)); 
       
     });
    
       expect(onChange).toHaveBeenCalledTimes(3);
       expect(onChangeA).toHaveBeenCalledTimes(2);
       expect(onChangeN).toHaveBeenCalledTimes(2);
       expect(onSubmit).toHaveBeenCalledTimes(2);
       expect(selectQuantity.value).toEqual('4');
       expect(selectAction.value).toMatch("reduce");
       expect(selectName.value).toMatch("Shirt");
       
    
 
       expect(container.querySelector('[id="Shirt"] [id="expenseName"]').textContent).toMatch("Shirt");
      // expect(container.querySelector('[id="Shirt"] [id="expenseQuantity"]').textContent).toMatch("3");
       expect(container.querySelector('[id="Shirt"] [id="unitPrice"]').textContent).toMatch("$ 500");
       expect(container.querySelector('[id="Shirt"] [id="itemPrice"]').textContent).toMatch("$ 1500");
    
    act (() => {
      userEvent.clear(screen.getByTestId("quantitySelect")); 
       userEvent.selectOptions(screen.getByTestId("nameSelect"), 'Bag'); 
       userEvent.selectOptions(screen.getByTestId("actionSelect"), 'add'); 
       userEvent.type(screen.getByTestId("quantitySelect"), '2'); 
       userEvent.click(screen.getByText(/Save/i)); 
      });
       expect(onChange).toHaveBeenCalledTimes(5);
       expect(onChangeA).toHaveBeenCalledTimes(3);
       expect(onChangeN).toHaveBeenCalledTimes(3);
       expect(onSubmit).toHaveBeenCalledTimes(3);
       expect(selectQuantity.value).toEqual('2');
       expect(selectAction.value).toMatch("add");
       expect(selectName.value).toMatch("Bag");

       expect(container.querySelector('[id="Bag"] [id="expenseName"]').textContent).toMatch("Bag");
       expect(container.querySelector('[id="Bag"] [id="expenseQuantity"]').textContent).toMatch("2");
       expect(container.querySelector('[id="Bag"] [id="unitPrice"]').textContent).toMatch("$ 200");
       expect(container.querySelector('[id="Bag"] [id="itemPrice"]').textContent).toMatch("$ 400");
       expect(screen.getByText(/cart value/i).textContent).toMatch("$ 1900");
       expect(screen.getByText(/cart value/i)).toBeInTheDocument();

    act(()=>{
      userEvent.click(screen.getByTestId("Shirt")); 
    });
      expect(container.querySelector('[id="Shirt"] [id="expenseName"]').textContent).toMatch("Shirt");
      expect(container.querySelector('[id="Shirt"] [id="expenseQuantity"]').textContent).toMatch("0");
      expect(container.querySelector('[id="Shirt"] [id="unitPrice"]').textContent).toMatch("$ 500");
      expect(container.querySelector('[id="Shirt"] [id="itemPrice"]').textContent).toMatch("$ 0");
      expect(screen.getByText(/cart value/i).textContent).toMatch("$ 400");


  });






