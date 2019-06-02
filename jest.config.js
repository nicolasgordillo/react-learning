module.exports = {
  moduleFileExtensions: ['js'],
  transform: {
    '^.+\\.(js|jsx)?$': 'babel-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/mocks/styleMock.js",
  }
};