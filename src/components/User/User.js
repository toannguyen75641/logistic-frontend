import React, {useState, useEffect} from 'react';
import UserList from "./UserList.js";
import UserAdd from "./UserAdd.js";
import { Row, Col, Container } from "react-bootstrap";

function User() {
    const [isAddUser, setIsAddUser] = useState(false);
    const [isEditUser, setIsEditUser] = useState(false);

    let userForm;
    if(isAddUser || isEditUser) {
        userForm = <UserAdd></UserAdd>
    }

    return (
        <div className="content">
            <Container fluid>
                <Row>
                    <Col md={12}>
                        {!isAddUser ? <UserList onClick={setIsAddUser}></UserList> : userForm}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default User;