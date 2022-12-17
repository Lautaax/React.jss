import "bootstrap/dist/css/bootstrap.min.css";
import ItemListCont from "./components/NavBar/ItemListCont";

import NavBar from "./components/NavBar/NavBar";

import './components/NavBar/navbar.css';
;
function App() {
  return (
    <div>
      <NavBar/>
      
      <ItemListCont greeting="Bienvenidos a tienda shop"/>
    </div>
  );
}

export default App;
