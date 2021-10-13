import { useState} from 'react';
import {Link} from 'react-router-dom';


const ItemCount = ({stock, initial, onAdd }) => {

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

    return (
        <>
        {endCart ? 
            <Link to="/cart"><button className="btn">Ver Carrito</button></Link>:
            <div className="itemCount">
                <button className="itemCountBtn btn" onClick={restar}>-</button>
                <p className="itemCountText">Cantidad: {quantity} </p>
                <button className="itemCountBtn btn" onClick={sumar}>+</button><br></br>
                <button className="btn" onClick={add}> Agregar al carrito</button>
            </div>
        }
        </>
    );
}

export default ItemCount