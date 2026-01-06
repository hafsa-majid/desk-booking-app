module.exports = {
  env: {
    node: true,
    es2022: true,
    jest: true, // <-- add this line
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // your custom rules
  },
};
