import React from 'react';
import {createContext, useState} from 'react';

export const CartContext = createContext()
const {Provider} = CartContext

const CustomProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const addItem = (product) =>{
        setCart([...cart, product])
    }
    const removeItem = (id) =>{
        const itemRemoved = cart.filter((product) => product.id !== id)
        setCart(itemRemoved)
    }
    const clearCart = () =>{
        setCart([])
    }
  
    const context = {
        cart ,
        addItem,
        removeItem,
        clearCart
    }

    console.log(cart)
    

    return (
        <Provider value={context}>
            {children}
        </Provider>
    )
}
export default CustomProvider