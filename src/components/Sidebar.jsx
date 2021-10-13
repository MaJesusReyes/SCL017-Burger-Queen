import React from "react";
import data from '../menu.json'
import "../components/css/sidebar.css";

export const Sidebar= (props) => {
    const{displayBreakfast,displayLunch,displayDrinks} = props; 

return(
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
)    
}