import React, { useState } from 'react';
import './Header.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="light" light expand="md" className="Header-background">
            <div style={{ width: "100%", background: "#67dff3", top: "0", position: "absolute", height: "3%" }}></div>
            <NavbarBrand href="/">
                {/* <img src={process.env.PUBLIC_URL + '/images/omc_logo.png'} width="60px" height="80px" alt="omc logo" /> */}
                <span className="logo-text">OMOWUMI GROUP OF SCHOOLS</span>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/">HOME</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/history">HISTORY</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            ACADEMICS
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                <Link to="/primary">PRIMARY SCHOOL</Link>
                            </DropdownItem>
                            <DropdownItem>
                                <Link to="/secondary">SECONDARY SCHOOL</Link>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                            <Link to="/ijmb">IJMB PROGRAM</Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink href="/admission/primary">ADMISSION</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/visit-us">VISIT US</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}
export default Header;