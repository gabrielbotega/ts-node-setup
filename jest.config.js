module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"], // onde pega a coverage
  coverageDirectory: "coverage", // onde coloca a coverage
  testEnvironment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  }, //sempre que ver algum teste com essa extensão, usa o ts-jest pra compilar
};
