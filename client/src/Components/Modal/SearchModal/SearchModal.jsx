import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../reducers/modal.reducer";
import { dataFetch } from "../../../reducers/data.reducer";

import { IoIosSearch } from "react-icons/io";
import "./search-modal.scss";

const SearchModal = ({ searchedItems }) => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const [showItems, setShowItems] = useState([]);
  const modal = useSelector((state) => state.modal.isSearchModal);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    if (inputValue.length > 2) {
      const filteredItems = searchedItems.filter((el) => el.name.toLowerCase().includes(inputValue.toLowerCase()));

      setShowItems(inputValue ? filteredItems : []);
    } else {
      setShowItems([]);
    }
    inputRef.current.focus();
  }, [inputValue, searchedItems]);

  useEffect(() => {
    dispatch(dataFetch({ category: null }));
  }, [dispatch]);

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
              <IoIosSearch className="search-icon" />
            </div>
            <input ref={inputRef} placeholder="Search" className="search-input" type="text" value={inputValue} onChange={handleInputChange} />
          </div>
          <ul className="search-list">
            {showItems.length > 0 &&
              showItems.map((item, index) => (
                <li key={index} className="search-item" 
                onClick={()=>{
                  dispatch(closeModal('isSearchedModal'))

                }}
                >
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
