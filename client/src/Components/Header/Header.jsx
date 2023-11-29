import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { useEffect } from "react";
import { FaApple } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { useSelector } from "react-redux";
import "./Header.scss";

const Header = () => {
  const cartCount = useSelector((state) => state.cart.cartToLocal);
  const favCount = useSelector((state) => state.favourite.favouriteToLocal);

  const favIconColor = favCount.length ? "red-icon" : "black-icon";
  const cartIconColor = cartCount.length ? "red-icon" : "black-icon";
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartCount));
    localStorage.setItem("favourite", JSON.stringify(favCount));
  }, [cartCount, favCount]);
  return (
    <>
      <section className="header">
        <Link to="/react-apple-store" style={{ textDecoration: "none" }}>
          <div className="title-wrapp">
            <FaApple
              style={{
                width: "20px",
                height: "20px",
                color: "black",
              }}
            />
            <h1 className="title">Store</h1>
          </div>
        </Link>

        <div className="header-icons-wrapp">
          <sup className="counter">{favCount.length}</sup>
          <Link to="/favourites">
            <AiFillHeart className={favIconColor} />
          </Link>
          <sup className="counter">{cartCount.length}</sup>
          <Link to="/cartitems">
            <IoBag className={cartIconColor} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Header;
