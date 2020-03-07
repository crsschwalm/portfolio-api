const http = require('axios').default
const udemyUrl = 'https://www.udemy.com/api-2.0'

const udemyClient = (params = {}) => http.get(udemyUrl, {
    params, auth: {
        username: process.env.UDEMY_USER,
        password: process.env.UDEMY_PASS
    },
})

module.exports = udemyClient