/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const https = require('https');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync('./itemscout_local.key'),
  cert: fs.readFileSync('./itemscout_local.crt'),
};

const port = process.env.PORT || 3000;

app.prepare().then(() => {
  https
    .createServer(httpsOptions, (req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    })
    .listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on https://localhost:${port} or https://local.itemscout.io:${port}`);
    });
});
