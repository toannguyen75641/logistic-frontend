import React from 'react';
import { Button } from 'react-bootstrap';
import Pagination from '../Pagination/Pagination';

const Card = (props) => {
    return (
        <div className="card">
            <div className="header">
                {props.create ? <Button className="btn-wd float-right" variant="info" onClick={() => props.onClick(true)} >Tạo mới</Button> : '' }
                <h4 className="title">{props.title}</h4>
                <p className="category">{props.category}</p>
            </div>

            {props.content}
            
            <div className="footer">
                <Pagination/>
            </div>
        </div>
    );
}

export default Card;