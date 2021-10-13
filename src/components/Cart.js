import React from 'react';
import { CartContext } from "./CartContext"
import { useContext} from "react"
import {Link} from 'react-router-dom';
import CartItems from "./CartItems"
import Form from './Form';




const Cart = () => {
    const {cart, clearCart} = useContext(CartContext)
    
    const totalUni = cart.map((cart)=>{return cart.quantity*cart.precio})
        
    let totalPrice = 0
        
    for(let i = 0; i < totalUni.length; i++){
        totalPrice+=totalUni[i];
    }

    return (
        <>
        {cart.length === 0 ? <div>
            <h1>El carrito está vacío</h1>
            <Link to="/"><button className="btn">Volver a la página principal</button></Link>
            </div>
        :
        <div>
         <table>
                <thead>
                    <tr className="tablerow">
                        <th>Producto</th>
                        <th>Precio Uni.</th>
                        <th>Cantidad</th>
                        <th>Precio Total</th>
                    </tr>
                </thead>
                <tbody>
        {cart.map((item) => (
            <CartItems cartItems={item} key={item.id} itemPrice={item.quantity*item.precio}/>
        ))}
        </tbody>
        </table>
        <p className="totalPrice">Precio final: ${totalPrice}</p>    
        <button className="btn cartBtn" onClick={clearCart}>Vaciar carrito</button>
        <hr width="250"/>
        <Link to="/"><button className="btn"> Agregar más productos</button></Link>
        <Form/>   
        </div>
        }           
        </>
    )}
export default Cart