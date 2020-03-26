module.exports = {
  "env": {
    "browser": true,
    "es6": true,
  },
  "extends": [
    "plugin:react/recommended",
    "prettier",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": [
      "error", {
        singleQuote: true,
        semi: false,
        printWidth: 100,
        trailingComma: "all",
        tabWidth: 2,
        jsxBracketSameLine: true
      }
    ],
    "react/prop-types": 0,
    "eqeqeq": [
      "error",
      "always",
      {
        null: "ignore"
      }
    ],
    // 类和接口的命名必须遵守帕斯卡命名法，比如 PersianCat
    "@typescript-eslint/class-name-casing": "error",
  },
}

