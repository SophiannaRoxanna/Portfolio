import styled from "styled-components";

export const EditButton = styled.button`
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
