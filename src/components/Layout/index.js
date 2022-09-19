import { h } from "preact";
import { Box } from "../Box.js";
import { Helmet } from "react-helmet";
import Header from "./header.js";
import Main from "./main.js";
import Footer from "./footer.js";
// import SEO from "../seo/index.js";
import { useSiteData } from "../../site-data-provider.js";
import SEO from "../seo/index.js";

// setup ThemeSwitcher for color theme dark/light mode
if (typeof window !== "undefined") {
  let theme = localStorage.getItem("color-theme");
  if (theme === null || !["dark", "light"].includes(theme)) {
    console.log(`checking system pref`);
    const systemSetToDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    theme = systemSetToDark ? "dark" : "light";
  }
  if (["dark", "light"].includes(theme)) {
    document.documentElement.classList.remove(theme === "dark" ? "light" : "dark");
      document.documentElement.classList.add(theme);
  } else {
    document.documentElement.classList.remove("light");
  }
}

export const FlexLayout = (props) => {
  return (
    <Box as="div" class="min-h-screen bg-gray-100 dark:bg-primary-900" {...props}>
      {props.children}
    </Box>
  );
};

export default ({ children, ...props }) => {
  const data = useSiteData();

  return (
    <FlexLayout>
      <Helmet>
        <html lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#718096" />
        <meta name="theme-color" content="#718096"></meta>
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Helmet>
      <SEO pageMeta={props?.meta} />
      <Header header={props.header} data={data?.navigation} />
      <Main {...props}>{children}</Main>
      <Footer data={data?.navigation?.footer} />
    </FlexLayout>
  );
};

export { Main, Header, Footer };
