const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "teams",
      filename: "remoteEntry.js",
      exposes: {
        "./TeamsIndex": "./src/bootstrap.js",
      },
      shared: ["axios"],
    }),
  ],
};
