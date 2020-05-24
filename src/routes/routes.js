import User from '../components/User/User.js';
import Customer from '../components/Customer/Customer.js';
import { faUsersCog, faUsers, faTruck } from "@fortawesome/free-solid-svg-icons";

const Routes = [
    {
        path: "/users",
        name: "Người dùng",
        icon: faUsersCog,
        component: User,
        view: "/admin"
    },
    {
        path: "/customers",
        name: "Khách hàng",
        icon: faUsers,
        component: Customer,
        view: "/admin"
    },
    {
        path: "/trucks",
        name: "Xe tải",
        icon: faTruck,
        component: Customer,
        view: "/admin"
    }
];

export default Routes;