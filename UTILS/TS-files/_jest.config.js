module.exports = {
  preset: 'jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageReporters: ["text", "lcov"],
  coverageDirectory: "coverage"
};