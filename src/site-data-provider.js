import { h, createContext } from "preact";
import { useContext, useReducer, useEffect } from "preact/hooks";

const SiteDataStateContext = createContext({});
const SiteDataDispatchContext = createContext();

const sitedataReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      const data = action.data || {};
      return {
        ...state,
        ...data,
      };
    default:
      throw new Error(
        `Unhandled action type: ${action.type} in sitedataReducer`
      );
  }
};

export const useSiteData = () => {
  const context = useContext(SiteDataStateContext);
  if (context === undefined) {
    throw new Error(
      `Context for useSiteData is missing.\nUse within <SiteDataProvider data={{ optional: { "not required" }}} url="/settings.json">`
    );
  }
  return context;
};

export const SiteDataProvider = ({ data, url, children }) => {
  const [state, updateContext] = useReducer(sitedataReducer, data || {});

  useEffect(() => {
    if (!data) return;
    if (typeof data === 'undefined') throw new Error(
      // this error should never be thrown, the previous return should catch it
      `SiteDataProvider is missing attribute property data.\nUse within <SiteDataProvider data={{}} url="/settings.json">`
    );
    updateContext({
      type: "UPDATE",
      data,
    });
  }, [data]);

  useEffect(() => {
    if (!url) return;
    fetch(url).then((response) => {
      response.json().then((data) => {
        updateContext({
          type: "UPDATE",
          data,
        });
      });
    });
  }, [url]);

  return (
    <SiteDataStateContext.Provider value={state}>
      <SiteDataDispatchContext.Provider value={updateContext}>
        {children}
      </SiteDataDispatchContext.Provider>
    </SiteDataStateContext.Provider>
  );
};
