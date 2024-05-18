import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { useEffect } from "react";
import { FaApple } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { openModal, closeModal } from "../../reducers";
import { setSelectedCategory, resetSelectedCategory } from "../../reducers/filter.reducer";
import { IoIosSearch } from "react-icons/io";
import SearchModal from "../Modal/SearchModal/SearchModal";
import "./Header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartCount = useSelector((state) => state.cart.cartToLocal);
  const favCount = useSelector((state) => state.favourite.favouriteToLocal);
  const modal = useSelector((state) => state.modal.isModal);
  const products = ["Mac", "iPhone", "Watch", "AirPods"];

  const favIconColor = favCount.length ? "red-icon" : "black-icon";
  const cartIconColor = cartCount.length ? "red-icon" : "black-icon";
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartCount));
    localStorage.setItem("favourite", JSON.stringify(favCount));
  }, [cartCount, favCount]);

  const handleModalOpen = () => {
    dispatch(openModal(modal));
  };

  return (
    <section className="header">
      <div
        className="title-wrapp"
        onClick={() => {
          dispatch(resetSelectedCategory());
          navigate("/");
        }}
      >
        <FaApple
          style={{
            width: "20px",
            height: "20px",
            color: "black",
          }}
        />
        <h1 className="title">Store</h1>
      </div>

      <ul className="list-wrapper">
        {products.map((product) => (
          <li
            className="list-items"
            key={product}
            onClick={() => {
              dispatch(setSelectedCategory(product.toLowerCase()));
              navigate("/");
            }}
          >
            {product}
          </li>
        ))}
      </ul>
      <div className="header-icons-wrapp">
        <IoIosSearch
          onClick={() => {
            handleModalOpen();
          }}
        />
        <sup className="counter">{favCount.length}</sup>
        <Link to="/favourites">
          <AiFillHeart className={favIconColor} />
        </Link>
        <sup className="counter">{cartCount.length}</sup>
        <Link to="/cartitems">
          <IoBag className={cartIconColor} />
        </Link>
      </div>
      {/* <SearchModal /> */}
    </section>
  );
};

export default Header;
