import React from 'react';
import { Pagination } from "react-bootstrap";

const Paginations = (props) => {
    const { pagination, onPageChange } = props;
    const { page, limit, totalRow } = pagination;
    let totalPages = Math.ceil(totalRow / limit);
    let item = [];
    
    const handlePageChange = (newPage) => {
        onPageChange(newPage);
    }

    for (let i = 1; i <= totalPages; i++) {
        item.push(
            <Pagination.Item
                key={i}
                onClick={() => handlePageChange(i)}
                active={page === i}
            >{i}</Pagination.Item>
        );
    }

    return (
        <Pagination className="justify-content-md-center">
            <Pagination.First disabled={page <= 1} onClick={() => handlePageChange(1)} />
            <Pagination.Prev disabled={page <= 1} onClick={() => handlePageChange(page - 1)} />
            {item}
            <Pagination.Next disabled={page >= totalPages} onClick={() => handlePageChange(page + 1)} />
            {/* <Pagination.Ellipsis /> */}
            <Pagination.Last disabled={page >= totalPages} onClick={() => handlePageChange(totalPages)} />
        </Pagination>
    );
} 

export default Paginations;