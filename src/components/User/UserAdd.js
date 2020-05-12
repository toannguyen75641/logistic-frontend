import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Card from "../../common/Card/Card.js";

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
    let [user, setUser] = useState({
        name: '',
        role: '2',
        account: '',
        password: ''
    });
    if(props.user !== null) {
        user = props.user;
    }
    const created_by = props.baseInfo.id;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        var data = {
            name: user.name,
            role: user.role,
            account: user.account,
            password: user.password,
            created_by: created_by,
            status: 1
        }
        props.onSubmit(data);
    }

    return (
        <Card
            title = "Tạo mới Admin"
            category = "Tạo mới"
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
                            <Form.Control type="hidden" name="id" />
                            <Button className="btn-wd float-left" variant="success" type="submit">Tạo mới</Button>
                        </Form.Group>
                    </Form>
                </div>
            }
        />
    );
}

export default UserAdd;