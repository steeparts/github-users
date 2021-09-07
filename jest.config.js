const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      babelConfig: {
        comments: false,
        plugins: ['@babel/plugin-transform-modules-commonjs'],
      },
    },
  },
  roots: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/src/',
  }),
  collectCoverageFrom: [
    'src/**/*.{js,ts}',
    '!src/**/{index,constants,types}.{js,ts}',
  ],
  coverageDirectory: 'coverage',
};
