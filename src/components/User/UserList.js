import React from 'react';
import Card from "../../common/Card/Card.js";
import { Table, Button } from "react-bootstrap";

const tdArray = [
  ["1", "Nguyễn Đức Toàn", "Supper Admin"],
  ["2", "Nguyễn Đức Toàn1", "Tư Vấn Viên"],
  ["3", "Nguyễn Đức Toàn2", "Quản lý kho"],
  ["4", "Nguyễn Đức Toàn3", "Tư Vấn Viên"],
  ["5", "Nguyễn Đức Toàn4", "Quản lý kho"],
  ["6", "Nguyễn Đức Toàn5", "Tư Vấn Viên"]
];

const UserList = (props) => {
    return (
        <Card
            title = "Danh sách Admin"
            category = "Tư vấn viên và quản lý kho"
            create = {true}
            onClick = {props.onClick}
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
                            {tdArray.map((value, key) => {
                                return (
                                    <tr key={key}>
                                        {value.map((value, key) => {
                                            return <td key={key}>{value}</td>;
                                        })}
                                        <td>
                                            <Button variant="info">Sửa</Button>
                                            &nbsp;
                                            <Button variant="danger">Xóa</Button>
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