import React, { useState } from "react";
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    Collapse,
    NavbarToggler
} from "reactstrap";
import "./header.css"

function Header () {

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);


    return (
    <header>
        <Navbar className="header" light expand="md">
            <h3 className="name textShadow">Andrew Kleiner</h3>
            <NavbarToggler onClick={toggleNavbar} className="mr-2 burger"/>
            <Collapse isOpen={!collapsed} navbar className="burger">
            <Nav className="ml-auto nav justify-content-end burger">
                <NavItem className="nav-item">
                    <NavLink className="nav-link navButton" href="/">About</NavLink>
                </NavItem>
                <NavItem className="nav-item burger">
                    <NavLink className="nav-link navButton" href="/portfolio">Portfolio</NavLink>
                </NavItem>
                <NavItem className="nav-item">
                    <NavLink className="nav-link navButton" target="_blank" href="images/resume.pdf">Resume</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link navButton" href="/contact">Contact</NavLink>
                </NavItem>
            </Nav>
            </Collapse>
        </Navbar>
    </header>
    )
}

export default Header;

// import React, { useState } from 'react';
// import "./header.css"
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText
// } from 'reactstrap';

// const Header = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <header>
//       <Navbar className="header" light expand="md">
//         <NavbarBrand href="/" className="name textShadow">Andrew Kleiner</NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="ml-auto" navbar>
//             <NavItem>
//               <NavLink href="/components/">Components</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//             </NavItem>
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Options
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>
//                   Option 1
//                 </DropdownItem>
//                 <DropdownItem>
//                   Option 2
//                 </DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem>
//                   Reset
//                 </DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//           </Nav>
//           <NavbarText>Simple Text</NavbarText>
//         </Collapse>
//       </Navbar>
//     </header>
//   );
// }

// export default Header;