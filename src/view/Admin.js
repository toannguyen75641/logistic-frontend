import React from 'react';
import AdminNavbar from '../common/Navbars/Navbars.js';
import Sidebar from '../common/Sidebar/Sidebar.js';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import routes from '../routes.js';
import Login from '../components/Auth/Login.js';

function GetRoutes(routes) {
    return routes.map((value, index) => {
        return(
            <Route 
                path = {value.view + value.path}
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
    if(window.location.pathname.indexOf('dang-nhap') > -1) {
        return (
            <Login></Login>
        );
    }
    else {
        return (
            <div className="wrapper">
                <Sidebar routes={routes} />
                <div id="main-panel" className="main-panel">
                    <AdminNavbar titleName={getTitleName(routes)}></AdminNavbar>
                    <BrowserRouter>
                        <Switch>
                            {GetRoutes(routes)}
                            <Redirect from="/" to="/admin" />
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

export default Admin;