import React, { useContext } from 'react';
import { CartContext } from './CartContext';


const CartItems = ({cartItems, itemPrice}) => {
    const {removeItem} = useContext(CartContext)
    
  
  
    
    return(
        <>
        <tr className="tableItem">
            <th className="tableItemFont">{cartItems.nombre}</th>
            <th className="tableItemFont">${cartItems.precio}</th>
            <th className="tableItemFont">{cartItems.quantity}</th>
            <th className="tableItemFont">${itemPrice}</th>
            <th><button onClick={() => removeItem(cartItems)}>Borrar</button></th>
        </tr>
        </>
    )
}

export default CartItems