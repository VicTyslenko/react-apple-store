import ConfirmButton from "../Buttons/ConfirmButton/ConfirmButton";
import "./Modal.scss";

const Modal = (props) => {
  const { text, onCancel, onConfirm } = props;

  return (
    <div className="total-wrapper" onClick={onCancel}>
      <div
        className="modal-wrapper"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p className="text">{text}</p>

        <div className="btn-wrapper">
          <ConfirmButton
            text="Yes"
            onClick={onConfirm}
            className="confirm-btn"
          />
          <ConfirmButton text="No" onClick={onCancel} className="confirm-btn" />
        </div>
      </div>
    </div>
  );
};
export default Modal;
