// Handling Static Assets from https://jestjs.io/docs/webpack

module.exports = {
  // Module file extensions for importing
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '\\.css$': 'custom-transformer',
  },
  setupFilesAfterEnv: [
    '@testing-library/react/cleanup-after-each',
    '@testing-library/jest-dom/extend-expect',
  ],
  injectGlobals: true,
  testEnvironment: 'node',
  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  // transform: {
  //   "^.+\\.tsx?$": "ts-jest"
  // },
  // transform: {
  //   '\\.js$': 'babel-jest',
  //   '\\.css$': 'custom-transformer',
  // },
  // transform: {
  //   '^.+\\.(js|jsx)$': 'babel-jest',
  // },
};
