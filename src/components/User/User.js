import React, { useState, useEffect } from 'react';
import UserList from "./UserList.js";
import UserAdd from "./UserAdd.js";
import UserEdit from "./UserEdit.js";
import { Row, Col, Container, Alert } from "react-bootstrap";
import { getToken, getBaseInfo } from "../../helper/auth";
import { API_URL, LIMIT_OF_PAGE } from "../../global/global";
import QueryString from 'query-string';

const User = () => {
    const [isAddUser, setAddUser] = useState(false);
    const [isEditUser, setEditUser] = useState(false);
    const [listUsers, setListUsers] = useState([]);
    const [user, setUser] = useState({});
    const [response, setResponse] = useState({});
    const baseInfo = getBaseInfo();
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

    const fetchUsers = async () => {
        const paramsString = QueryString.stringify(filters);
        const api_url = API_URL + `users/getAll?${paramsString}`;
        const headers = new Headers();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', accessToken);
        let response = await fetch(api_url, {headers});
        let { users, pagination } = await response.json();
        if(users) {
            setListUsers(users);
            setPagination(pagination);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [filters]);

    const handlePageChange = (newPage) => {
        setFilters({
            ...filters,
            page: newPage
        })
    }

    const editUser = async (id) => {
        const api_url = API_URL + "users/get?id=" + id;
        const headers = new Headers();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', accessToken);

        const response = await fetch(api_url, {headers});
        const result = await response.json();
        if(!result.error) {
            setUser(result);
            setEditUser(true);
        }
    }

    const lockUser = async (id) => {
        const api_url = API_URL + "users/lock?id=" + id;
        const method = "PUT";
        const headers = new Headers();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', accessToken);

        const options = {
            method,
            headers
        }

        const response = await fetch(api_url, options);
        const result = await response.json();
        if(!result.error) {
            setListUsers(listUsers);
        }
        setResponse(result);

    }

    const deleteUser = async (id) => {
        const api_url = API_URL + "users/delete?id=" + id;
        const method = "DELETE";
        const headers = new Headers();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', accessToken);

        const options = {
            method,
            headers
        }

        const response = await fetch(api_url, options);
        const result = await response.json();
        if(!result.error) {
            setListUsers(listUsers.filter(user => user.id !== id));
        }
        setResponse(result);

    }

    let userForm;
    if(isEditUser) {
        userForm = <UserEdit 
                        baseInfo={JSON.parse(baseInfo)}
                        user={user}
                        setEditUser={setEditUser}
                        setListUsers={setListUsers}
                        setResponse={setResponse}
                        filters={filters}
                    />
    }
    else {
        userForm = <UserAdd 
                        baseInfo={JSON.parse(baseInfo)}
                        setAddUser={setAddUser}
                        setListUsers={setListUsers}
                        setResponse={setResponse}
                        filters={filters}
                    />
    }

    return (
        <div className="content">
            <Container fluid>
                <Row>
                    <Col md={12}>
                        {response.status === "success" && <div><br/><Alert variant="info">{response.message}</Alert></div>}
                        {(!isAddUser && !isEditUser) ? (
                            <UserList 
                                setAddUser={setAddUser}
                                listUsers={listUsers}
                                editUser={editUser}
                                lockUser={lockUser}
                                deleteUser={deleteUser}
                                pagination={pagination}
                                onPageChange={handlePageChange}
                                category={pagination.totalRow}
                            />
                        ) : (
                            userForm
                        )}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default User;