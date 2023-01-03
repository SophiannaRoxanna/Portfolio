import styled from "styled-components";

export const H3 = styled.h3`
  font-size: ${(props) => props.fontSize || "24px"};
  font-family: ${(props) => props.fontFamily || "semi"}, sans-serif;
  color: ${(props) => props.color};

  @media (max-width: 600px) {
    font-size: ${(props) => props.smallSize || props.fontSize || "20px"};
  }
`;
