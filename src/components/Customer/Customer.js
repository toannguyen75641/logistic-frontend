import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from "react-bootstrap";
import CustomerList from './CustomerList.js';
import { getToken } from "../../helper/auth";
import { API_URL } from "../../global/global";

const Customer = () => {
    const [listCustomers, setCustomers] = useState([]);
    const accessToken = getToken();

    const fetchCustomers = async () => {
        const api_url = API_URL + "customers/getAll";
        const headers = new Headers();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', accessToken);
        let response = await fetch(api_url, {headers});
        let result = await response.json();
        if(result) {
            setCustomers(result);
        }
    }

    useEffect(() => {
        fetchCustomers();
    }, []);
    
    return (
        <div className="content">
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <CustomerList listCustomers={listCustomers}></CustomerList>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Customer;