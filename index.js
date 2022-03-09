const server = require('./api/server'); // require your server and launch it

const port = 4000;

server.listen(port, () => {
    console.log( ` server is running on port ${port}`)
})