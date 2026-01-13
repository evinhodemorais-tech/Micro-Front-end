const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = {
  mode: "development",

  entry: "./src/index.js",

  devServer: {
    port: 3002,
    historyApiFallback: true,
  },

  output: {
    publicPath: "auto",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

 module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      type: "javascript/auto", 
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            ["@babel/preset-react", { runtime: "automatic" }],
          ],
        },
      },
    },
  ],
},

  plugins: [
    new ModuleFederationPlugin({
      name: "pedido",
      filename: "remoteEntry.js",
      exposes: {
        "./Pedido": "./src/Pedido",
      },
      shared: {
        react: { singleton: true, requiredVersion: false },
        "react-dom": { singleton: true, requiredVersion: false },
      },
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
