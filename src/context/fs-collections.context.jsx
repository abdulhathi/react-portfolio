import { createContext } from "react";

export const FSCollectionsContext = createContext({
  fsCollections: [],
  setFSCollections: () => null,
});
