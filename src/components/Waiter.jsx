import React, { useState } from "react";
import data from '../menu.json';
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

    return (
      <div className='page_Container'>
      <Sidebar
      displayBreakfast={displayBreakfast}
      displayLunch={displayLunch}
      displayDrinks={displayDrinks}
      />

      <Menu
      menu={menu}
      name={name}/>
 


      </div>
    );
    };

export default Waiter;