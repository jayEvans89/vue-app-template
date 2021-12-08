module.exports = {
  preset: 'ts-jest',
  globals: {},
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\js$': 'babel-jest'
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/*.ts', './src/**/*.vue'],
  coveragePathIgnorePatterns: [
    'node_modules',
    '.d.ts',
    '.mock.ts',
    'router'
  ],
  coverageThreshold: {
    global: {
      lines: 90
    }
  }
}
