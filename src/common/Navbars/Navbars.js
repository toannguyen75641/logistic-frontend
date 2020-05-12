import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { removeAuth, removeBaseInfo } from "../../helper/auth";


const AdminNavbar = (props) => {
    const history = useHistory();

    const Logout = () => {
        removeAuth();
        removeBaseInfo();
        history.push('/admin/login');
    }

    return (
        <Navbar className="navbar-default">
            <Container fluid>
                <Navbar.Brand href={props.titleName.route}>{props.titleName.name}
                </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <div>
                        <Nav>
                            <NavDropdown title="Tùy chọn" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/admin/noti">Thông báo</NavDropdown.Item>
                                <NavDropdown.Item href="/admin/profile">Thông tin người dùng</NavDropdown.Item>
                                <NavDropdown.Item href="/admin/setting">Cài đặt</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={Logout}>Đăng Xuất</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      );
} 

export default AdminNavbar;