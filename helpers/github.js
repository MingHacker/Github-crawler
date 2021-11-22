const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username, callback1, callback2) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com/users/' + username + '/repos',
    headers: {
      'User-Agent': 'request',
      Authorization: `token ${config.TOKEN}`,
    },
  };
  axios(options)
    .then((response) => {
      response.data.forEach((repo) => {
        let newRepo = {
          repo_id: repo.id,
          username: repo.owner.login,
          url: repo.html_url,
          forks: repo.forks,
          description: repo.description,
          full_name: repo.full_name,
        };
        callback1(newRepo);
      });
    })
    .then(() => {
      callback2();
    });
};

module.exports.getReposByUsername = getReposByUsername;
