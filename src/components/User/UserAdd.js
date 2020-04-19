import React from 'react';
import { Form, Button } from 'react-bootstrap';
import Card from "../../common/Card/Card.js";

function UserAdd() {
    return (
        <Card
            title = "Tạo mới Admin"
            category = "Tạo mới"
            create = {false}
            content = {
                <div className="content">
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label className="float-left">Họ và tên</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                placeholder="Họ và tên"
                            />
                        </Form.Group>
                        <Form.Group controlId="role">
                            <Form.Label className="float-left">Quyền</Form.Label>
                            <Form.Control as="select">
                                <option>Tư vấn viên</option>
                                <option>Quản lý Kho</option>
                            </Form.Control>
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