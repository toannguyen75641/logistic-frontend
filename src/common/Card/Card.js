import React from 'react';
import { Button } from 'react-bootstrap';

function set(props) {
    props.onClick(true);
}

function Card(props) {
    return (
        <div className="card">
            <div className="header">
                {props.create ? <Button className="btn-wd float-right" variant="info" onClick={() => set(props)} >Tạo mới</Button> : '' }
                <h4 className="title">{props.title}</h4>
                <p className="category">{props.category}</p>
            </div>

            {props.content}
            
            <div className="footer">
            </div>
        </div>
    );
}

export default Card;