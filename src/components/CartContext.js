import React from 'react';
import {createContext, useState} from 'react';

export const CartContext = createContext()
const {Provider} = CartContext

const CustomProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const addItem = (product) =>{
        
        if(isInCart(product.id)){
            
        }else{
            setCart([...cart, product])
        }
    }
     
    const removeItem = (item) => {
        const itemRemoved = cart.filter((itemInCart) => item.id !== itemInCart.id);
        setCart(itemRemoved);
    }
    const clearCart = () =>{
        setCart([])
    }
 
    const isInCart = (id) => cart.find(product => product.id === id)

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