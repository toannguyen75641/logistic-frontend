import React from 'react';
import { Row, Col, Table, Container } from "react-bootstrap";

const thArray = ["ID", "Tên", "Quyền"];
const tdArray = [
  ["1", "Nguyễn Đức Toàn", "Supper Admin"],
  ["2", "Nguyễn Đức Toàn1", "Tư Vấn Viên"],
  ["3", "Nguyễn Đức Toàn2", "Quản lý kho"],
  ["4", "Nguyễn Đức Toàn3", "Tư Vấn Viên"],
  ["5", "Nguyễn Đức Toàn4", "Quản lý kho"],
  ["6", "Nguyễn Đức Toàn5", "Tư Vấn Viên"]
];

function User() {
    return (
        <div className="content">
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <div className="card">
                            <div className="header">
                                <h4 className="title">Danh sách Admin</h4>
                                <p className="category">Tư vấn viên và quản lý kho</p>
                            </div>
                            <div className="content">
                                <Table striped hover>
                                    <thead>
                                        <tr>
                                            {thArray.map((value, key) => {
                                                return <th key={key}>{value}</th>;
                                            })}
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {tdArray.map((value, key) => {
                                            return (
                                                <tr key={key}>
                                                    {value.map((value, key) => {
                                                        return <td key={key}>{value}</td>;
                                                    })}
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </Table>
                                <div className="footer">
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default User;