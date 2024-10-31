import React, { useState } from "react";
import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Log the state and function type for debugging
  console.log('isLoggedIn:', isLoggedIn);
  console.log('setIsLoggedIn:', typeof setIsLoggedIn);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn"); // Clear the login status

    // Check if setIsLoggedIn is a function before calling it
    if (typeof setIsLoggedIn === 'function') {
      setIsLoggedIn(false); // Update the state in App component
    }

    window.location.reload(); // Refresh the page to update the UI
  };

  return (
    <header>
      <Navbar id="navbar" expand="lg" className="w-100">
        <Navbar.Brand href="/">
          <img className="ss-logo" src="/SS-logo.png" alt="Site Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Nav.Link onClick={toggleCart} className="nav-item-spacing d-lg-none">
          <FaShoppingCart size={20} />
        </Nav.Link>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="nav-item-spacing" href="/Products">Products</Nav.Link>
            <Nav.Link className="nav-item-spacing" href="/Portfolio">Portfolio</Nav.Link>
            <Nav.Link className="nav-item-spacing" href="/Businesses">Businesses</Nav.Link>
            <Nav.Link className="nav-item-spacing" href="/Reorder">Re-Order</Nav.Link>
          </Nav>

          <Nav className="ml-auto d-flex align-items-center">
            {isLoggedIn ? (
              <>
                <Dropdown className="nav-item-spacing">
                  <Dropdown.Toggle variant="link" id="dropdown-basic">
                    Profile
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item as={Link} to="/orders">Orders</Dropdown.Item>
                    <Dropdown.Item as="button" onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Nav.Link onClick={toggleCart} className="nav-item-spacing d-none d-lg-block cart">
                  <FaShoppingCart size={20} />
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/login" className="nav-item-spacing">Log In</Nav.Link>
                <Button href="/register" className="nav-item-spacing" variant="primary">Sign Up</Button>
                <Nav.Link onClick={toggleCart} className="nav-item-spacing d-none d-lg-block cart">
                  <FaShoppingCart size={20} />
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Background Overlay */}
      {isCartOpen && <div className="background-overlay" onClick={toggleCart}></div>}

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <FaTimes onClick={toggleCart} className="close-cart-icon" />
        <h2>Your Cart</h2>
        {/* Cart content goes here */}
      </div>
    </header>
  );
};

export default Header;
