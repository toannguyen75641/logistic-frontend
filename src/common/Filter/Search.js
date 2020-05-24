import React, { useState, useRef } from 'react';
import { Form } from 'react-bootstrap';

const Search = (props) => {
    const { onSearchTermChange } = props;
    const [searchTerm, setSearchTerm] = useState('');
    const typingTimeoutRef = useRef(null);

    const handleSearchTermChange = (event) => {
        const value = event.target.value;
        setSearchTerm(value);

        if(typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value
            }
            onSearchTermChange(formValues);
        }, 300);
    }

    return (
        <Form className="d-inline-block mr-3">
            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Tìm kiếm..."
                    onChange={handleSearchTermChange}
                    value={searchTerm}
                />
            </Form.Group>
        </Form>
    );
}

export default Search;