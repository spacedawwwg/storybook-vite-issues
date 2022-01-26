module.exports = {
  verbose: true,
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  transform: {
    // '^.+\\.ts$': 'ts-jest',
    '^.+\\.ts$': 'esbuild-runner/jest',
    '^.+\\.vue$': '@vue/vue3-jest',
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.svg$': require.resolve('./jest/fileTransform.js'),
  },
  testMatch: ['**/*.unit.test.(ts|js)'],
  collectCoverage: true,
  collectCoverageFrom: ['**/*.vue'],
  testEnvironment: 'jsdom',
  snapshotSerializers: ['jest-serializer-vue'],
};
