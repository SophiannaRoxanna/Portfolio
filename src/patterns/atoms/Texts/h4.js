import styled from "styled-components";

export const H4 = styled.h4`
  font-size: ${(props) => props.fontSize || "20px"};
  font-family: ${(props) => props.fontFamily || "semi"}, sans-serif;
  color: ${(props) => props.color};

  @media (max-width: 600px) {
    font-size: ${(props) => props.smallSize || "18px"};
  }
`;
