import React from 'react';
import AdminNavbar from '../common/Navbars/Navbars.js';
import Sidebar from '../common/Sidebar/Sidebar.js';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import routes from '../routes/routes';
import Login from '../components/Auth/Login';
import { isAuth } from '../helper/auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest}
            render = {
                props => isAuth() ? <Component {...props} /> : <Redirect to="/admin/login" />
            }
        />
    );
}

const LoggedOutRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest}
            render = {
                props => isAuth() ? <Redirect to={{ pathname: '/admin'}} /> : <Component {...props} />
            }
        />
    );
}

const GetRoutes = (routes) => {
    return routes.map((value, index) => {
        return(
            <PrivateRoute 
                path = {value.view + value.path}
                component = {value.component}
                key={index}
            />
        );
    });
}

const GetTitleName = (routes) => {
    for(var i = 0; i < routes.length; i++) {
        if(window.location.pathname.indexOf(routes[i].path) > -1) {
            return 'Quản lý ' + routes[i].name;
        }
    }
    return 'Quản lý Logistic';
}

const Admin = () => {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Switch>
                    <LoggedOutRoute exact path = {'/admin/login'} component = {Login} />
                    <div id="main-panel" className="main-panel">
                        <Sidebar routes={routes} />
                        <AdminNavbar titleName={GetTitleName(routes)}></AdminNavbar>
                        {GetRoutes(routes)}
                    </div>
                    {/* <Redirect from="/" to="/admin/dashboard" /> */}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Admin;