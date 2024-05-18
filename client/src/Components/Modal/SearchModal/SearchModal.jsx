import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

import { closeModal } from "../../../reducers/modal.reducer";
import { IoIosSearch } from "react-icons/io";
import "./search-modal.scss";

const SearchModal = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div
        className="total-search-modal-wrapp"
        onClick={() => {
          dispatch(closeModal("isSearchModal"));
        }}
      >
        <div
          className="search-modal-wrapp"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <div className="search-input-wrapp">
            <div className="icon-wrapp">
              <IoIosSearch />
            </div>
            <input placeholder="Search" className="search-input" type="text" value={inputValue} onChange={handleInputChange} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
