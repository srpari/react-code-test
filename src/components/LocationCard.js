/*eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
// import styled from "styled-components";
import PropTypes from "prop-types";
import Modal from "./Modal";
import {
  Container,
  StyledContainer,
  LocationName,
  LocationProp,
  StylePropContent,
  StyleIconImg,
  StyledEditBtn,
} from "./Card";

const LocationCard = ({ name, users, date, description }) => {
  const [show, setShow] = useState(false);

  //   State to maintain views of each component
  const [viewCount, setViewCount] = useState(0);

  //  Converting ISODate to GMT TimeZone
  const [createdAt, setCreatedAt] = useState(
    new Date(date).toLocaleString("sv", {
      timeZoneName: "short",
    })
  );

  return (
    <Container>
      <StyledEditBtn>
        <img src="edit.svg" alt="edit" />
      </StyledEditBtn>
      <StyledContainer
        onClick={() => {
          setShow(true);
          setViewCount((prevCount) => prevCount + 1);
        }}
      >
        <LocationName>{name}</LocationName>
        <LocationProp>
          <StyleIconImg src="users.svg" />
          <StylePropContent>
            {users}
            {" Users"}
          </StylePropContent>
        </LocationProp>
        <LocationProp>
          <StyleIconImg src="timezone.svg" />
          <StylePropContent>{createdAt}</StylePropContent>
        </LocationProp>
        <LocationProp>
          <StyleIconImg src="views.svg" />
          <StylePropContent>
            {viewCount}
            {" Views"}
          </StylePropContent>
        </LocationProp>
      </StyledContainer>
      {/* Modal window to show the location properties */}
      <Modal
        title={name}
        users={users}
        date={date}
        description={description}
        views={viewCount}
        onClose={() => setShow(false)}
        show={show}
      />
    </Container>
  );
};

export default LocationCard;

LocationCard.propTypes = {
  name: PropTypes.string.isRequired,
  users: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
