import React from "react";
import data from '../menu.json'
import "../components/css/menu.css";

export const Menu = (props) => {
const {menu, name} = props;

return(
    <div className='menu_container'>
    <h1>{name}</h1>{'\ n'}
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

)
};
