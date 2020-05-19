import React from 'react';
import Card from "../../common/Card/Card.js";
import { Table } from "react-bootstrap";

const CustomerList = (props) => {
    const { pagination, onPageChange, listCustomers } = props;
    return (
        <Card
            title = "Danh sách Khách hàng"
            category = "Khách hàng thân quen"
            pagination = {pagination}
            onPageChange = {onPageChange}
            content = {
                <div className="content">
                    {
                        listCustomers.length > 0 ? (
                            <Table striped hover>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Tên</th>
                                        <th>Email</th>
                                        <th>Địa chỉ</th>
                                        <th>Số điện thoại</th>
                                        <th>Trạng thái đơn hàng</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {listCustomers.map((value, key) => {
                                        return (
                                            <tr key={key}>
                                                <td>{key + 1}</td>
                                                <td>{value.name}</td>
                                                <td>{value.email}</td>
                                                <td>{value.address}</td>
                                                <td>{value.telephone}</td>
                                                <td>{value.order_accept_status}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </Table>
                        ) : (
                            <h3 className="text-center no-data">Không có dữ liệu</h3>
                        )
                    }
                    
                </div>
            }
        />
    );
}

export default CustomerList;