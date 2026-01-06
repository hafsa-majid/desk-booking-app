/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    node: true, // For Node.js globals
    es2021: true, // Modern JS features
    jest: true, // Jest globals like test, expect
  },
  parserOptions: {
    ecmaVersion: "latest", // Support latest JS syntax
    sourceType: "script", // CommonJS modules
  },
  extends: [
    "eslint:recommended", // Recommended ESLint rules
  ],
  rules: {
    // Add any project-specific overrides here
    // For example:
    "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Ignore unused args starting with _
    semi: ["error", "always"], // Require semicolons
    quotes: ["error", "single"], // Use single quotes
  },
};
