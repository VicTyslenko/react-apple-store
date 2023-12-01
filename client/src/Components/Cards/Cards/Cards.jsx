import { useState } from "react";
import Modal from "../../Modal/Modal";
import Card from "../Card/Card";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { modalClose, addToCart } from "../../../reducers";

import "./Cards.scss";

const Cards = () => {
  const dispatch = useDispatch();
  const fetchData = useSelector((state) => state.data.data);
  console.log(fetchData);
  const modal = useSelector((state) => state.modal.isModal);
  const [selectedProduct, setSelectedProduct] = useState([]);

  const productsRender = fetchData.map((product) => (
    <Card
      key={product.id}
      setProduct={() => setSelectedProduct(product)}
      item={product}
    />
  ));

  return (
    <>
      <section className="main-cards-wrapper">
        <h1 className="main-title">Shop</h1>
        <div className="products-wrapper">{productsRender}</div>
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
