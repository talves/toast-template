import { h } from "preact";
import { Box } from "../Box.js";

export default function NavItem({ href, isActive, children }) {
  return (
    <Box as="li">
      <Box
        as="a"
        href={href}
        aria-label={`${children}`}
        class={`block p-3 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${isActive ? "text-fire" : ""}`}
      >
        {children}
      </Box>
    </Box>
  );
}
