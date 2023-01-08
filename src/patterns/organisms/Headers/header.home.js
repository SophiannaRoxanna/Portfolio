import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { HeaderButton } from "../../atoms/Buttons";
import { TextLink } from "../../atoms/Texts";

import navToggleLight from "../../../assets/images/menuLight.svg";
import navToggleDark from "../../../assets/images/menuDark.svg";
import moonIcon from "../../../assets/images/ios-moon.svg";
import sunIcon from "../../../assets/images/sunIcon.svg";
import logo from "../../../assets/images/logo.svg";
import darkLogo from "../../../assets/images/darkLogo.svg";

import { themeContext } from "../../../shared/store/contexts/context.theme";
import { drawerContext } from "../../../shared/store/contexts";
import { HeaderStyle, MenuToggle, ThemeToggle } from "./styles";

export const Header = () => {
  const { theme, toggleTheme, isDark } = useContext(themeContext);
  const { toggleDrawer } = useContext(drawerContext);

  return (
    <HeaderStyle
      // bg={theme.background}
      className="container sticky inset-0 mx-auto py-2 md:py-4 flex justify-between items-center"
    >
      {/* LOGO */}
      {!isDark ? (
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      ) : (
        <Link to="/">
          <img src={darkLogo} alt="" />
        </Link>
      )}

      <div className="flex items-center">
        <div className="hidden md:flex items-center ml-10">
          <Link to="/login" className="mr-10">
            <TextLink color={theme.primaryFont} fontSize="16px" p="9px 16px">
              Login
            </TextLink>
          </Link>
          <Link to="/login" className="mr-10">
            <TextLink color={theme.primaryFont} fontSize="16px" p="9px 16px">
              About
            </TextLink>
          </Link>
          <Link to="/skills" className="mr-10">
            <TextLink color={theme.primaryFont} fontSize="16px" p="9px 16px">
              Skills
            </TextLink>
          </Link>
          <Link to="/portfolio" className="mr-10">
            <TextLink color={theme.primaryFont} fontSize="16px" p="9px 16px">
              Portfolio
            </TextLink>
          </Link>
          <Link to="/work" className="mr-10">
            <TextLink color={theme.primaryFont} fontSize="16px" p="9px 16px">
              Work
            </TextLink>
          </Link>
          <Link to="/testimonials" className="mr-10">
            <TextLink color={theme.primaryFont} fontSize="16px" p="9px 16px">
              Testimonials
            </TextLink>
          </Link>
        </div>

        {/* Right Navbar */}
        <nav className="hidden md:flex justify-between items-center">
          <Link to="/register" className="">
            <HeaderButton.Dark p="12px 24px">Contact</HeaderButton.Dark>
          </Link>
          <ThemeToggle role="button" className="p-2 ml-5" onClick={toggleTheme}>
            <img src={isDark ? sunIcon : moonIcon} alt="" className="object-cover" />
          </ThemeToggle>
        </nav>
        {/* Mid Navbar */}
      </div>

      {/* Mobile Navbar */}
      <nav className="flex md:hidden  justify-between items-center">
        <ThemeToggle role="button" className="p-2" onClick={toggleTheme}>
          <img src={isDark ? sunIcon : moonIcon} alt="" className="object-cover" />
        </ThemeToggle>

        <MenuToggle role="button" className="p-2" onClick={toggleDrawer}>
          <img src={isDark ? navToggleLight : navToggleDark} alt="" className="object-cover" />
        </MenuToggle>
      </nav>
    </HeaderStyle>
  );
};
