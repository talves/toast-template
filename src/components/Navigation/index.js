import { h } from "preact";
import { Box } from "../Box.js";
import Nav from "./Nav.js";
import NavItem from "./NavItem.js";

const Navigation = (props) => {
  const data = props.data;

  return (
    <Box class={`divide-y divide-gray-100 ${props.class}`}>
      <Nav>
        {data.menu &&
          data.menu &&
          data.menu.items &&
          data.menu.items
            .filter((k) => !k.hidden)
            .map((item, index) => {
              return (
                <NavItem key={index} href={item.path}>
                  {item.label}
                </NavItem>
              );
            })}
      </Nav>
      {props.children}
    </Box>
  );
};

export default Navigation;
