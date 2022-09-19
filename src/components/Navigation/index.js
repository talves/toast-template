import { h } from "preact";
import { Box } from "../Box.js";
import Nav from "./Nav.js";
import NavItem from "./NavItem.js";
import { ThemeSwitcher } from "../Buttons/ThemeSwitcher.js";

const Navigation = (props) => {
  const { data, toggle } = props;
  return (
    <Box
      as="nav"
      id="navbar-default"
      class={`fixed top-12 bottom-0 ${
        toggle ? "right-0" : "-right-full"
      } w-52 md:w-auto md:static ${props.class} transition-all duration-300`}
    >
      <Nav>
        {data.menu &&
          data.menu &&
          data.menu.items &&
          data.menu.items
            .filter((k) => !k.hidden)
            .map((item, index) => {
              return (
                <NavItem key={index} href={item.path} isActive={JSON.stringify(location?.pathname===item.path)}>
                  {item.label}
                </NavItem>
              );
            })}
        <Box as="li"><ThemeSwitcher /></Box>
      </Nav>
      {props.children}
    </Box>
  );
};

export default Navigation;
