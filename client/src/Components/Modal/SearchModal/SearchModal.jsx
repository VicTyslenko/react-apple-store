import { useState, useEffect, useRef } from "react";

import { IoIosSearch } from "react-icons/io";
import "./search-modal.scss";

const SearchModal = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div className="search-modal-wrapp">
        <div className="icon-wrapp">
          <IoIosSearch />
        </div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </div>
    </>
  );
};

export default SearchModal;
