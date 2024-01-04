import { useSelector, useDispatch } from "react-redux";
import { AiFillHeart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ConfirmButton from "../Buttons/ConfirmButton/ConfirmButton";
import { IoIosArrowBack } from "react-icons/io";
import { removeFromFavourite, addToCart } from "../../reducers";
import "./favourite.scss";

const FavouriteItems = () => {
  const dispatch = useDispatch();
  const favouriteItems = useSelector(
    (state) => state.favourite.favouriteToLocal
  );
  const navigate = useNavigate();

  return (
    <>
      {!favouriteItems.length ? (
        <div className="empty-fav-page">
          <p className="text">No favourite items</p>
        </div>
      ) : (
        <div className="cart-container">
          <div className="top-wrapper">
            <p className="title">Favourite items</p>

            <div
              className="back"
              onClick={() => {
                navigate(-1);
              }}
            >
              <IoIosArrowBack />
              <p>Back</p>
            </div>
          </div>
          <div className="cart-items-wrapper">
            {favouriteItems.map((el) => (
              <div key={el.id}>
                <div className="item-wrapper">
                  <div className="top-wrapp">
                    <h1 className="item-title">{el.name}</h1>
                    <AiFillHeart
                      style={{
                        color: "#bf4800",
                        cursor: "pointer",
                        width: "20px",
                        height: "20px",
                      }}
                      onClick={() => {
                        dispatch(removeFromFavourite(el));
                      }}
                    />
                  </div>

                  <div className="img-wrapper">
                    <img className="cart-images" src={el.img} alt={el.name} />
                  </div>

                  <div className="price-wrapp">
                    <p className="price">£{el.price}</p>
                    <ConfirmButton
                      className="confirm-btn"
                      text="Add to bag"
                      onClick={() => {
                        dispatch(addToCart(el));
                        dispatch(removeFromFavourite(el));
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default FavouriteItems;
