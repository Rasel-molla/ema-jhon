import logo from './logo.svg';
import './App.css';
import Heder from './components/Heder';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Invebtory/Inventory';
import Notfount from './components/Notfount/Notfount';
import Productdtls from './components/ProductDtels/Productdtls';

function App() {
  return (
    <div >
    <Heder></Heder>
  
      <Router>
        <Switch>

          <Route path="/shop">
          <Shop></Shop>
          </Route>
          <Route path="/review">
<Review></Review>
          </Route>
          <Route path="/inventory">
<Inventory></Inventory>
          </Route>
          <Route exact path="/">
<Shop></Shop>
          </Route>
          <Route path="/product/:productKey">

<Productdtls></Productdtls>
        </Route>
          <Route path="*">
<Notfount></Notfount>
          </Route>
      
        </Switch>
      </Router>

  

  
    </div>
  );
}

export default App;
