import styled from "styled-components";

export const H5 = styled.h5`
  font-size: ${(props) => props.fontSize || "16px"};
  font-family: ${(props) => props.fontFamily || "semi"}, sans-serif;
  color: ${(props) => props.color};
`;
