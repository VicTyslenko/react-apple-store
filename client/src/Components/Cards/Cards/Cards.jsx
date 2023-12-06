import { useState, useEffect } from "react";
import Modal from "../../Modal/Modal";
import Card from "../Card/Card";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { modalClose, addToCart, dataFetch } from "../../../reducers";
import "./Cards.scss";

const Cards = () => {
  const dispatch = useDispatch();
  const userCategory = useSelector((state) => state.filter.selectedCategory);
  console.log(userCategory);
  const fetchData = useSelector((state) => state.data.data);
  const [data, setData] = useState([]);
  useEffect(() => {
    dispatch(dataFetch({ category: userCategory }));
  }, [userCategory, dispatch]);
  const title = userCategory
    ? `${userCategory.charAt(0).toUpperCase() + userCategory.slice(1)} shop`
    : "Shop";

  const iPhoneTitle =
    userCategory &&
    userCategory.charAt(0).toLowerCase() +
      userCategory.charAt(1).toUpperCase() +
      userCategory.slice(2) +
      " " +
      "shop";

  useEffect(() => {
    setData(fetchData.data);
  }, [fetchData]);
  const modal = useSelector((state) => state.modal.isModal);

  const [selectedProduct, setSelectedProduct] = useState([]);

  return (
    <>
      <section className="main-cards-wrapper">
        <h1 className="main-title">
          {userCategory === "iphone" ? iPhoneTitle : title}
        </h1>
        <div className="products-wrapper">
          {data?.map((product) => (
            <Card
              key={product.id}
              setProduct={() => setSelectedProduct(product)}
              item={product}
            />
          ))}
        </div>
      </section>
      {modal && (
        <Modal
          text="Would you like to continue?"
          onCancel={() => {
            dispatch(modalClose());
          }}
          onConfirm={() => {
            dispatch(addToCart(selectedProduct));
            dispatch(modalClose());
          }}
        />
      )}
    </>
  );
};

Cards.propTypes = {
  onAddItem: PropTypes.func,
  closeModal: PropTypes.func,
};

export default Cards;
