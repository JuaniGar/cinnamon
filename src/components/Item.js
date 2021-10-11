import React from 'react';
import {Link} from 'react-router-dom';


const Item = ({data}) => {
    return(
        <>
            
            <div className="card">
            <Link className="itemLink" to={`/item/${data.id}`}>
                <h3 className="cardTitle">{data.nombre}</h3>
                <img className="cardImg" src={data.img} alt="Imagen del producto"/>
            </Link>
                <p>${data.precio}</p>
                <p>{data.descripcion}</p>
            <Link to={`/item/${data.id}`} className="detailLink">
                Ver Más
            </Link>
            </div>
            
        </>
    )
}

export default Item