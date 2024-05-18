import { useState, useEffect, useRef, useMemo } from "react";
import { useDispatch } from "react-redux";

import { closeModal } from "../../../reducers/modal.reducer";
import { IoIosSearch } from "react-icons/io";
import "./search-modal.scss";

const SearchModal = ({ searchedItems }) => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const [showItems, setShowItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    if (inputValue.length > 2) {
      const filteredItems = searchedItems.filter((el) => el.name.substring(0, 2).toLowerCase().includes(inputValue.substring(0, 2).toLowerCase()));

      setShowItems(inputValue ? filteredItems : []);
    } else {
      setShowItems([]);
    }
  }, [inputValue, searchedItems]);
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
          <ul>
            {showItems.length > 0 &&
              showItems.map((item, index) => (
                <li key={index}>
                  {item.name}
                  {item.model}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
