module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "standard",
    // 'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    quotes: "off",
    camelcase: "off",
    "comma-dangle": "off",
    semi: "off",
    "no-unused-vars": "off",
    "no-trailing-spaces": "off",
    "space-before-function-paren": "off",
  },
};
