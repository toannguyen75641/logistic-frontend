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
                            <NavDropdown title="Tùy chọn" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Thông báo</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Thông tin người dùng</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Cài đặt</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/admin/dang-nhap">Đăng Nhập</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      );
} 

export default AdminNavbar;