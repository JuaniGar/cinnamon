import React from 'react';
import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom';


const Item = ({data}) => {
    return(
        <>
            
            <div className="card">
            <Link className="itemLink" to={`/item/${data.id}`}>
                <h3 className="cardTitle">{data.nombre}</h3>
                <img className="cardImg" src={data.img} alt="Imagen del producto"/>
            </Link>
                <p>{data.precio}</p>
                <p>{data.descripcion}</p>
                <ItemCount stock={data.stock} initial={0}/>
            </div>
            
        </>
    )
}

export default Item