import { getBaseInfo } from "../../helper/auth";

const baseInfo = JSON.parse(getBaseInfo());
const list_role = [
    {
        name: 'Cộng tác viên',
        value: '2'
    },
    {
        name: 'Quản lý kho',
        value: '3'
    }
];

if(baseInfo.role === 1) {
    list_role.unshift({
        name: 'SupperAdmin',
        value: '1'
    })
}

export default list_role;