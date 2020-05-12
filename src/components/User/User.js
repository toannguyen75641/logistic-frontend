import React, { useState, useEffect } from 'react';
import UserList from "./UserList.js";
import UserAdd from "./UserAdd.js";
import { Row, Col, Container, Alert } from "react-bootstrap";
import { getToken, getBaseInfo } from "../../helper/auth";
import { API_URL } from "../../global/global";

const User = () => {
    const [isAddUser, setAddUser] = useState(false);
    const [isEditUser, setEditUser] = useState(false);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [response, setResponse] = useState({});
    const baseInfo = getBaseInfo();
    const accessToken = getToken();

    const fetchUsers = async () => {
        const api_url = API_URL + "users/getAll";
        const headers = new Headers();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', accessToken);
        let response = await fetch(api_url, {headers});
        let result = await response.json();
        if(result) {
            setUsers(result);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    const onSubmit = async (data) => {
        const api_url = API_URL + "users/create";
        const method = "POST";
        const headers = new Headers();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', accessToken);

        const options = {
            method: method,
            headers,
            body: JSON.stringify(data)
        }

        const response = await fetch(api_url, options);
        const result = await response.json();
        if(result.status === 'success') {
            setAddUser(false);
            setEditUser(false);
            const res = await fetch(api_url, {headers});
            const users = await res.json();
            setUsers(users);
        }
        setResponse(result);
    }

    const editUser = async (id) => {
        let api_url = API_URL + "users/get";
        api_url += '?id=' + id;
        const headers = new Headers();
        headers.append('Content-type', 'application/json');
        headers.append('Authorization', accessToken);

        const response = await fetch(api_url, {headers});
        const result = await response.json();
        if(!result.error) {
            setUser(result);
            setAddUser(true);
            setEditUser(true);
        }
    }

    const deleteUser = (id) => {
        console.log(id)
    }

    let userForm;
    if(isAddUser || isEditUser) {
        userForm = <UserAdd baseInfo={JSON.parse(baseInfo)} onSubmit={onSubmit} user={user}></UserAdd>
    }

    return (
        <div className="content">
            <Container fluid>
                <Row>
                    <Col md={12}>
                        {response.status === "success" && <div><br/><Alert variant="info">{response.message}</Alert></div>}
                        {!isAddUser ? <UserList setAddUser={setAddUser} users={users} editUser={editUser} deleteUser={deleteUser}></UserList> : userForm}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default User;