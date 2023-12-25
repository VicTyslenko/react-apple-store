import { useSelector, useDispatch } from "react-redux";
import ConfirmButton from "../../Buttons/ConfirmButton/ConfirmButton";
import { formOpen, modalDescriptionClose } from "../../../reducers";
import RingLoader from "react-spinners/RingLoader";
import "./DescriptionModal.scss";

const DescriptionModal = () => {
  const dispatch = useDispatch();
  const selectedCard = useSelector((state) => state.data.selectedCard);
  const loader = useSelector((state) => state.data.isLoading);
  console.log(loader);
  if (!selectedCard) return null;
  const { name, desc, status, img, price } = selectedCard;

  return (
    <div className="total-description-modal-wrapper">
      {loader ? (
        <div className="description-modal-wrapp">
          <RingLoader className="loader" />
          <p>Loading...</p>
        </div>
      ) : (
        <div className="description-modal-wrapp">
          <span className="status">{status}</span>
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
            <p className="description">{desc}</p>
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
      )}
    </div>
  );
};

export default DescriptionModal;
