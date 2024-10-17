/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: "ts-jest/presets/default-esm",
  testEnvironment: "node",
  extensionsToTreatAsEsm: [".mts", ".ts"],
  moduleFileExtensions: ["ts", "mts", "mjs", "js"],
  transformIgnorePatterns: ["node_modules/", "dist/"],
  testRegex: ["(/__tests__/.*\\.(test|spec))\\.[jt]sx?$", "(/__tests__/.*\\.(test|spec))\\.m[j|t]s$"],
};
