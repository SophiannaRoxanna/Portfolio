import styled from "styled-components";

export const BigP = styled.p`
  font-size: ${(props) => props.fontSize || "54px"};
  font-family: ${(props) => props.fontFamily || "medium"}, sans-serif;
  color: ${(props) => props.color};

  @media (max-width: 600px) {
    font-size: ${(props) => props.smallSize || "36px"};
  }
`;
