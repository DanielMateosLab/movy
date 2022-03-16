import OMDbApi from "./OMDbApi";

export const dataSources = () => ({
  omdbApi: new OMDbApi(),
});
