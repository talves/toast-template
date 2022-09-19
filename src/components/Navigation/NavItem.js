import { h } from "preact";
import { Box } from "../Box.js";

export default function NavItem({ href, isActive, children }) {
  console.log(children, isActive);
  return (
    <Box as="li" class={`${isActive === "true" ? "bg-gray-400 dark:bg-gray-600 md:dark:bg-gray-800 md:p-3" : ""}`}>
      <Box
        as={`${isActive === "true" ? "div" : "a"}`}
        href={href}
        aria-label={`${children}${isActive === "true" ? " is current page" : ""}`}
        class={`block p-3 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive === "true" ? "md:dark:bg-gray-800" : ""}`}
      >
        {children}
      </Box>
    </Box>
  );
}
