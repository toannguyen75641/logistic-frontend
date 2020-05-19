import React from 'react';
import { Button } from 'react-bootstrap';
import Pagination from '../Pagination/Pagination';

const Card = (props) => {
    const { create, title, category, onClick, content, pagination, onPageChange } = props;
    return (
        <div className="card">
            <div className="header">
                {create ? <Button className="btn-wd float-right" variant="info" onClick={() => onClick(true)} >Tạo mới</Button> : '' }
                <h4 className="title">{title}</h4>
                <p className="category">{category}</p>
            </div>

            {content}
            
            <div className="footer">
                <Pagination 
                    pagination = {pagination}
                    onPageChange = {onPageChange}
                />
            </div>
        </div>
    );
}

export default Card;