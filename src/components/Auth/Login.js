import React from "react";
import { Button, Form } from "react-bootstrap";
import "../../assets/css/login.css";

function Login() {
    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
                <Form>
                    <h3>Đăng nhập</h3>

                    <Form.Group className="form-group">
                        <Form.Label>Tài khoản</Form.Label>
                        <Form.Control type="email" className="form-control" placeholder="Tài khoản" />
                    </Form.Group>

                    <Form.Group className="form-group">
                        <Form.Label>Mật khẩu</Form.Label>
                        <Form.Control type="password" className="form-control" placeholder="Mật khẩu" />
                    </Form.Group>

                    <Button type="submit" variant="info" className="btn-fill btn-block">Đăng nhập</Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;
