module.exports = {
  "setupFiles": [`<rootDir>/jest.setup.js`],
  "testURL": `http://localhost/`,
  "verbose": true,
  "testRegex": `(/tests/.|(.|/)(test|spec)).(jsx?|tsx?)$`,
  "moduleFileExtensions": [`ts`, `tsx`, `js`, `jsx`, `json`, `node`],
  "moduleNameMapper": {
    "^@components(.*)": `<rootDir>/src/components/$1`,
    "^@reducer(.*)": `<rootDir>/src/reducer/$1`,
    "^@constants(.*)": `<rootDir>/src/constants`
  },
  "coveragePathIgnorePatterns": [`<rootDir>/test.setup.js`]
};
