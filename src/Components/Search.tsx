  import { useState } from "react";
  
  const Search = ({onSearch}: any) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchInputChange = (event: any) => {
      setSearchTerm(event.target.value);
      onSearch(event.target.value);
    };
    return (
       <div className="flex justify-center">
         <input
          type="search"
          className="items-center h-16 flex justify-center w-1/2 p-3 rounded-lg bg-light focus:border-none"
          id="search"
          name="search"
          placeholder="Cari Barang..."
          value={searchTerm}
          onChange={handleSearchInputChange}
        />
       </div>
    );
  };

  export default Search;
