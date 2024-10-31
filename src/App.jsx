import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Reorder from './components/Reorder';
import Home from './components/Home';
import Products from './components/Products';
import Portfolio from './components/Portfolio';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Businesses from './components/Businesses';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Orders from './components/Orders';
import './App.css';
import Footer from './components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check localStorage on mount to see if the user is already logged in
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedInStatus);
  }, []);

  return (
    <Router>
      <div>
        {/* Pass the isLoggedIn status to Header */}
        <Header isLoggedIn={isLoggedIn} />
        
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/Businesses">
            <Businesses />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/login">
            <Login setIsLoggedIn={setIsLoggedIn} />
          </Route>
          <Route path="/register">
            {/* Pass setIsLoggedIn to Register so it can update login status after registration */}
            <Register setIsLoggedIn={setIsLoggedIn} />
          </Route>
          <Route path="/reorder">
            <Reorder />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
