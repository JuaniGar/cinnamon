import ItemListContainer from "./components/ItemListContainer.js"
import NavBar from "./components/NavBar.js"
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {

    return (
        <>
        <NavBar/>
        <ItemListContainer section="Catálogo"/>
        <ItemDetailContainer/>
        </>
    )
}
export default App 