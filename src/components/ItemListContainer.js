import ItemCount from "./ItemCount"
import product1 from '../media/product1.jpg';
import product2 from '../media/product2.jpg';
import product3 from '../media/product3.jpg';

const ItemListContainer = (props) => {
    return ( 
        <>
        <h1 className="sectionTitle">{props.section}</h1>
        <div className="cardsContainer">
          <div className="card" >
              <h3>Producto 1</h3>
              <img className="cardImg"src={product1} alt="Producto 1"/>
              <ItemCount stock={10} initial={0}/>
          </div>
          <div className="card">
              <h3>Producto 2</h3>
              <img className="cardImg" src={product2} alt="Producto 2"/>
              </div>
          <div className="card">
              <h3>Producto 3</h3>
              <img className="cardImg" src={product3} alt="Producto 3"/>
          </div>
        </div>
        </>
     );
}
 
export default ItemListContainer;