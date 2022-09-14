import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Helmet } from "react-helmet";
import { Box } from "./Box.js";

export const Example = (props) => {
  const { header } = props;
// console.log(`${JSON.stringify(header, null, 2)}`);
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Helmet>
        <title>{`Web - ${header?.title}`}</title>
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <h1 className="mx-auto max-w-5xl text-center text-6xl font-extrabold leading-[1.1] tracking-tighter text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          Example <br className="hidden lg:block" />
          <span className="inline-block bg-gradient-to-r from-brandblue to-brandred bg-clip-text text-transparent">
          {header?.title}
          </span>
        </h1>
        <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
          <Box as="button" value="Toast Repo" />
        </div>
      </main>
    </div>
  );
};
