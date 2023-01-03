import styled from "styled-components";

export const TextLink = styled.p`
  font-size: ${(props) => props.fontSize || "14px"};
  font-family: ${(props) => props.fontFamily || "regular"}, sans-serif;
  color: ${(props) => props.color};
`;
