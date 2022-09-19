import { h } from "preact";
import { Helmet } from "react-helmet";
import { Box } from "./Box.js";

export const Example = (props) => {
  const { header } = props;
  // console.log(`${JSON.stringify(header, null, 2)}`);

  return (
    <div class="flex flex-col items-center justify-center py-2 min-h-screen pb-56">
      <Helmet>
        <title>{`Web - ${header?.title}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <div class="mx-auto h-4/5 w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <h1 class="mx-auto max-w-5xl text-center text-6xl font-extrabold leading-[1.1] text-gray-800 dark:text-gray-900 tracking-tighter text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          Example <br class="hidden lg:block" />
          <span class="inline-block bg-gradient-to-r from-brandblue to-brandred bg-clip-text text-transparent">
            {header?.title}
          </span>
        </h1>
        <div class="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
          <Box class="rounded-md">
            <Box as="a" href="https://toast.dev" target="_blank" aria-label="Go to test site. New Tab.">
              <Box class="flex w-full items-center justify-center rounded-md border border-transparent px-8 py-3 font-medium text-white no-underline bg-gray-300 hover:bg-gray-500 dark:bg-gray-800 dark:text-gray-500 dark:hover:text-gray-800 dark:hover:bg-gray-500 md:py-3 md:px-10 md:text-2xl md:leading-6">
                Toast Site
                <span class="ml-2 bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent">
                  →
                </span>
              </Box>
            </Box>
          </Box>
        </div>
      </div>
    </div>
  );
};
