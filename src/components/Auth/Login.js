import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../../assets/css/login.css";
import { setAuth, setBaseInfo } from "../../helper/auth";
import { API_URL } from "../../global/global";
import { useHistory } from 'react-router-dom';

const Login = () => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useHistory();

    const validate = () => {
        if(account === '' || password === '') {
            setError('Tài khoản hoặc mật khẩu không được để trống');
            return false;
        }
        return true;
    }

    const onSubmit = async (event) => {
        const isValid = validate();
        event.preventDefault();
        event.stopPropagation();
        if(isValid) {
            const api_url = API_URL + 'login';
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

            let response = await fetch(api_url, options);
            let result = await response.json();
            if(result.token) {
                setAuth(result.token);
                setBaseInfo(JSON.stringify(result.user));
                history.push('/admin/users');
            }
            else if(result.error) {
                setError(result.error);
            }
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
                    <div className="form-text text-danger text-center pb-3">{error}</div>

                    <Button type="submit" variant="info" className="btn-fill btn-block">Đăng nhập</Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;
