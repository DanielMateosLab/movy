import OMDbApi from "./OMDbApi";

export const dataSources = () => ({
  omdbApi: new OMDbApi(),
});

export type DataSources = ReturnType<typeof dataSources>;
