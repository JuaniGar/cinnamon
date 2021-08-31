import React from 'react';
import ItemCount from "./ItemCount";



const Item = ({data}) => {
    return(
        <>
        <div className="card">
            <h3 className="cardTitle">{data.nombre}</h3>
            <img className="cardImg" src={data.img} alt="Imagen del producto"/>
            <p>{data.precio}</p>
            <p>{data.descripcion}</p>
            <ItemCount stock={data.stock} initial={0}/>
        </div>
        </>
    )
}

export default Item