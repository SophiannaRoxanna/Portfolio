import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { P } from "../../atoms/Texts";

const NavStyle = styled.nav`
  border-bottom: 2px solid #e9e9ed;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const CustomNavLink = styled(Link)`
  padding: 9px;
  color: #646a86;
  font-size: 16px;
  // margin-right: 40px;
  border-bottom: solid 2px transparent;
  positon: relative;

  &.active {
    font-weight: 600;
    // background: #442ed0;
    color: #442ed0;
    z-index: 2;
    border-bottom: solid 2px #442ed0;
  }
`;

const CustomNavBar = ({ tabs }) => {
  const pageLink = window.location.pathname;

  return (
    <NavStyle className="flex flex-no-wrap overflow-x-auto items-center">
      {tabs.map((tab, index) => (
        <CustomNavLink
          key={index}
          to={tab.path}
          className={`flex items-center ${pageLink === tab.path ? "active" : ""}`}
          data-testid="organization-link"
          activeClassName="active"
        >
          <div className="flex flex-grow">
            <P color="inherit" fontFamily="medium" className="mr-2 title">
              {tab.title}
            </P>
          </div>
        </CustomNavLink>
      ))}
    </NavStyle>
  );
};

export default CustomNavBar;
