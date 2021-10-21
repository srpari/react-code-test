import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import "./Modal.css";
import {
  StyledContainer,
  LocationName,
  LocationProp,
  StylePropContent,
  StyleIconImg,
  StyleLabel,
  Description,
} from "./Card";

const Modal = ({ title, users, date, description, views, onClose, show }) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  }, []);

  return ReactDOM.createPortal(
    <CSSTransition in={show} unmountOnExit timeout={{ enter: 0, exit: 300 }}>
      <div className="modal" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <LocationName>{title}</LocationName>
            <img
              className="modal-close"
              style={{ width: "20px" }}
              src="close.svg"
              alt="Close Icon"
              onClick={onClose}
            />
          </div>
          <div className="modal-body">
            <StyledContainer>
              <LocationProp>
                <StyleIconImg src="users.svg" />
                <StylePropContent>
                  {users}
                  {" Users"}
                </StylePropContent>
              </LocationProp>
              <LocationProp>
                <StyleIconImg src="timezone.svg" />
                <StylePropContent>{date}</StylePropContent>
              </LocationProp>
              <LocationProp>
                <StyleIconImg src="views.svg" />
                <StylePropContent>
                  {views}
                  {" Views"}
                </StylePropContent>
              </LocationProp>
              <LocationProp>
                <StyleLabel>{"Description"}</StyleLabel>
              </LocationProp>
              <LocationProp>
                <Description>{description}</Description>
              </LocationProp>
            </StyledContainer>
          </div>
          <div className="modal-footer">
            <button onClick={onClose} className="modal-button">
              Done
            </button>
          </div>
        </div>
      </div>
    </CSSTransition>,
    document.getElementById("root")
  );
};

export default Modal;
