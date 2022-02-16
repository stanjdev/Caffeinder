'use strict';

const yelp = require('yelp-fusion');

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey = 'Jk6OGhKusZG5Qn6aoEVDIYfXwVAD83DYG0bekF3uGPqqyhLYyVhZjTQIIpWQlMR6dr0p4FEFk05SgQzMci2IU-6e1khz6ONpKgrbdmv-7oR9O2XMzbDlhC6qR1cBYnYx';

const searchRequest = {
  term:'Coffee shops',
  location: 'san francisco, ca'
};

const client = yelp.client(apiKey);

client.search(searchRequest).then(response => {
  const firstResult = response.jsonBody.businesses[0];
  const prettyJson = JSON.stringify(firstResult, null, 4);
  console.log(prettyJson);
}).catch(e => {
  console.log(e);
});