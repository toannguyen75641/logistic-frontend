import React from 'react';
import logo from "../../assets/img/reactlogo.png"
import { Nav } from 'react-bootstrap';

function ActiveRoute(routeName) {
    return window.location.pathname.indexOf(routeName) > -1 ? "active" : "";
}

function AdminNavbar(props) {
    return (
        <div id="sidebar" className="sidebar">
            <div className="logo">
                <a href="." className="simple-text logo-mini">
                    <div className="logo-img">
                        <img src={logo} alt="logo_image" />
                    </div>
                </a>
                <a href="." className="simple-text logo-normal">
                    Admin Logistic
                </a>
            </div>
            <div className="sidebar-wrapper">
                <ul className="nav">
                    {props.routes.map((value, index) => {
                        return(
                            <li key={index} className={ActiveRoute(value.path)}>
                                <Nav.Link href={value.path}>
                                    <i className={value.icon}></i>
                                    <p>{value.name}</p>
                                </Nav.Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
      );
} 

export default AdminNavbar;