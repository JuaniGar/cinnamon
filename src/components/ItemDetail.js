import React from 'react';
import {Link} from 'react-router-dom';



const ItemDetail=({detail})=>{
  
    return (
        <>
        <h3>Detalles del producto</h3>
        <div className="detailContainer">
        <h1 className="detailTitle">{detail.nombre} - {detail.precio}</h1>
        <img className="detailImg" src={detail.img} alt="Imagen del producto"/>
        <p className="detailDesc">{detail.descripcion}</p>
        <p>Variedades del producto:</p>
        <li>Variedad 1 </li>
        <li>Variedad 2 </li>
        <li>Variedad 3 </li>        
        <p>Stock:{detail.stock}</p>
        </div>
        <Link to="/">
            <button>Volver a la página principal</button>
        </Link>
        </>
    )
}

export default ItemDetail