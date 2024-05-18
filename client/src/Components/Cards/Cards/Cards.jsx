import { useState, useEffect } from "react";
import Modal from "../../Modal/Modal";
import Card from "../Card/Card";
import DescriptionModal from "../../Modal/DescriptionModal/DescriptionModal";
import UserForm from "../../Form/Components/UserForm";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import ModalOnSubmit from "../../Modal/ModalOnSubmit/ModalOnSubmit";
import { addToCart, dataFetch, openModal, closeModal } from "../../../reducers";
import "./Cards.scss";
import RingLoader from "react-spinners/RingLoader";

const Cards = () => {
  const dispatch = useDispatch();
  const userCategory = useSelector((state) => state.filter.selectedCategory);
  const submission = useSelector((state) => state.modal.isModalSubmit);
  const form = useSelector((state) => state.modal.isForm);
  const fetchData = useSelector((state) => state.data.data);
  const loader = useSelector((state) => state.data.isLoading);
  const [data, setData] = useState([]);

  const descriptionModal = useSelector((state) => state.modal.isDescriptionModal);
  const modal = useSelector((state) => state.modal.isModal);

  useEffect(() => {
    dispatch(dataFetch({ category: userCategory }));
  }, [userCategory, dispatch]);
  const title = userCategory ? `${userCategory.charAt(0).toUpperCase() + userCategory.slice(1)} shop` : "Shop";

  const iPhoneTitle =
    userCategory && userCategory.charAt(0).toLowerCase() + userCategory.charAt(1).toUpperCase() + userCategory.slice(2) + " " + "shop";

  useEffect(() => {
    setData(fetchData.data);
  }, [fetchData]);

  const [selectedProduct, setSelectedProduct] = useState([]);

  return (
    <>
      <section className="main-cards-wrapper">
        <h1 className="main-title">{userCategory === "iphone" ? iPhoneTitle : title}</h1>

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
                openDescriptionModal={() => {
                  dispatch(openModal("isDescriptionModal"));
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
            dispatch(closeModal("isModal"));
          }}
          onConfirm={() => {
            dispatch(addToCart(selectedProduct));
            dispatch(closeModal("isModal"));
          }}
        />
      )}
      {descriptionModal && <DescriptionModal />}
      {form && <UserForm />}
      {submission && (
        <ModalOnSubmit
          text="Thank you for choosen our product!"
          onCancel={() => {
            dispatch(closeModal("isModalSubmit"));
          }}
          onConfirm={() => {
            dispatch(closeModal("isModalSubmit"));
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
