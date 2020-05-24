import React  from 'react';
import Card from "../../common/Card/Card.js";
import { Table, Button } from "react-bootstrap";

const UserList = (props) => {
    const { setAddUser, pagination, onPageChange, onSearchTermChange, editUser, deleteUser, listUsers, category, lockUser } = props;
    return (
        <Card
            title = "Danh sách Admin"
            category = {"Tổng cộng " + category + " Admin"}
            create = {true}
            onClick = {setAddUser}
            pagination = {pagination}
            onPageChange = {onPageChange}
            onSearchTermChange = {onSearchTermChange}
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
                                            {value.status !== 0 && <Button variant="info" onClick={() => editUser(value.id)}>Sửa</Button>}
                                            &nbsp;
                                            <Button variant='warning' onClick={() => lockUser(value.id)}>Khóa</Button>
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