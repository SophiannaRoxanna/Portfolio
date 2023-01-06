import styled from "styled-components";

export const DashboardHeaderStyle = styled.header`
  // width: 100vw;
  max-width: 100vw;
  // padding-right: 20px;
  // padding-left: 20px;
  // padding-left: 138px;
  // padding-right: 138px;
  z-index: 999;

  @media (max-width: 1000px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  background: ${(props) => props.bg};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
`;

export const HeaderStyle = styled.header`
  // width: 100vw;
  max-width: 100vw;
  padding-right: 20px;
  padding-left: 20px;
  // padding-left: 138px;
  // padding-right: 138px;
  z-index: 999;

  @media (max-width: 1000px) {
    padding-left: 24px;
    padding-right: 24px;
  }
  background: ${(props) => props.bg};
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
`;

export const ThemeToggle = styled.button`
  img {
    width: 25px;
    height: 27px;
  }

  &:focus {
    border-color: #442ecf50;
    outline-color: #442ecf50;
    background: #442ecf10;
  }
`;

export const MenuToggle = styled.button`
  img {
    width: 25px;
    height: 40px;
  }

  &:focus {
    border-color: #442ecf50;
    outline-color: #442ecf50;
    background: #442ecf10;
  }
`;
