import { useState } from "react";
import { Card } from "react-bootstrap";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import './App.css';
import Cart from "./componen/Cart";
import Edit from "./componen/Edit";

import Home from './componen/Home';
import Login from './componen/Login';

import Register from "./componen/Register";
import Makanan from "./view/Makanan";

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <div className="aku">
    <div className="App">
    
     <BrowserRouter>
     
      <main>
   
        <Switch>
        
           <Route path="/" component={Register} exact/>
          <Route path="/home" component={Home} exact/>
          <Route path="/makanan" component={Makanan} exact/>
          <Route path="/login" component={Login} exact/>
          <Route path="/edit/:id" component={Edit} exact/>
          <Route path="/cart" component={Cart} exact/>
         
       
          {/* ini untuk mengedit akan di ambil id nya */}
        
         
        </Switch>
      </main>
      </BrowserRouter>
   
  
    </div>
    </div>
  );
}

export default App;
