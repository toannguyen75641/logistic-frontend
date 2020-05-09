import User from '../components/User/User.js';
import Customer from '../components/Customer/Customer.js';

const Routes = [
    {
        path: "/user",
        name: "Người dùng",
        icon: "fa fa-users",
        component: User,
        view: "/admin"
    },
    {
        path: "/customer",
        name: "Khách hàng",
        icon: "fa fa-users",
        component: Customer,
        view: "/admin"
    }
];

export default Routes;