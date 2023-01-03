import styled from "styled-components";

export const H1 = styled.h1`
  font-size: ${(props) => props.fontSize || "36px"};
  font-family: ${(props) => props.fontFamily || "medium"}, sans-serif;
  color: ${(props) => props.color};

  @media (max-width: 600px) {
    font-size: ${(props) => props.smallSize || "27px"};
  }
`;
