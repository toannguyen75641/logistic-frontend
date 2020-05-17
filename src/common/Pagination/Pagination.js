import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";


const Pagination = () => {
    return (
        <Nav>
            <ul className="pagination">
                <li className="page-item">
                    <a href="#" className="page-link">1</a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">2</a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">3</a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">4</a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">5</a>
                </li>
                <li className="page-item">
                    <a href="#" className="page-link">6</a>
                </li>
            </ul>
        </Nav>
    );
} 

export default Pagination;