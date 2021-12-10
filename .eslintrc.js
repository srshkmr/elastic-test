module.exports = {
    "env": {
      "node": true,
      "commonjs": true,
  },
  "extends": "eslint:recommended",
      "globals": {
          "Atomics": "readonly",
          "SharedArrayBuffer": "readonly"
      },
      "parserOptions": {
          "ecmaVersion": 2018,
          "sourceType": "module"
      },
      "rules": {
        "object-literal-sort-keys": 0,
        "curly": 1,
        "linebreak-style": [
          "error",
          "unix"
        ],
        "semi": [
          "error",
          "always"
        ],
        "no-trailing-spaces": "error",
        "eqeqeq": ["error", "smart"],
        "no-unused-vars": "error",
        "quotes": ["error", "single"],
        "no-var": "error",
        "eol-last": ["error", "always"],
        "comma-spacing": [2, {"before": false, "after": true}],
        "space-infix-ops": ["error", {"int32Hint": false}],
        "func-style": ["error", "declaration", { "allowArrowFunctions": true }],
        "arrow-spacing": ["error", { "before": true, "after": true }],
        "no-unused-expressions": "error",
        "no-process-env": 0,
        "no-useless-call": "error",
        "indent": ["error", 2],
        "key-spacing": ["error", {
          "beforeColon": false
        }],
        "no-mixed-spaces-and-tabs": "error"
      }
  }
  