module.exports = {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    axios: "axios/dist/node/axios.cjs",
  },
  testEnvironment: "jsdom",
};
