import { useState, useEffect } from "react";
import Modal from "../../Modal/Modal";
import Card from "../Card/Card";
import DescriptionModal from "../../Modal/DescriptionModal/DescriptionModal";
import UserForm from "../../Form/Components/UserForm";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import {
  modalClose,
  addToCart,
  dataFetch,
  modalDescriptionOpen,
} from "../../../reducers";
import "./Cards.scss";
import RingLoader from "react-spinners/RingLoader";

const Cards = () => {
  const dispatch = useDispatch();
  const userCategory = useSelector((state) => state.filter.selectedCategory);
  const form = useSelector((state) => state.modal.isForm);
  const fetchData = useSelector((state) => state.data.data);
  const loader = useSelector((state) => state.data.isLoading);
  const [data, setData] = useState([]);
  const descriptionModal = useSelector(
    (state) => state.modal.isDescriptionModal
  );

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
        {loader ? (
          <div className="products-wrapper">
            <RingLoader className="loader" />
            <p>Loading...</p>
          </div>
        ) : (
          <div className="products-wrapper">
            {data?.map((product) => (
              <Card
                key={product.id}
                setProduct={() => setSelectedProduct(product)}
                item={product}
                openModal={() => {
                  dispatch(modalDescriptionOpen());
                }}
              />
            ))}
          </div>
        )}
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
      {descriptionModal && <DescriptionModal />}
      {form && <UserForm />}
    </>
  );
};

Cards.propTypes = {
  onAddItem: PropTypes.func,
  closeModal: PropTypes.func,
};

export default Cards;
