import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  testEnvironment: 'node',
  rootDir: 'src',
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 90,
      functions: 0,
      lines: 0,
    },
  },
  setupFiles: ['../jest.setup.ts'],
}

export default config
