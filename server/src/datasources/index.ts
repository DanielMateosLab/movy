import OMDbApi from "./OMDbApi";

const dataSources = () => ({
  omdbApi: new OMDbApi(),
});

export default dataSources;
