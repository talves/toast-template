import {
  sourceMdx,
  fetchMdxFromDisk as fetchFilesFromDisk,
} from "@toastdotdev/mdx";

/* parses out the object into a data return object for all files */
const getFilesObject = (files) => {
  const data = {};
  files.forEach((file) => {
    const dirArr = file.filename.split("/");
    const name = dirArr
      .slice(dirArr.length - 1)[0]
      .split(".")
      .slice(0, -1)
      .join(".");
    data[name] =
      typeof file.file === "string" ? JSON.parse(file.file) : file.file;
  });
  return data;
};

export const sourceData = async ({ setDataForSlug }) => {
  /* gets the settings data from disk and writes out the json file to static path */
  const settingsFiles = await fetchFilesFromDisk({
    directory: "./data/settings",
    extensions: ["json"],
  });
  const settings = getFilesObject(settingsFiles);
  await setDataForSlug("/settings", { data: { ...settings } });

  /* gets mdx content and sets the slug for the content */
  await sourceMdx({
    setDataForSlug,
    directory: "./content",
    slugPrefix: "/",
  });
  return;
};
