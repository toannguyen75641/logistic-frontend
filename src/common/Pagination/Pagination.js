import React from 'react';
import { Pagination } from "react-bootstrap";

const Paginations = (props) => {
    const { pagination, onPageChange } = props;
    const { page, limit, totalRow } = pagination;
    let total_pages = Math.ceil(totalRow / limit);
    let list_page = [];
    
    const handlePageChange = (newPage) => {
        onPageChange(newPage);
    }

    for (let i = 1; i <= total_pages; i++) {
        list_page.push(
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
            {list_page}
            <Pagination.Next disabled={page >= total_pages} onClick={() => handlePageChange(page + 1)} />
            {/* <Pagination.Ellipsis /> */}
            <Pagination.Last disabled={page >= total_pages} onClick={() => handlePageChange(total_pages)} />
        </Pagination>
    );
} 

export default Paginations;