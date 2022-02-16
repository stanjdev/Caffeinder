const yelpBusinesses = {
  get: (req, res) => {
    console.log('Insert Code Here to get businesses');
    'use strict';

    const yelp = require('yelp-fusion');

    // Place holder for Yelp Fusion's API Key. Grab them
    // from https://www.yelp.com/developers/v3/manage_app
    const apiKey = 'Jk6OGhKusZG5Qn6aoEVDIYfXwVAD83DYG0bekF3uGPqqyhLYyVhZjTQIIpWQlMR6dr0p4FEFk05SgQzMci2IU-6e1khz6ONpKgrbdmv-7oR9O2XMzbDlhC6qR1cBYnYx';

    const searchRequest = {
      term: 'Coffee shops',
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
  }
}

const yelpReviews = {
  get: (req, res) => {
    console.log('Insert Code Here to get reviews');
    'use strict';

    const yelp = require('yelp-fusion');
    const client = yelp.client('Jk6OGhKusZG5Qn6aoEVDIYfXwVAD83DYG0bekF3uGPqqyhLYyVhZjTQIIpWQlMR6dr0p4FEFk05SgQzMci2IU-6e1khz6ONpKgrbdmv-7oR9O2XMzbDlhC6qR1cBYnYx');

    client.reviews('gary-danko-san-francisco').then(response => {
      console.log(response.jsonBody.reviews[0].text);
    }).catch(e => {
      console.log(e);
    });
  }
}

const yelpDetails = {
  get: (req, res) => {
    console.log('Insert Code Here to get details');
    'use strict';

    const yelp = require('yelp-fusion');
    const client = yelp.client('Jk6OGhKusZG5Qn6aoEVDIYfXwVAD83DYG0bekF3uGPqqyhLYyVhZjTQIIpWQlMR6dr0p4FEFk05SgQzMci2IU-6e1khz6ONpKgrbdmv-7oR9O2XMzbDlhC6qR1cBYnYx');

    client.business('gary-danko-san-francisco').then(response => {
      console.log(response.jsonBody.name);
    }).catch(e => {
      console.log(e);
    });
  }
}
// Yelp similar api endpoint is not working
//need to fix this
const yelpSimilar = {
  get: (req, res) => {
    console.log('Insert Code Here to get similar');
    'use strict';

    const yelp = require('yelp-fusion');
    const client = yelp.client('Jk6OGhKusZG5Qn6aoEVDIYfXwVAD83DYG0bekF3uGPqqyhLYyVhZjTQIIpWQlMR6dr0p4FEFk05SgQzMci2IU-6e1khz6ONpKgrbdmv-7oR9O2XMzbDlhC6qR1cBYnYx');

    client.businessMatch({
      name: 'Pannikin Coffee & Tea',
      address1: '510 N Coast Hwy 101',
      address2: 'Encinitas, CA 92024',
      city: 'Encinitas',
      state: 'CA',
      country: 'US'
    }).then(response => {
      console.log(response.jsonBody.businesses[0].id);
    }).catch(e => {
      console.log(e);
    });
  }
}

const yelpAutoComplete = {
  get: (req, res) => {
    console.log('Insert Code Here to get similar');
    'use strict';

    const yelp = require('yelp-fusion');
    const client = yelp.client('Jk6OGhKusZG5Qn6aoEVDIYfXwVAD83DYG0bekF3uGPqqyhLYyVhZjTQIIpWQlMR6dr0p4FEFk05SgQzMci2IU-6e1khz6ONpKgrbdmv-7oR9O2XMzbDlhC6qR1cBYnYx');

    client.autocomplete({
      text: 'pasta'
    }).then(response => {
      console.log(response.jsonBody.terms[0].text);
    }).catch(e => {
      console.log(e);
    });
  }
}

module.exports = { yelpBusinesses, yelpReviews, yelpDetails, yelpSimilar, yelpAutoComplete };