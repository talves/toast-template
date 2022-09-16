import { h } from "preact";
import { Box } from "../components/Box.js";

export default (props) => (
  <Box>
    <Box as="div" class="h-20 items-center">
      <Box as="h1" class="text-center text-5xl mt-4 font-medium text-primary-900 dark:text-primary-700">Posts</Box>
    </Box>
    <div class="shadow sm:rounded-lg dark:bg-gray-200">
      <ul class="list-disc space-y-2">
        {props.posts &&
          props.posts
            .filter((t) => !t.meta.draft)
            .sort((a, b) => {
              return Date.parse(a.meta.date) < Date.parse(b.meta.date) ? 1 : -1;
            })
            .map(({ meta }, index) => (
              <li
                key={index}
                class="flex items-start shadow overflow-hidden border-b text-primary-800"
              >
                <div class="flex items-center">
                  <a class="p-4" href={meta.slug}>
                    <Box as="span" class="text-primary-700 text-lg font-medium">
                      {meta.title}
                    </Box>
                  </a>
                </div>
              </li>
            ))}
      </ul>
    </div>
  </Box>
);
