import { RxCross2 } from "react-icons/rx";
import { IoBag } from "react-icons/io5";
import Modal from "../Modal/Modal";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  modalClose,
  modalOpen,
  modalSubmitClose,
  emptyCart,
  increaseItemsQuantity,
  decreaseItemsQuantity,
} from "../../reducers";
import ConfirmButton from "../Buttons/ConfirmButton/ConfirmButton";
import { formOpen } from "../../reducers/modal.reducer";
import UserForm from "../Form/Components/UserForm";
import ModalOnSubmit from "../Modal/ModalOnSubmit/ModalOnSubmit";
import "./CartItems.scss";

const CartItems = () => {
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modal.isModal);
  const cart = useSelector((state) => state.cart.cartToLocal);
  console.log(cart);
  const navigate = useNavigate();
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const form = useSelector((state) => state.modal.isForm);
  const submission = useSelector((state) => state.modal.isModalSubmit);
  return (
    <>
      {cart.length === 0 ? (
        <div className="empty-cart-page">
          <p className="text">Your shopping bag is empty</p>
          <IoBag
            style={{
              width: "160px",
              height: "auto",
              color: "#0071e3",
            }}
          />
        </div>
      ) : (
        <div className="cart-container">
          <div className="head-wrapper">
            <div className="total-price-wrapp">
              <p className="title">Shopping bag</p>
              <p className="total-price">
                Total price: <span className="price-color">£{totalPrice}</span>
              </p>
            </div>

            <p
              className="back"
              onClick={() => {
                navigate(-1);
              }}
            >
              Back
            </p>
          </div>
          <div className="cart-items-wrapper">
            {cart.map((el) => (
              <div key={el.id}>
                <div className="item-wrapper">
                  <div className="top-wrapp">
                    <h1 className="item-title">{el.name}</h1>
                    <div className="close-icon_wrapper">
                      <RxCross2
                        style={{
                          color: "black",
                        }}
                        onClick={() => {
                          dispatch(modalOpen());
                        }}
                      />
                    </div>
                  </div>

                  <div className="img-wrapper">
                    <img className="cart-images" src={el.img} alt={el.name} />
                  </div>

                  <div className="price-wrapp">
                    <p className="price">£{el.price}</p>
                    <ConfirmButton
                      className="confirm-btn"
                      text="Buy"
                      onClick={() => {
                        dispatch(formOpen());
                      }}
                    />
                    {modal && (
                      <Modal
                        text="Delete this item from your shopping bag?"
                        onCancel={() => {
                          dispatch(modalClose());
                        }}
                        onConfirm={() => {
                          dispatch(removeFromCart(el));
                          dispatch(modalClose());
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className="quantity-btn-wrapp">
                  <button
                    onClick={() => {
                      dispatch(increaseItemsQuantity(el));
                    }}
                  >
                    +
                  </button>
                  <p className="quantity">{el.quantity}</p>
                  <button
                    onClick={() => {
                      dispatch(decreaseItemsQuantity(el));
                    }}
                  >
                    -
                  </button>
                </div>
              </div>
            ))}
            {form && <UserForm />}
            {submission && (
              <ModalOnSubmit
                text="Thank you for choosen our product!"
                onCancel={() => {
                  dispatch(modalSubmitClose());
                }}
                onConfirm={() => {
                  dispatch(emptyCart());
                  dispatch(modalSubmitClose());
                }}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CartItems;
