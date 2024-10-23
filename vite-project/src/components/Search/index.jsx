import React, { useState } from 'react';
import { Form, Input, Button } from './style.jsx';

export const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
      />
      <Button type="submit">Search</Button>
    </Form>
  );
};

export default SearchBar;
