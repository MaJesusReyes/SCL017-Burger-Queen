import React, { useEffect, useState } from "react";
import data from '../menu.json';
import { OrderTable } from "./OrderTable";
import { Menu } from "./Menu";
import { Sidebar } from "./Sidebar";
import "../components/css/waiter.css";


export const Waiter = () => {
    const [menu, setMenu] = useState(data.breakfast);
    const [name, setName] = useState('Breakfast Menu');

    const displayBreakfast = () => {
        setMenu(data.breakfast)
        setName('Breakfast Menu');
    };
    
    const displayLunch = () => {
        setMenu(data.lunch)
        setName('Lunch Menu');
    };

    const displayDrinks = () => {
        setMenu(data.drinks)
        setName('Drinks');
    };


    const [cart, setCart] = useState([]);
    const onAdd = (item) => {
      setCart([...cart, item]);
    }

    const onRemove = (item) => {
      let cartDuplicate = [...cart];
      cartDuplicate = cartDuplicate.filter((cartItem) => cartItem.id !== item.id)
      setCart(cartDuplicate);
    }

    const[cartTotal, setCartTotal] = useState(0);
    useEffect(() => {
      total();
    }, [cart]);

    const total = () => {
      let totalVal = 0;
      for (let i=0; i< cart.length; i++){
        totalVal += cart[i].price;
      } 
      setCartTotal(totalVal);
    }

    return (
      <div className='page_Container'>

      <Sidebar
      displayBreakfast={displayBreakfast}
      displayLunch={displayLunch}
      displayDrinks={displayDrinks}
      />

      <Menu
      menu={menu}
      name={name}
      onAdd={onAdd}
      />
 
      <OrderTable 
      cart={cart}
      onRemove={onRemove}
      cartTotal={cartTotal}
      />

      </div>
    );
    };

export default Waiter;