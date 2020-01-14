const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  module: {
    rules: [

      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },

      //Loading Images
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        use: [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'images',
                name: '[name]-[sha1:hash:7].[ext]'
              }
            }
          ]
      },

      //Loading Fonts
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[name].[ext]'
            }
          }
        ]
      },

      //Loading CSS
      {
        test: /\.css$/,
        use:[ MiniCssExtractPlugin.loader,'css-loader' ]
      },

      //Loading SASS/SCSS
      {
        test: /\.(s[ca]ss)$/,
        use:[ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello Word',
      buildTime: new Date().toString(),
      template: 'public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'main-[hash:8].css'
    })
  ],
  devServer: {
    open: true,
  }
};