import React, { useState } from "react";
import data from '../menu.json'
import "../components/css/waiter.css";



export const Waiter = () => {
    const [menu, setMenu] = useState(data.breakfast);

    const displayBreakfast = () => {
        setMenu(data.breakfast)
    };
    
    const displayLunch = () => {
        setMenu(data.lunch)
    };

    const displayDrinks = () => {
      setMenu(data.drinks)
    };

    return (
      <div className='page_Container'>

      <div className='sidebar'>
        <button  onClick={displayBreakfast} className='sidebar_btn'>
          <img src={'https://i.imgur.com/qGyVthl.png'} className='sidebar_img' alt='breakfast'/>
        </button>
        <button onClick={displayLunch} className='sidebar_btn'>
          <img src={'https://i.imgur.com/eW2dnMw.png'} className='sidebar_img' alt='lunch'/>
        </button>
        <button onClick={displayDrinks} className='sidebar_btn'>
          <img src={'https://i.imgur.com/ar3eSMo.png'} className='sidebar_img' alt='drinks'/>
        </button>
      </div>

      <div className='menu_container'>
        {menu.map((item) => (
          <div key={item.id} className="card-menu">

                <div className="img-container">
                  <div className="img-inner">
                    <div className="inner-skew">
                      <img src={item.image}/>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-description">{item.description}</p>
                  <p className="card-price">${item.price}</p>
                </div>
          
          </div>
        ))};
      </div>
        


      </div>
    );
    };

export default Waiter;