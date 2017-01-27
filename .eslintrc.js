module.exports = {
  "extends": "eslint:recommended",
  "installedESLint": true,
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
      "modules": true
    }
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "indent": [
      "error",
      2
    ],
  },
  "env": {
    "browser": true
  },
  "globals": {
    "module": false,
    "__dirname": false
  }
};
