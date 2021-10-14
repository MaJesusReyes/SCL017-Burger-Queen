import React from "react";
import "../components/css/menu.css";

export const Menu = (props) => {
const {menu, name, onAdd} = props;

return(
    <div className='menu_container'>
    <h1>{name}</h1>{'\ n'}
    {menu.map((item) => (
      <div key={item.id} className="card-menu" onClick={()=>onAdd(item)}>
            <div className="img-container">
              <div className="img-inner">
                <div className="inner-skew">
                  <img src={item.image} alt='product_img'/>
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
