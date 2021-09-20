import { useState, useContext } from 'react';
import {Link} from 'react-router-dom';
import { CartContext } from './CartContext';

const ItemCount = ({stock, initial, onAdd }) => {
    
    const {clearCart} = useContext(CartContext)
    

    let [quantity, setQuantity] = useState(initial)

    let [endCart, setEndCart] = useState(false)


    const sumar = () =>  {
        if (stock > quantity){
            setQuantity(quantity + 1)}
    }
    const restar = () =>{
        if (quantity>1){
            setQuantity(quantity - 1)}
    }
    
    const add = () => {
        onAdd(quantity)
        setEndCart(true)
    }
   

    const clear = () =>{
        clearCart()
    }

    return (
        <>
        {endCart ? 
            <Link to="/cart"><button>Finalizar compra</button></Link>:
            <div className="cardForm">
                <button className="cardFormBtn" onClick={restar}>-</button>
                <p className="cardFormText">Cantidad: {quantity} </p>
                <button className="cardFormBtn" onClick={sumar}>+</button><br></br>
                <button onClick={add}> Agregar al carrito</button>
                <button onClick={clear}>vaciar carrito</button>
            </div>
        }
        </>
    );
}

export default ItemCount