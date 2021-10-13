import React from "react";
import "../components/css/ordertable.css";

export const OrderTable = (props) => {
    const {cart, onRemove} = props;
return(
    <div className='orderTable'>
        {cart.map((item) => (
            <div key={item.id}>
                {`${item.name} $${item.price}`}
                <input type="submit" value="X" onClick={()=>onRemove(item)}/>
            </div>
        
        
    ))};


    </div>

)
};