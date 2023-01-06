import styled from "styled-components";

export const PrimaryButton = styled.button`
  width: ${(props) => props.w};
  background: ${(props) => props.bg || "#442ECF"};
  color: ${(props) => props.color || "#F5F4FA"};
  color: ${(props) => props.disabled && "#B4B0D1"};
  background: ${(props) => props.disabled && "#F5F4FA"};
  font-size: ${(props) => props.fontSize || "14px"};
  font-family: ${(props) => props.fontFamily || "semi"}, sans-serif;
  padding: ${(props) => props.p || "14px 24px"};
  transition: 0.3s ease;
  border-radius: 3px;

  @media (max-width: 600px) {
    width: ${(props) => props.smallW && props.smallW};
    font-size: ${(props) => props.smallSize || "14px"};
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

PrimaryButton.White = styled.button`
  width: ${(props) => props.w};
  background: ${(props) => props.bg || "#ffffff"};
  color: ${(props) => props.color || "#442ED0"};
  color: ${(props) => props.disabled && "#B4B0D1"};
  background: ${(props) => props.disabled && "#F5F4FA"};
  font-size: ${(props) => props.fontSize || "14px"};
  font-family: ${(props) => props.fontFamily || "semi"}, sans-serif;
  padding: ${(props) => props.p || "14px 24px"};
  transition: 0.3s ease;
  border-radius: 3px;

  &:hover {
    background: ${(props) => props.hoverBg || "#eeeeee"};
    background: ${(props) => props.disabled && "#F5F4FA"};
    cursor: ${(props) => props.disabled && "not-allowed"};
  }

  &:focus {
    border-color: #ffffff50;
    outline-color: #ffffff50;
  }
`;

PrimaryButton.Light = styled.button`
  width: ${(props) => props.w};
  background: ${(props) => props.bg || "#442ECF25"};
  color: ${(props) => props.color || "#442ECF"};
  color: ${(props) => props.disabled && "#B4B0D1"};
  background: ${(props) => props.disabled && "#F5F4FA"};
  font-size: ${(props) => props.fontSize || "14px"};
  font-family: ${(props) => props.fontFamily || "semi"}, sans-serif;
  padding: ${(props) => props.p || "14px 24px"};
  transition: 0.3s ease;
  border-radius: 3px;

  &:hover {
    background: ${(props) => props.hoverBg || "#442ECF50"};
    background: ${(props) => props.disabled && "#F5F4FA"};
    cursor: ${(props) => props.disabled && "not-allowed"};
  }

  &:focus {
    border-color: #ffffff50;
    outline-color: #ffffff50;
  }
`;

PrimaryButton.Danger = styled.button`
  width: ${(props) => props.w};
  background: ${(props) => props.bg || "#D7363625"};
  color: ${(props) => props.color || "#D73636"};
  color: ${(props) => props.disabled && "#B4B0D1"};
  background: ${(props) => props.disabled && "#F5F4FA"};
  font-size: ${(props) => props.fontSize || "14px"};
  font-family: ${(props) => props.fontFamily || "semi"}, sans-serif;
  padding: ${(props) => props.p || "14px 24px"};
  transition: 0.3s ease;
  border-radius: 3px;

  &:hover {
    background: ${(props) => props.hoverBg || "#D7363650"};
    background: ${(props) => props.disabled && "#F5F4FA"};
    cursor: ${(props) => props.disabled && "not-allowed"};
  }

  &:focus {
    border-color: #d7363610;
    outline-color: #d7363610;
  }
`;

PrimaryButton.Black = styled.button`
  width: ${(props) => props.w};
  background: ${(props) => props.bg || "#000000"};
  color: ${(props) => props.color || "#ffffff"};
  color: ${(props) => props.disabled && "#B4B0D1"};
  background: ${(props) => props.disabled && "#F5F4FA"};
  font-size: ${(props) => props.fontSize || "14px"};
  font-family: ${(props) => props.fontFamily || "semi"}, sans-serif;
  padding: ${(props) => props.p || "14px 24px"};
  border: ${(props) => props.border || "1px solid transparent"};
  transition: 0.3s ease;
  border-radius: 3px;

  @media (max-width: 600px) {
    width: ${(props) => props.smallW && props.smallW};
  }

  &:hover {
    background: ${(props) => props.hoverBg || "#ffffff"};
    color: ${(props) => props.color || "#000000"};
    background: ${(props) => props.disabled && "#F5F4FA"};
    cursor: ${(props) => props.disabled && "not-allowed"};
    border: ${(props) => props.border || "1px solid #000000"};
  }

  &:focus {
    border-color: #000000;
    outline-color: #000000;
  }
`;
