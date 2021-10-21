import styled from "styled-components";

export const Header = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100%;
  background-color: var(--white);
`;

export const Nav = styled.div`
  width: 149px;
  height: 56px;
  margin-top: 19px;
  margin-left: 30px;
  display: flex;
`;

export const Group = styled.div`
  flex: 1;
  width: 149px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 100%;
`;

export const GreyLine = styled.div`
  width: 1920px;
  height: 1px;
  margin-top: 20px;
  background-color: var(--gallery);
`;

export const AllLocations = styled.div`
  color: var(--black-pearl);
  font-family: var(--font-family-lato);
  font-size: var(--font-size-l);
  font-weight: 700;
  font-style: normal;
  min-height: 28px;
  opacity: 0.3;
  letter-spacing: 0.18px;
  line-height: 28px;
  white-space: nowrap;
`;

export const AcmeLocations = styled.div`
  color: var(--black-pearl);
  font-family: var(--font-family-lato);
  font-size: var(--font-size-xxxl);
  font-weight: 700;
  font-style: normal;
  min-height: 28px;
  opacity: 0.8;
  letter-spacing: 0;
  line-height: 28px;
  white-space: nowrap;
`;
