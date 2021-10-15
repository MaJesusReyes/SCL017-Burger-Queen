import React from "react";
import "../components/css/ordertable.css";

export const OrderTable = (props) => {
    const {cart, onRemove, cartTotal} = props;

return(
    <div className='orderTable'>
        <h1>NEW ORDER!</h1>{'\n'} 
        <div className='table_orders'>
        {cart.map((item) => (
            <div key={item.id} className='individual-orders'>
                {`${item.name} ${item.quantity} = $${item.price}`}
                <input type="submit" value="X" className='delete_btn' onClick={()=>onRemove(item)}/>        
            </div>
        ))}
        </div>
        <div className='total_div'>Total: ${cartTotal}</div>
        <button className='send_btn'> SEND ORDER TO KITCHEN </button>

    </div>

)
};