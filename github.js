const { graphql } = require("@octokit/graphql");

const graphqlWithAuth = graphql.defaults({
    headers: {
        authorization: `token ${process.env.GITHUB_TOKEN}`
    }
});

module.exports = graphqlWithAuth