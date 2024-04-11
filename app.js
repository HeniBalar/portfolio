const http = require('http');
require("dotenv").config();
const express = require("express");
require("./database").connect();
const UserRouter = require("./router");
const app = express();
app.use(express.json());
app.use(UserRouter)

app.get('/', (req, res) => {
    res.send('HELLO WORLD!!!')
})
app.get('/get', (req, res) => {
    res.send('Get User')
})

const server = http.createServer(app)
const port = process.env.PORT

server.listen(port, () => {
    console.log(`server port running  ${port}`);
})