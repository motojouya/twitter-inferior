module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          {
            loader: "babel-loader"
          },
        ],
        exclude: /node_modules/
      }
    ]
  },
};
