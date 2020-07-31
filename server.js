require('dotenv').config();

const debug = require('debug')('server');
const http = require('http');
const app = require('./app');

// eslint-disable-next-line no-use-before-define
const port = normalizePort(process.env.SERVER_PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
server.listen(port);
// eslint-disable-next-line no-use-before-define
server.on('error', onError);
// eslint-disable-next-line no-use-before-define
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  const norPort = parseInt(val, 10);

  if (Number.isNaN(norPort)) {
    // named pipe
    return val;
  }

  if (norPort >= 0) {
    // port number
    return norPort;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      // eslint-disable-next-line no-console
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      // eslint-disable-next-line no-console
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on ${bind}`);
  // eslint-disable-next-line no-console
  console.log('Application started on port %d', port);
}
