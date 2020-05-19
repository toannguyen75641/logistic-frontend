import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from "react-bootstrap";
import CustomerList from './CustomerList.js';
import { getToken } from "../../helper/auth";
import { API_URL, LIMIT_OF_PAGE } from "../../global/global";
import QueryString from 'query-string';

const Customer = () => {
    const [listCustomers, setCustomers] = useState([]);
    const accessToken = getToken();
    const [pagination, setPagination] = useState({
        page: 1,
        limit: LIMIT_OF_PAGE,
        totalRow: 1
    });
    const [filters, setFilters] = useState({
        limit: LIMIT_OF_PAGE,
        page: 1
    });

    const fetchCustomers = async () => {
        const paramsString = QueryString.stringify(filters);
        const api_url = API_URL + `customers/getAll?${paramsString}`;
        const headers = new Headers();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', accessToken);
        let response = await fetch(api_url, {headers});
        let { customers, pagination } = await response.json();
        if(customers) {
            setCustomers(customers);
            setPagination(pagination);
        }
    }

    useEffect(() => {
        fetchCustomers();
    }, [filters]);

    const handlePageChange = (newPage) => {
        setFilters({
            ...filters,
            page: newPage
        })
    }
    
    return (
        <div className="content">
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <CustomerList
                            listCustomers={listCustomers}
                            pagination={pagination}
                            onPageChange={handlePageChange}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Customer;