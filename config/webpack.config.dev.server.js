/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

const webpack = require('webpack');
const Browsersync = require('browser-sync');
const cmd = require('node-cmd');
const webpackHotMiddleware = require('webpack-hot-middleware');
const connectHistoryApiFallback = require('connect-history-api-fallback');
const webpackDevMiddleware = require('webpack-dev-middleware');

const task = require('./task');
const webpackConfig = require('./../webpack.config')(process.env);

// Build the app and launch it in a browser for testing via Browsersync
module.exports = task(
  'webpack.config.dev.server',
  () =>
    new Promise(resolve => {
      let count = 0;

      const bs = Browsersync.create();
      const compiler = webpack(webpackConfig);
      const devMiddleware = webpackDevMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        hot: true,
      });

      compiler.plugin('done', () => {
        // Launch Browsersync after the initial bundling is complete
        count += 1;

        if (count === 1) {
          bs.watch('src/index.html').on('change', () => {
            cmd.get('gulp build', () => bs.reload());
          });

          bs.init(
            {
              port: Number(process.env.PORT) || 3000,
              ui: {
                port: Number(process.env.PORT || 3000) + 1,
              },
              server: {
                baseDir: 'build',
                middleware: [
                  devMiddleware,
                  webpackHotMiddleware(compiler),
                  connectHistoryApiFallback(),
                ],
              },
            },
            resolve,
          );
        } // if
      }); // compiler
    }), // promise
);
