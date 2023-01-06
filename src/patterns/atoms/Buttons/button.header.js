import styled from "styled-components";

export const HeaderButton = styled.button`
  background: ${(props) => props.bg || "#442ECF"};
  color: ${(props) => props.color || "#F5F4FA"};
  font-size: ${(props) => props.fontSize || "14px"};
  font-family: ${(props) => props.fontFamily || '"semi", sans-serif'};
  padding: ${(props) => props.p || "10px 24px"};
  border-radius: 3px;
  width: ${(props) => props.w};

  &:focus {
    border-color: #442ecf50;
    outline-color: #442ecf50;
  }
`;

HeaderButton.Dark = styled.button`
  background: ${(props) => props.bg || "#000000"};
  color: ${(props) => props.color || "#F5F4FA"};
  font-size: ${(props) => props.fontSize || "14px"};
  font-family: ${(props) => props.fontFamily || '"semi", sans-serif'};
  padding: ${(props) => props.p || "10px 24px"};
  border-radius: 3px;
  width: ${(props) => props.w};

  &:focus {
    border-color: #442ecf50;
    outline-color: #442ecf50;
  }
`;
