const path = require('path');

module.exports = {
  mode: 'production', // Set webpack mode to production
  entry: './js/dashboard_main.js', // Entry point for your application
  output: {
    path: path.resolve(__dirname, 'public'), // Output directory
    filename: 'bundle.js', // Output filename
  },
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
    ],
  },
};
