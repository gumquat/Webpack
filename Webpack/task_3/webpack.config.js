const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // Set webpack mode to development
  entry: { // Entry points for your application
    header: './modules/header/header.js', // Entry point for header module
    body: './modules/body/body.js', // Entry point for body module
    footer: './modules/footer/footer.js', // Entry point for footer module
  },
  output: {
    filename: '[name].bundle.js', // Generates separate bundles for each entry point
    path: path.resolve(__dirname, 'public'), // Specifies the output directory
    devtoolModuleFilenameTemplate: 'webpack:///[resource-path]', // Added for better source map resolution
  },
  devtool: 'inline-source-map', // Enable inline source mapping
  module: {
    rules: [
      // Rule to handle CSS files
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // Rule to handle image files referenced in CSS
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // Convert images < 8kb to base64 strings
              name: 'images/[name].[ext]', // Output directory for images
            },
          },
          {
            loader: 'image-webpack-loader', // Optimize images
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
      // Rule to handle file loading (e.g., fonts)
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]', // Output directory for fonts
          },
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'), // Serve files from the public directory
    port: 8564, // Specify the port for the development server
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'My Application', // Set the title of the generated HTML file
      template: './src/index.html', // Specify the template HTML file
      inject: true, // Automatically inject bundle scripts into the HTML file
    }),
    new CleanWebpackPlugin(), // Add this line
  ],
  optimization: {
    runtimeChunk: 'single', // Extracts the runtime code into a separate chunk
    splitChunks: {
      chunks: 'all', // Enables code splitting for all chunks
      maxInitialRequests: Infinity, // Makes the bundle be normallized to reduce requests
      minSize: 0, // This rule is disabling minimum file size to use
      cacheGroups: {
        // Split vendor code from the application code
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
