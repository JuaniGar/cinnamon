
import ItemList from "./ItemList";


const ItemListContainer = (props) => {

    return ( 
        <>
        <div>
        <h1 className="sectionTitle">{props.section}</h1>
        <ItemList/>
        </div>
      
        </>
     );
}
 
export default ItemListContainer;

