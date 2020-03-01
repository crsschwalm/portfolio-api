const serverless = require('serverless-http');
const express = require('express');
const app = express();
const githubClient = require('./github')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/api/info', (req, res) => {
    res.send({ application: 'sample-app', version: '1' });
});

app.post('/api/github', async (req, res) => {
    try {
        const message = await githubClient(req.body)
        res.send(message);
    } catch (err) {
        res.send({ statusCode: 400, message: err })
    }
});

//app.listen(3000, () => console.log(`Listening on: 3000`));
module.exports.handler = serverless(app);