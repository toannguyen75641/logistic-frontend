import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import CustomerList from './CustomerList.js';

function Customer() {
    return (
        <div className="content">
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <CustomerList></CustomerList>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Customer;