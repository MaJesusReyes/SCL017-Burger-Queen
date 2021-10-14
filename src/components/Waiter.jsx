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
      const exist =cart.find((cartItem) => cartItem.id === item.id );
        if (exist) {
          setCart(
            cart.map((cartItem) => 
              cartItem.id === item.id ? {...exist, quantity: exist.quantity + 1} : cartItem
            )
          )
        } else {
          setCart([...cart, {...item, quantity: 1}]);
        }
    };

    const onRemove = (item) => {
      const exist =cart.find((cartItem) => cartItem.id === item.id );
      if (exist.quantity === 1) {
        setCart(cart.filter((cartItem) => cartItem.id !== item.id))
      } else {
        setCart(
          cart.map((cartItem) =>
              cartItem.id === item.id ? {...exist, quantity: exist.quantity - 1} : cartItem
          )
        );
      }
    };

    const[cartTotal, setCartTotal] = useState(0);
    useEffect(() => {
      total();
    }, [cart]);

    const total = () => {
      let totalVal = cart.reduce((a, c) => a + c.quantity * c.price, 0);
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