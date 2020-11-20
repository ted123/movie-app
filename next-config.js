// next.config.js

module.exports = {
    webpack: config => {
      config.module.rules.push(
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              outputPath: 'static/webfonts/',
              publicPath: '../webfonts/',
            },
          ],
        },
        // ...
      );
      return config;
    },
    // ...
  };