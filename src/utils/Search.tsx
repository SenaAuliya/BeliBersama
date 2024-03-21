"use client";
import React, { useState } from "react";

const Search = ({onSearch}: any) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: any) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        className="items-center h-10 p-3 rounded-full bg-light"
        id="search"
        name="search"
        placeholder="Cari Barang..."
        value={query}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
