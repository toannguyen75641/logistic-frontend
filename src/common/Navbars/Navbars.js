import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

function AdminNavbar(props) {
    return (
        <Navbar className="navbar-default">
            <Container fluid>
                <Navbar.Brand href="#home">{props.titleName}
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <div>
                        <Nav>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Đăng Xuất</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      );
} 

export default AdminNavbar;