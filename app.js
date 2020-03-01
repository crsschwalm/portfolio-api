const serverless = require('serverless-http');
const express = require('express');
const cors = require('cors')
const app = express();
const githubClient = require('./github')

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/api/info', (req, res) => {
    res.send({ application: 'sample-app', version: '1' });
});

app.post('/api/github', async (req, res) => {
    const { query } = req.body
    try {
        const message = await githubClient(query)
        res.send(message);
    } catch (err) {
        res.status(400).send({ message: err, triedQuery: query })
    }
});

//app.listen(3000, () => console.log(`Listening on: 3000`));
module.exports.handler = serverless(app);