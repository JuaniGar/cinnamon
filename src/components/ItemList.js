import React from 'react';
import Item from "./Item";


const ItemList = ({items}) => {
    return (
        <div className="cardsContainer">
            {items.map((item) => (
                <Item key={item.id} data={item} />
            ))}
        </div>
    )
}

export default ItemList
