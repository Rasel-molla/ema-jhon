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
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();


function App() {

  const [loggedINUser,setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedINUser,setLoggedInUser]} >
    <h3> Login your Email:{loggedINUser.email}</h3>

    
      <Router>
      <Heder></Heder>
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
          <Route path="/login">
<Login></Login>
          </Route>
          <PrivateRoute path="/shipment">

<Shipment></Shipment>
</PrivateRoute>

          
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

  

  
    </UserContext.Provider>
  );
}

export default App;
