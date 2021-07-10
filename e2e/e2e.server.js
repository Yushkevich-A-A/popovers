const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack.common');

const server = new WebpackDevServer(webpack(config), {});
server.listen(9000, 'localhost', (err) => {
  if (err) {
    return;
  }
  if (procedd.send) {
    process.send('ok');
  }
});