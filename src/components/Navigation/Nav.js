import { h } from "preact";
import { Box } from "../Box.js";
export default function Nav({ children }) {
  return (
    <Box
      as="ul"
      class="bg-primary-100 outline outline-2 md:outline-0 outline-gray-600 p-4 mt-4 bg-gray-50 md:flex md:flex-row md:items-center md:w-auto md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
    >
      {children}
    </Box>
  );
}
