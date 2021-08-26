import { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
    
    let [count, setCount] = useState(initial)

    const sumar = () =>  {
        if (stock > count){
            setCount(count + 1)}
    }
    const restar = () =>{
        if (count>1){
            setCount(count - 1)}
    }

    const agregar = () => {
        if (stock > 0){
            onAdd(count)
        }
    }
    return (
        <>
            <div className="cardForm">
                <button className="cardFormBtn" onClick={restar}>-</button>
                <p className="cardFormText">Cantidad: {count} </p>
                <button className="cardFormBtn" onClick={sumar}>+</button><br></br>
                <button onClick={agregar}> Agregar al carrito</button>
            </div>
        </>
    );
}

export default ItemCount