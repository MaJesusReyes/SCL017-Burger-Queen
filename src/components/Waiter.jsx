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


    return (
      <div className='page_Container'>

      <div className='sidebar'>
        <button  onClick={displayBreakfast} className='sidebar_btn'>
          <img src={'https://i.imgur.com/tOjFDWm.png'} className='sidebar_img' alt='breakfast'/>
        </button>
        <button onClick={displayLunch} className='sidebar_btn'>
          <img src={'https://i.imgur.com/sBN1daL.png'} className='sidebar_img' alt='lunch'/>
        </button>
      </div>

      <div className='menu_container'>
      
        {menu.map((item) => (
          <div key={item.id} className="cardMenu ">
                <div className="img-container">
                  <div className="img-inner">
                    <div className="inner-skew">
                      <img src="https://images.unsplash.com/photo-1584791097929-aa825fe8e1e1?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-price">${item.price}</p>
                  
                </div>
          
          </div>
        ))};
        
        

      </div>
        


      </div>
    );
    };

export default Waiter;