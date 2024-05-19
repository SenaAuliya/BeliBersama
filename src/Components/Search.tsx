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
          className="items-center lg:h-16 h-14 flex justify-center lg:w-1/2 w-3/4 p-3 rounded-lg bg-light focus:border-none"
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
