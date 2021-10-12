import React from 'react';
import { CartContext } from "./CartContext"
import { useContext} from "react"
import {Link} from 'react-router-dom';
import CartItems from "./CartItems"
import {firestore} from '../firebase.js'




const Cart = () => {
    const {cart, clearCart} = useContext(CartContext)
    
    const totalUni = cart.map((cart)=>{return cart.quantity*cart.precio})
        
    let totalPrice = 0
        
    for(let i = 0; i < totalUni.length; i++){
        totalPrice+=totalUni[i];
    }

  /*  const sendOrder = () =>{
        if(cart.length != 0){
        const orders = firestore.collection("orders")
        }
    }
*/
    return (
        <>
        {cart.length === 0 ? <div>
            <h1>El carrito está vacío</h1>
            <Link to="/">Volver a la página principal</Link>
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
        <button onClick={clearCart}>Vaciar carrito</button>
        <Link to="/"><button> Agregar más productos</button></Link>
        <p className="totalPrice">Precio final: ${totalPrice}</p>       
        </div>
        }           
        </>
    )}
export default Cart


/*  
 <form>
        <label for="name">Nombre:</label>
        <input type="text" id="name"></input>
        <label for="email">Email:</label>
        <input type="text" id="email"></input>
        <button onClick={sendOrder}>Enviar pedido</button>
        </form>
*/