// @typescript-eslint/no-explicit-any
import 'dotenv/config';
import http, { Server } from 'http';
import app from './app';

const port: number | boolean | string = normalizePort(process.env.SERVER_PORT || '3000');

app.set('port', port);
const server: Server = http.createServer(app);
server.listen(port);

/**
 * Normalize a port into a number, string, or false.
 * @param {string|number} val
 *
 * @returns {number|boolean}
 */
function normalizePort(val: string): number | boolean | string {
  const norPort: number = parseInt(val, 10);

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
