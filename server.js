const http = require("http");
const emoji = require("node-emoji");

const server = http.createServer((request, response) => {
  response.write(`
  <html>
    <head>
      <meta charset="UTF-8"/>
    </head>
    <body>
      <h1>${ emoji.random().emoji }</h1>
    </body>
  </html>
  `);
  response.end();
});

server.listen(8001);