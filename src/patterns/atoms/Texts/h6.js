import styled from "styled-components";

export const H6 = styled.h6`
  font-size: ${(props) => props.fontSize || "1em"};
  font-family: ${(props) => props.fontFamily || "semi"}, sans-serif;
  color: ${(props) => props.color};
`;
