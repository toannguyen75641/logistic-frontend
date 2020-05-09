import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../../assets/css/login.css";
import { setAuth } from "../../helper/auth";
import { API_URL } from "../../global/global";
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const onSubmit = async (event) => {
        event.preventDefault();
        const api_url = API_URL + 'api/login';
        const headers = new Headers();
        headers.append('Content-type', 'application/json');
        var user = {
            account: account,
            password: password
        };

        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(user)
        }

        var response = await fetch(api_url, options);
        var result = await response.json();
        if(result.token) {
            setAuth(result.token);
            history.push('/admin');
        }
        else if(result.error) {
            console.log(result.error);
        }
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <Form onSubmit={onSubmit}>
                    <h3>Đăng nhập</h3>

                    <Form.Group className="form-group">
                        <Form.Label>Tài khoản</Form.Label>
                        <Form.Control
                            type="text"
                            className="form-control"
                            name="account"
                            value={account}
                            onChange={event => setAccount(event.target.value)}
                            placeholder="Tài khoản"
                        />
                    </Form.Group>

                    <Form.Group className="form-group">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control
                            type="password"
                            className="form-control"
                            name="password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            placeholder="Mật khẩu"
                        />
                    </Form.Group>

                    <Button type="submit" variant="info" className="btn-fill btn-block">Đăng nhập</Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;
