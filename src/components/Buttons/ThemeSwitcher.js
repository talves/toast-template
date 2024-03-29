import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Box } from "../Box.js";

export const ThemeSwitcher = ({ as = "div", ...props }) => {
  const [toggleClass, setToggleClass] = useState(getStorageTheme());

  function setTheme(themeName) {
    if (typeof window !== "undefined") {
      // console.log(`setTheme: ${themeName}`);
      localStorage.setItem("color-theme", themeName);
      document.documentElement.classList.remove(
        themeName === "dark" ? "light" : "dark"
      );
      document.documentElement.classList.add(themeName);
    }
  }

  function getStorageTheme() {
    let theme = "light";
    if (typeof window !== "undefined") {
      theme = localStorage.getItem("color-theme");
    }
    if (theme === "" || theme === null) {
      // console.log(`checking system pref`)
      const systemSetToDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      theme = systemSetToDark ? "dark" : "light";

      setTheme(theme);
    }
    return theme;
  }

  const handleOnClick = () => {
    const theme = getStorageTheme();
    if (theme === "dark") {
      setToggleClass("light");
    } else {
      setToggleClass("dark");
    }
  };

  useEffect(() => {
    setTheme(toggleClass);
  }, [toggleClass]);

  return (
    <Box as={as} {...props}>
      <button
        id="theme-toggle"
        type="button"
        role="button"
        aria-label={`Color Theme Switcher${
          toggleClass === " click for light" ? "" : " click for dark"
        }`}
        onClick={handleOnClick}
        class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1"
      >
        <svg
          id="theme-toggle-dark-icon"
          class={`w-7 h-7 ${
            toggleClass === "dark" ? "" : "hidden"
          } fill-gray-600 dark:fill-gray-200`}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            class="fill-gray-800"
            d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
          ></path>
          <path
            d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
            class="fill-gray-200"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
            class="fill-primary-300"
          ></path>
        </svg>
        <svg
          id="theme-toggle-light-icon"
          class={`w-7 h-7 ${
            toggleClass === "dark" ? "hidden" : ""
          } fill-primary-600 dark:fill-gray-200`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            fill-rule="evenodd"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </Box>
  );
};
