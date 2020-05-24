import React from 'react';
import logo from "../../assets/img/reactlogo.png"
import { Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getBaseInfo } from "../../helper/auth";

const ActiveRoute = (routeName) => {
    return window.location.pathname.indexOf(routeName) > -1 ? "active" : "";
}

const AdminNavbar = (props) => {
    const history = useHistory();
    const baseInfo = JSON.parse(getBaseInfo());

    const handleClick = (routeName) => {
        history.push(routeName);
    }

    return (
        <div id="sidebar" className="sidebar">
            <div className="logo">
                <Nav.Link href="/admin/users" className="simple-text logo-mini">
                    <div className="logo-img">
                        <img src={ baseInfo.avatar ? baseInfo.avatar : logo } />
                    </div>
                </Nav.Link>
                <Nav.Link href="/admin/users" className="simple-text logo-normal">
                    { baseInfo.name }
                </Nav.Link>
            </div>
            <div className="sidebar-wrapper">
                <ul className="nav">
                    {props.routes.map((value, index) => {
                        return(
                            <li key={index} className={ActiveRoute(value.view + value.path)}>
                                <Nav.Link href={value.view + value.path} onClick={() => handleClick(value.view + value.path)}>
                                    <FontAwesomeIcon icon={value.icon} />
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