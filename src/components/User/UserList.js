import React  from 'react';
import Card from "../../common/Card/Card.js";
import { Table, Button } from "react-bootstrap";

const UserList = (props) => {
    return (
        <Card
            title = "Danh sách Admin"
            category = "Tư vấn viên và quản lý kho"
            create = {true}
            onClick = {props.setAddUser}
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
                            {props.listUsers.map((value, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{key + 1}</td>
                                        <td>{value.name}</td>
                                        <td>{value.mtb_role.name}</td>
                                        <td>
                                            <Button variant="info" onClick={() => props.editUser(value.id)}>Sửa</Button>
                                            &nbsp;
                                            {value.role != 1 && <Button variant="danger" onClick={() => props.deleteUser(value.id)}>Xóa</Button>}
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