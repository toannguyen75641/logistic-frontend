import React from 'react';
import { Button } from 'react-bootstrap';
import Search from '../Filter/Search';
import Pagination from '../Pagination/Pagination';

const Card = (props) => {
    const { create, title, category, onClick, content, pagination, onPageChange, onSearchTermChange, baseInfo } = props;

    return (
        <div className="card">
            <div className="header d-flex justify-content-between">
                <div className="text-left">
                    <h4 className="title">{title}</h4>
                    <p className="category">{category}</p>
                </div>
                <div className="text-right">
                    {(create && baseInfo.role == 1) && <Button className="btn-wd float-right" variant="info" onClick={() => onClick(true)} >Tạo mới</Button> }
                    {create && <Search onSearchTermChange={onSearchTermChange} /> }
                </div>
            </div>

            {content}
            
            <div className="footer">
                {pagination && pagination.totalRow > 1 && 
                    <Pagination 
                        pagination={pagination}
                        onPageChange={onPageChange}
                    />
                }
            </div>
        </div>
    );
}

export default Card;