import process from 'process';
import webpack from 'webpack';
import webpackDevServer from 'webpack-dev-server';
import portfinder from 'portfinder';
import chalk from 'chalk';
import ora from 'ora';
import config from '../config/webpack.dev';
import { clearConsole, openBrowser } from './util';

const isInteractive = process.stdout.isTTY;

process.env.NODE_ENV = 'development';

let spinner = new ora();
spinner.start('start server\n');

let serverConfig: webpackDevServer.Configuration = {
  clientLogLevel: 'warning',
  compress: true,
  historyApiFallback: true,
  inline: true,
  open: true,
  overlay: true,
  port: 8080,
  host: 'localhost',
  quiet: true,
  ...config.devServer,
};

portfinder
  .getPortPromise({ port: serverConfig.port, host: serverConfig.host })
  .then((port: number) => {
    let url = `http://${serverConfig.host}:${port}`;
    let compiler = webpack(config);

    // "invalid" event fires when you have changed a file, and Webpack is
    // recompiling a bundle. WebpackDevServer takes care to pause serving the
    // bundle, so if you refresh, it'll wait instead of serving the old one.
    // "invalid" is short for "bundle invalidated", it doesn't imply any errors.
    compiler.hooks.invalid.tap('invalid', () => {
      if (isInteractive) {
        clearConsole();
      }
      console.log('Compiling...');
    });

    // "done" event fires when Webpack has finished recompiling the bundle.
    // Whether or not you have warnings or errors, you will get this event.
    compiler.hooks.done.tap('done', (stats) => {
      if (isInteractive) {
        clearConsole();
      }
      let message = stats.toString({
        colors: true,
        modules: false,
        children: true,
        chunks: false,
        chunkModules: false,
      });
      if (stats.hasErrors()) {
        console.log(chalk.red(message) + '\n\n');
        return;
      }
      if (stats.hasWarnings()) {
        console.log(chalk.yellow(message) + '\n\n');
      }
      console.log(chalk.green(`application is running here:`, url));
    });
    let server = new webpackDevServer(compiler, serverConfig);

    server.listen(port, serverConfig.host, (err) => {
      spinner.stop();
      if (err) {
        process.stdout.write(JSON.stringify(err));
        process.exit(1);
      }
      if (isInteractive) {
        clearConsole();
      }
      openBrowser(url);
    });
  })
  .catch((err) => {
    process.stdout.write(JSON.stringify(err));
    process.exit(1);
  });
