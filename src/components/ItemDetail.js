import React from 'react';


const ItemDetail=({detail})=>{
    return (
        <>
        <div className="detailContainer">
        <h1 className="detailTitle">{detail.nombre} - {detail.precio}</h1>
        <img className="detailImg" src={detail.img} alt="Imagen del producto"/>
        <p className="detailDesc">{detail.descripcion}</p>
        <p>Disponibles:{detail.stock}</p>
        </div>
        </>
    )
}

export default ItemDetail