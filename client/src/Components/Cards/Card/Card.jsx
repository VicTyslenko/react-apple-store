import ConfirmButton from "../../Buttons/ConfirmButton/ConfirmButton";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import PropTypes from "prop-types";
import {
  addToFavourite,
  modalOpen,
  removeFromFavourite,
} from "../../../reducers";
import { useDispatch } from "react-redux";

import "./Card.scss";

const Card = ({ item, setProduct }) => {
  const { name, price, img, id } = item;
  
  const dispatch = useDispatch();

  const favourite = Boolean(
    JSON.parse(localStorage.getItem("favourite"))?.find(
      (favourite) => favourite.id === id
    )
  );

  const [addedToFavorites, setAddedToFavorites] = useState(
    !favourite ? false : true
  );
  const [notFavorites, setNotFavorites] = useState(favourite ? false : true);

  return (
    <div className="card-wrapper">
      <div className="title-wrapp">
        <h1 className="title">{name}</h1>
        <div className="svg-wrapp">
          {notFavorites && (
            <AiFillHeart
              className="favourite-icon"
              style={{
                color: "#727272",
              }}
              onClick={() => {
                dispatch(addToFavourite(item));
                setAddedToFavorites(true);
                setNotFavorites(false);
              }}
            />
          )}
          {addedToFavorites && (
            <AiFillHeart
              className="favourite-icon"
              style={{
                color: "red",
              }}
              onClick={() => {
                dispatch(removeFromFavourite(item));
                setNotFavorites(true);
                setAddedToFavorites(false);
              }}
            />
          )}
        </div>
      </div>

      <div className="image-wrapper">
        <img
         
          src={img}
          alt="Iphone"
          className="image-item"
        />
      </div>
      <div className="bottom-wrapp">
        <p className="price">£{price}</p>
        <ConfirmButton
          text="Add to bag"
          className="add-btn"
          onClick={() => {
            dispatch(modalOpen());
            setProduct();
          }}
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  art: PropTypes.number,
  color: PropTypes.string,
  colorChange: PropTypes.func,
  onAddFavourite: PropTypes.func,
};

export default Card;
