import styled from "styled-components";

export const OutlineButton = styled.button`
  background: ${(props) => props.bg || "#ffffff"};
  color: ${(props) => props.color || "#F5F4FA"};
  font-size: ${(props) => props.fontSize || "14px"};
  font-family: ${(props) => props.fontFamily || "semi"}, sans-serif;
  padding: ${(props) => props.p || "10px 20px"};
  color: ${(props) => props.disabled && "#B4B0D1"};
  background: ${(props) => props.disabled && "#F5F4FA"};
  width: ${(props) => props.w};
  border: 1px solid #cecae1;
  border-radius: 3px;

  @media (max-width: 600px) {
    width: ${(props) => props.smallW && props.smallW};
  }

  &:hover {
    color: ${(props) => props.hoverColor};
    background: ${(props) => props.hoverBg};
    background: ${(props) => props.disabled && "#F5F4FA"};
    cursor: ${(props) => props.disabled && "not-allowed"};
  }

  &:focus {
    border-color: #442ecf50;
    outline-color: #442ecf50;
  }
`;

OutlineButton.Dark = styled.button`
  width: ${(props) => props.w};
  background: ${(props) => props.bg || "#ffffff"};
  color: ${(props) => props.color || "#000000"};
  color: ${(props) => props.disabled && "#B4B0D1"};
  background: ${(props) => props.disabled && "#F5F4FA"};
  font-size: ${(props) => props.fontSize || "14px"};
  font-family: ${(props) => props.fontFamily || "semi"}, sans-serif;
  padding: ${(props) => props.p || "14px 24px"};
  border: 1px solid #cecae1;
  transition: 0.3s ease;
  border-radius: 3px;

  @media (max-width: 600px) {
    width: ${(props) => props.smallW && props.smallW};
  }

  &:hover {
    background: ${(props) => props.hoverBg || "#000000"};
    color: ${(props) => props.hoverColor || "#ffffff"};
    background: ${(props) => props.disabled && "#F5F4FA"};
    cursor: ${(props) => props.disabled && "not-allowed"};
  }

  &:focus {
    border-color: #442ecf50;
    outline-color: #442ecf50;
  }
`;
