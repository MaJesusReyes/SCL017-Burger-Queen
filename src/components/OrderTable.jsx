import React from "react";
import "../components/css/ordertable.css";

export const OrderTable = (props) => {
    const {cart, onRemove, cartTotal} = props;

return(
    <div className='orderTable'>
        <h1>NEW ORDER!</h1>{'\n'} 
        {cart.map((item) => (
            <div key={item.id} className='petition_table'>
                {`${item.name} ${item.quantity} = $${item.price}`}
                <input type="submit" value="X" className='delete_btn' onClick={()=>onRemove(item)}/>        
            </div>
        ))}
        <div className='total_div'>Total: ${cartTotal}</div>

    </div>

)
};