const http = require('http');

const HOST = 'localhost';
const PORT = 1245;
const app = http.createServer();

app.on('request', (_, res) => {
    const responseTxt = 'Hello ALX!';

    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', responseTxt.length);
    res.statusCode = 200;
    res.write(Buffer.from(responseTxt));
});
app.listen(PORT, HOST, () => {
    process.stdout.write(`Server listening at Port ${PORT}\n`);
});
module.exports = app;
