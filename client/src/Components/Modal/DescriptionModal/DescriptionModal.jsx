import { useSelector, useDispatch } from "react-redux";
import ConfirmButton from "../../Buttons/ConfirmButton/ConfirmButton";
import { formOpen, modalDescriptionClose } from "../../../reducers";
import UserForm from "../../Form/Components/UserForm";
import "./DescriptionModal.scss";

const DescriptionModal = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.modal.isForm);
  const selectedCard = useSelector((state) => state.data.selectedCard);
  if (!selectedCard) return null;
  const { name, desc, status, img, price } = selectedCard;

  return (
    <div className="total-description-modal-wrapper">
      <div className="description-modal-wrapp">
        <div className="header-wrapp">
          <h1 className="title">{name}</h1>
          <ConfirmButton
            className="desc-button"
            text="Buy"
            onClick={() => {
              dispatch(formOpen());
              dispatch(modalDescriptionClose());
            }}
          />
        </div>

        <p className="price">From £{price}</p>
        <div className="flex-wrapp">
          <div className="image-wrapp">
            <img className="description-image" src={img} alt={name} />
          </div>
          <div className="description">{desc}</div>
        </div>

        <span
          className="close-modal"
          onClick={() => {
            dispatch(modalDescriptionClose());
          }}
        >
          X
        </span>
      </div>
    </div>
  );
};

export default DescriptionModal;
