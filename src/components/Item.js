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
                <p className="ilcPrice">${data.precio}</p>
               
            <Link to={`/item/${data.id}`} className="detailLink btn">
                Comprar
            </Link>
            </div>
            
        </>
    )
}

export default Item