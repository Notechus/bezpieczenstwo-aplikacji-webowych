process.env.TZ = 'UTC';

module.exports = {
  cacheDirectory: 'cache/jest',
  clearMocks: true,
  coveragePathIgnorePatterns: [
    '<rootDir>/cache/',
    '<rootDir>/__image_snapshots__/',
    '<rootDir>/dist/',
    '<rootDir>/node_modules/'
  ],
  testURL: 'http://localhost',
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.spec.json',
      stringifyContentPathRegex: '\\.html$',
      astTransformers: [
        'jest-preset-angular/build/InlineFilesTransformer',
        'jest-preset-angular/build/StripStylesTransformer'
      ]
    }
  },
  transform: {
    '^.+\\.(ts|js|html)$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', '.html'],
  preset: 'jest-preset-angular',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ],
  setupFilesAfterEnv: ['<rootDir>/jest-config/setup.ts'],
  moduleNameMapper: {
    '^@app/(.*)$': '<rootDir>/src/app/$1',
    '^@environments/(.*)$': '<rootDir>/src/environments/$1',
    '^@mocks/(.*)$': '<rootDir>/src/mocks/$1',
    '^@auth/(.*)$': '<rootDir>/src/app/auth/$1',
    '^@components/(.*)$': '<rootDir>/src/app/components/$1'
  },
  testPathIgnorePatterns: ['dist', '/node_modules/'],
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'json', 'text', 'lcov'],
  testMatch: [`<rootDir>/src/app/**/*.spec.ts`]
};
