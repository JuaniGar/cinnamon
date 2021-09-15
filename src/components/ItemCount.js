import { useState } from 'react';
import {Link} from 'react-router-dom';

const ItemCount = ({stock, initial, agregar}) => {
    
    let [count, setCount] = useState(initial)

    let [endCart, setEndCart] = useState(false)


    const sumar = () =>  {
        if (stock > count){
            setCount(count + 1)}
    }
    const restar = () =>{
        if (count>1){
            setCount(count - 1)}
    }
    
    const add = () => {
        agregar(count)
        setEndCart(true)
    }
    
    return (
        <>
            <div className="cardForm">
                <button className="cardFormBtn" onClick={restar}>-</button>
                <p className="cardFormText">Cantidad: {count} </p>
                <button className="cardFormBtn" onClick={sumar}>+</button><br></br>
                {endCart ? 
                <Link to="/cart"><button>Finalizar compra</button></Link>:
                <button onClick={add}> Agregar al carrito</button>
                }
            </div>
        </>
    );
}

export default ItemCount