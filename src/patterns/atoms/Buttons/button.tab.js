import styled from "styled-components";

export const TabButton = styled.button`
  width: ${(props) => props.w};
  background: ${(props) => props.bg || "#F5F4FA"};
  color: ${(props) => props.color || "#442ED0"};
  color: ${(props) => props.disabled && "#CCCCCC"};
  background: ${(props) => props.disabled && "#1E202A"};
  font-size: ${(props) => props.fontSize || "16px"};
  font-family: ${(props) => props.fontFamily || "medium"}, sans-serif;
  padding: ${(props) => props.p || "12px 24px"};
  transition: 0.3s ease;
  border-radius: 4px;

  @media (max-width: 600px) {
    width: ${(props) => props.smallW && props.smallW};
  }

  &:hover {
    color: ${(props) => props.hoverColor};
    background: ${(props) => props.hoverBg};
    background: ${(props) => props.disabled && "#1E202A"};
    cursor: ${(props) => props.disabled && "not-allowed"};
  }

  &:focus {
    border-color: #442ecf50;
    outline-color: #442ecf50;
  }
`;
