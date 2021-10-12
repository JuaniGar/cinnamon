import React from 'react';
import {Link} from 'react-router-dom';
import ItemCount from './ItemCount';
import { useContext } from 'react';
import { CartContext } from './CartContext';


const ItemDetail=({detail})=>{
    const {addItem} = useContext(CartContext)
    

    const onAdd = (quantity) => {
        const addedItem = {...detail, quantity}
        if (detail.stock > 0){
            addItem(addedItem)
        }
    }
    


    return (
        <>
        <h3>Detalles del producto</h3>
        <div className="detailContainer">
            <h1 className="detailTitle">{detail.nombre} - ${detail.precio}</h1>
            <img className="detailImg" src={detail.img} alt="Imagen del producto"/>
            <p className="detailDesc">{detail.descripcion}</p>   
            <p>Stock:{detail.stock}</p>
            <ItemCount stock={detail.stock} initial={1} onAdd={onAdd}/>
        </div>
        <Link to="/">
            <button>Volver a la página principal</button>
        </Link>
       
        </>
    )
}

export default ItemDetail