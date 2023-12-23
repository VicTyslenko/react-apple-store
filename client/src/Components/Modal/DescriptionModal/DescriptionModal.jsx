import React from "react";
import { useSelector } from "react-redux";
import "./DescriptionModal.scss";

const DescriptionModal = ({ closeModal }) => {
  const selectedCard = useSelector((state) => state.data.selectedCard);
  if (!selectedCard) return null;
  const { name, desc, statu, img,price } = selectedCard;
  return (
    <div className="total-description-modal-wrapper" onClick={closeModal}>
      {selectedCard && (
        <div
          className="description-modal-wrapp"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <h1 className="title">{name}</h1>
          <p className="price">From £{price}</p>
          <div className="flex-wrapp">
            <div className="image-wrapp">
              <img className="description-image" src={img} alt={name} />
            </div>
            <div className="description">{desc}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DescriptionModal;
