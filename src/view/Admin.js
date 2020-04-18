import React from 'react';
import AdminNavbar from '../common/Navbars/Navbars.js';
import Sidebar from '../common/Sidebar/Sidebar.js';
import { BrowserRouter, Route } from 'react-router-dom'
import routes from '../routes.js';

function GetRoutes(routes) {
    return routes.map((value, index) => {
        return(
            <Route 
                path = {value.path}
                component = {value.component}
                key={index}
            />
        );
    });
}

function getTitleName(routes) {
    for(var i = 0; i < routes.length; i++) {
        if(window.location.pathname.indexOf(routes[i].path) > -1) {
            return 'Quản lý ' + routes[i].name;
        }
    }
    return 'Quản lý Logistic';
}

function Admin() {
    return (
        <div className="wrapper">
            <Sidebar routes={routes} />
            <div id="main-panel" className="main-panel">
                <AdminNavbar titleName={getTitleName(routes)}></AdminNavbar>
                <BrowserRouter>
                    {GetRoutes(routes)}
                </BrowserRouter>
            </div>
        </div>
    );
}

export default Admin;