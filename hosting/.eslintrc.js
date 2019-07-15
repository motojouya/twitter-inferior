module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
  ],
  "plugins": [
    "@typescript-eslint",
    "prettier",
  ],
  "env": {
    "es6": true,
    "browser": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "tsconfigRootDir": ".",
    "sourceType": "module",
    "project": "./tsconfig.json",
    "ecmaFeatures": {
      "jsx": true,
    },
    "project": "./tsconfig.json",
  },
  "rules": {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "node/no-missing-import": "error",
    "prettier/prettier": "error",
    "no-console": "error",
    "@typescript-eslint/tslint/config": [
      "warn",
      {
        "lintFile": "./tslint.json"
      },
    ],
  },
  "settings": {
    "node": {
      "tryExtensions": [
        ".tsx",
        ".ts",
        ".js",
        ".json",
        ".node",
      ]
    }
  },
}
