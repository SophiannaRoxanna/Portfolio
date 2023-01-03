import styled from "styled-components";

export const P = styled.p`
  font-size: ${(props) => props.fontSize || "1em"};
  font-family: ${(props) => props.fontFamily || "regular"}, sans-serif;
  color: ${(props) => props.color};

  @media (max-width: 600px) {
    font-size: ${(props) => props.smallSize || props.fontSize};
  }
`;
