import React, { useState } from 'react';
import { Form, Button, Dropdown, Stack } from 'react-bootstrap';

export default function Filter({ query, setQuery, fetch }) {

    const handleInputChange = (key, value) => {
        setQuery((prevQuery) => ({ ...prevQuery, [key]: value }));
    };

    const handleSearch = () => {
        fetch();
    };
    
    const toggleDesc = () => {
        setQuery((prevQuery) => ({...prevQuery, desc: !prevQuery.desc}));
    };

    return (
        <Stack direction="horizontal">
            <Dropdown>
                <Dropdown.Toggle variant="light" id="filter_dropdown">
                    {query.filter || 'Select Filter'}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleInputChange('filter', 'name')}>Name</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleInputChange('filter', 'org')}>Organization</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleInputChange('filter', 'desc')}>Description</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleInputChange('filter', 'platform')}>Platform</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Form.Control
                type="text"
                placeholder="Enter filter value"
                value={query.val}
                onChange={(e) => handleInputChange('val', e.target.value)}
            />
            <Dropdown>
                <Dropdown.Toggle variant="light" id="order_by_dropdown">
                    Order: {query.order_by}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => handleInputChange('order_by', 'id')}>ID</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleInputChange('order_by', 'price')}>Price</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleInputChange('order_by', 'name')}>Name</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleInputChange('order_by', 'org')}>Organization</Dropdown.Item>
                    {/* <Dropdown.Item onClick={() => handleInputChange('order_by', 'platforms')}>Platforms</Dropdown.Item> */}
                    {/* <Dropdown.Item onClick={() => handleInputChange('order_by', 'desc')}>Description</Dropdown.Item> */}
                </Dropdown.Menu>
            </Dropdown>
            <Button variant="light" onClick={() => toggleDesc()}>
                {query.desc ?
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1" />
                    </svg> :
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
                    </svg>}
            </Button>
        </Stack>
    );
}