import styled from "styled-components";

export const Container = styled.div`
  height: 143px;
  width: 342px;
  display: flex;
  flex-direction: row;
  padding: 0 27px;
  align-items: center;
  border: solid 1px var(--grey);
  border-radius: 2px;
  cursor: pointer;
  margin: 20px;
  padding: 20px;

  &:hover {
    background: var(--hover-fill);
  }
`;

export const StyledEditBtn = styled.div`
  position: relative;
  left: 280px;
  bottom: 50px;
  width: 14px;
  height: 14px;
  opacity: 0.3;
  display: none;
  ${Container}:hover & {
    display: block;
  }
`;

export const StyledContainer = styled.div`
  color: var(--black-pearl);
  font-family: var(--font-family-lato);
  font-size: var(--font-size-m);
  font-weight: 500;
  font-style: normal;
  width: 290px;
  height: 109px;
  display: flex;
  flex-direction: column;
`;

export const LocationName = styled.div`
  font-size: var(--font-size-xl);
  font-weight: 700;
  min-height: 32px;
  opacity: 0.8;
  letter-spacing: 0;
  line-height: 32px;
  white-space: nowrap;
`;

export const LocationProp = styled.div`
  height: 24px;
  display: flex;
  align-items: center;
  min-width: 290px;
`;

export const StylePropContent = styled.div`
  width: 268px;
  min-height: 24px;
  margin-left: 8px;
  opacity: 0.8;
  letter-spacing: 0;
  line-height: 24px;
  white-space: nowrap;
`;

export const StyleIconImg = styled.img`
  display: flex;
  align-items: flex-start;
  min-width: 14px;
  margin-right: 8px;
  width: 14px;
  height: 14px;
  opacity: 0.3;
`;

export const StyleLabel = styled.div`
  font-weight: 600;
  margin-top: 15px;
  padding: 20px 0;
  width: 390px;
`;

export const Description = styled.p`
  margin-top: 25px;
`;
