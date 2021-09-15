import React from 'react';
import {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';




const ItemDetailContainer = () =>{
    const {id} = useParams();
    const [itemDesc, setItemDesc] = useState([])
    useEffect(()=>{
        fetch('https://mocki.io/v1/e68a9e2a-8631-495a-bf7e-bb89b0e6d68e')
        .then(response => response.json())
        .then((detail)=>{
            const select = detail.find(element => element.id === id)
            setItemDesc(select)
        });
    },[]);
    return (
    <>
        <ItemDetail detail={itemDesc}/>
    </>
)
}

export default ItemDetailContainer
