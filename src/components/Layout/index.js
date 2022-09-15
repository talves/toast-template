import { h } from "preact";
import { Box } from "../Box.js";
import { Helmet } from "react-helmet";
import Header from "./header.js";
import Main from "./main.js";
import Footer from "./footer.js";
// import SEO from "../seo/index.js";
import { useSiteData } from "../../site-data-provider.js";

export const FlexLayout = (props) => (
  <Box as="div" {...props}>
    {props.children}
  </Box>
);

export default ({ children, ...props }) => {
  const data = useSiteData();

  return (
    <FlexLayout>
      <Helmet>
        <html lang="en" />
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
      <Header header={props.header} data={data?.navigation}/>
      <Main {...props}>{children}</Main>
      <Footer data={data?.navigation?.footer} />
    </FlexLayout>
  );
};

export { Main, Header, Footer };