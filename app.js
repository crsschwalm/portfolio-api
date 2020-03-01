const serverless = require('serverless-http');
const express = require('express');
const app = express();

const fetchIt = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Promise done!');
    }, 200)
})


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/api/info', (req, res) => {
    res.send({ application: 'sample-app', version: '1' });
});

app.get('/api/async', async (req, res) => {
    const message = await fetchIt()
    res.send({ message });
});

app.post('/api/v1/getback', (req, res) => {
    res.send({ ...req.body });
});
//app.listen(3000, () => console.log(`Listening on: 3000`));
module.exports.handler = serverless(app);