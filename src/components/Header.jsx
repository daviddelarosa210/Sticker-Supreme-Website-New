import React from "react";
import { Navbar, Nav, Button } from 'react-bootstrap'; // Import Button
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header>
      <Navbar id="navbar" expand="lg" className="w-100">
        {/* Logo */}
        <Navbar.Brand href="/">
          <img className="ss-logo" src="/SS-logo.png" alt="Site Logo" />
        </Navbar.Brand>

        {/* Navbar Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Nav.Link href="/cart" className="nav-item-spacing d-lg-none">
          <FaShoppingCart size={20} />
        </Nav.Link>

        {/* Collapsible Menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Centered Menu Links */}
          <Nav className="ml-auto">
            <Nav.Link className="nav-item-spacing" href="/Products">Products</Nav.Link>
            <Nav.Link className="nav-item-spacing" href="/Portfolio">Portfolio</Nav.Link>
            <Nav.Link className="nav-item-spacing" href="/Businesses">Businesses</Nav.Link>
            <Nav.Link className="nav-item-spacing" href="/Reorder">Re-Order</Nav.Link>
          </Nav>

          {/* Right-aligned Sign In, Sign Up and Cart */}
          <Nav className="ml-auto d-flex align-items-center">
            {/* Cart Icon always on the right for larger screens */}


            {/* Sign In Link */}
            <Nav.Link href="/login" className="nav-item-spacing">Log In</Nav.Link>

            {/* Sign Up as Primary Button */}
            <Button href="/register" className="nav-item-spacing" variant="primary">Sign Up</Button>
            <Nav.Link href="/cart" className="nav-item-spacing d-none d-lg-block cart">
              <FaShoppingCart size={20} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default Header;
