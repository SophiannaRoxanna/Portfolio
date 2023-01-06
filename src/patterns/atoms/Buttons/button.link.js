import styled from "styled-components";

export const LinkButton = styled.button`
  background: ${(props) => props.bg || "#transparent"};
  color: ${(props) => props.color || "#442ECF"};
  color: ${(props) => props.disabled && "#B4B0D1"};
  font-size: ${(props) => props.fontSize || "14px"};
  font-family: ${(props) => props.fontFamily || "semi"}, sans-serif;
  padding: ${(props) => props.p || "10px 0"};
  // border: 1px solid #CECAE1;
  // border-radius: 3px;

  &:hover {
    color: ${(props) => props.hoverColor};
    color: ${(props) => props.disabled && "#B4B0D1"};
    cursor: ${(props) => props.disabled && "not-allowed"};
  }

  &:focus {
    // outline-color: #442ecf50;
    outline-color: ${(props) => (props.noOutline ? "transparent" : "#442ecf50")};
  }

  @media (max-width: 600px) {
    font-size: ${(props) => props.smallSize || "16px"};
  }
`;
