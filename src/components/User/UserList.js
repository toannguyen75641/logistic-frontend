import React  from 'react';
import Card from "../../common/Card/Card.js";
import { Table, Button } from "react-bootstrap";

const UserList = (props) => {
    const { setAddUser, pagination, onPageChange, editUser, deleteUser, listUsers } = props;
    return (
        <Card
            title = "Danh sách Admin"
            category = "Tư vấn viên và quản lý kho"
            create = {true}
            onClick = {setAddUser}
            pagination = {pagination}
            onPageChange = {onPageChange}
            content = {
                <div className="content">
                    <Table striped hover responsive>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Tên</th>
                                <th>Quyền</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listUsers.map((value, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{value.id}</td>
                                        <td>{value.name}</td>
                                        <td>{value.mtb_role.name}</td>
                                        <td>
                                            <Button variant="info" onClick={() => editUser(value.id)}>Sửa</Button>
                                            &nbsp;
                                            {value.role !== 1 && <Button variant="danger" onClick={() => deleteUser(value.id)}>Xóa</Button>}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </div>
            }
        />
    );
}

export default UserList;