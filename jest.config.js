/**
 * Jest CLI configs
 */

module.exports = {
  moduleFileExtensions: ["js", "jsx"],
  moduleDirectories: ["node_modules"],
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy"
  },
  transform: {
    "^.+\\.js$": "babel-jest"
  }
};
