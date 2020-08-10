import React from "react";
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import "./header.css"

function Header () {
    return (
    <header>
        <Navbar>
            <h3 className="name textShadow">Andrew Kleiner</h3>
            <Nav className="nav justify-content-end">
                <NavItem className="nav-item">
                    <NavLink className="nav-link navButton" href="/">About</NavLink>
                </NavItem>
                <NavItem className="nav-item">
                    <NavLink className="nav-link navButton" href="/portfolio">Portfolio</NavLink>
                </NavItem>
                <NavItem className="nav-item">
                    <NavLink className="nav-link navButton" target="_blank" href="images/resume.pdf">Resume</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link navButton" href="/contact">Contact</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    </header>
    )
}

export default Header;