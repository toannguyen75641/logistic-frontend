import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Card from "../../common/Card/Card.js";
import { getToken } from "../../helper/auth";
import { API_URL } from "../../global/global";
import QueryString from 'query-string';

const list_role = [
    {
        name: 'Cộng tác viên',
        value: '2'
    },
    {
        name: 'Quản lý kho',
        value: '3'
    }
];

const UserAdd = (props) => {
    const { baseInfo, setListUsers, setEditUser, setResponse, filters} = props;
    const [user, setUser] = useState(props.user);
    const created_by = baseInfo.id;
    const accessToken = getToken();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const onSubmit = async (data) => {
        let api_url = API_URL + "users/update?id=" + data.id;
        const method = "PUT";
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
            const paramsString = QueryString.stringify(filters);
            api_url = API_URL + `users/getAll?${paramsString}`;
            const res = await fetch(api_url, {headers});
            let { users } = await res.json();
            setListUsers(users);
            setEditUser(false);
        }
        setResponse(result);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        var data = {
            id: user.id,
            name: user.name,
            role: parseInt(user.role),
            account: user.account,
            password: user.password,
            created_by: created_by,
            status: 1
        }
        onSubmit(data);
    }

    return (
        <Card
            title = "Cập nhật Admin" 
            category = "Cập nhật"
            create = {false}
            content = {
                <div className="content">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="name">
                            <Form.Label className="float-left">Họ và tên</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Họ và tên"
                                onChange={handleChange}
                                value={user.name}
                            />
                        </Form.Group>
                        <Form.Group controlId="role">
                            <Form.Label className="float-left">Quyền</Form.Label>
                            <Form.Control
                                as="select"
                                name="role"
                                onChange={handleChange}
                                value={user.role}
                            >
                                {list_role.map((value, key) => {
                                    return (
                                        <option key={key} value={value.value}>{value.name}</option>
                                    );
                                })}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="account">
                            <Form.Label className="float-left">Tài khoản</Form.Label>
                            <Form.Control
                                type="text"
                                name="account"
                                placeholder="Tài khoản"
                                onChange={handleChange}
                                value={user.account}
                            />
                        </Form.Group>
                        <Form.Group controlId="password">
                            <Form.Label className="float-left">Mật khẩu</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Mật khẩu"
                                onChange={handleChange}
                                value={user.password}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Button className="btn-wd float-left" variant="success" type="submit">Cập nhật</Button>
                        </Form.Group>
                    </Form>
                </div>
            }
        />
    );
}

export default UserAdd;