import React from 'react';
import { Row, Col, Table, Container } from "react-bootstrap";

const thArray = ["ID", "Name", "Salary", "Country", "City"];
const tdArray = [
  ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
  ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
  ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
  ["4", "Philip Chaney", "$38,735", "Korea, South", "Overland Park"],
  ["5", "Doris Greene", "$63,542", "Malawi", "Feldkirchen in Kärnten"],
  ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"]
];

function Customer() {
    return (
        <div className="content">
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <div className="card">
                            <div className="header">
                                <h4 className="title">Danh sách khách hàng</h4>
                                <p className="category">Khách hàng thân quen</p>
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

export default Customer;