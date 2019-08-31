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

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar color="light" light expand="md" className="Header-background">
        <div style={{width:"100%",background:"#67dff3",top:"0",position:"absolute",height:"3%"}}></div>
            <NavbarBrand href="/">
            {/* <img src={process.env.PUBLIC_URL + '/images/omc_logo.png'} width="90px" height="50px" alt="omc logo" /> */}
            <span className="logo-text">OMOWUMI MODEL SCHOOL</span>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/components/">HOME</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">HISTORY</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                            ACADEMICS
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                PRIMARY SCHOOL
                            </DropdownItem>
                            <DropdownItem>
                                SECONDARY SCHOOL
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                IJMB PROGRAM
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">ADMISSION</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">VISIT US</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
}
export default Header;