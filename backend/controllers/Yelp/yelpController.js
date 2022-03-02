const yelpBusinesses = {
  post: (req, res) => {
    // console.log("Insert Code Here to get businesses");
    ("use strict");

    const yelp = require("yelp-fusion");

    // Place holder for Yelp Fusion's API Key. Grab them
    // from https://www.yelp.com/developers/v3/manage_app
    const apiKey =
      "Jk6OGhKusZG5Qn6aoEVDIYfXwVAD83DYG0bekF3uGPqqyhLYyVhZjTQIIpWQlMR6dr0p4FEFk05SgQzMci2IU-6e1khz6ONpKgrbdmv-7oR9O2XMzbDlhC6qR1cBYnYx";

    const body = req.body;
    const location = body.location;
    const searchRequest = {};
    if (Array.isArray(location)) {
      searchRequest.term = body.term;
      searchRequest.latitude = body.location[1];
      searchRequest.longitude = body.location[0];
      searchRequest.limit = body.limit;
      searchRequest.radius = body.radius;
    } else {
      searchRequest.term = body.term;
      searchRequest.location = body.location;
      searchRequest.limit = body.limit;
      searchRequest.radius = body.radius;
    }

    const client = yelp.client(apiKey);

    client
      .search(searchRequest)
      .then((response) => {
        const results = response.jsonBody.businesses;
        res.send(results).status(200);
      })
      .catch((e) => {
        res.send("There was an issue retrieving coffee shops").status(400);
      });
  },
};

const yelpReviews = {
  post: (req, res) => {
    const body = req.body.all_data;
    let business = body.alias;
    ("use strict");

    const yelp = require("yelp-fusion");
    const client = yelp.client(
      "Jk6OGhKusZG5Qn6aoEVDIYfXwVAD83DYG0bekF3uGPqqyhLYyVhZjTQIIpWQlMR6dr0p4FEFk05SgQzMci2IU-6e1khz6ONpKgrbdmv-7oR9O2XMzbDlhC6qR1cBYnYx"
    );

    client
      .reviews(business)
      .then((response) => {
        let reviews = response.jsonBody.reviews;
        // console.log(response.jsonBody.reviews);
        res.send(reviews).status(200);
      })
      .catch((e) => {
        console.log(e);
        res.send("There was an issue retrieving business reivews").status(400);
      });
  },
};

const yelpDetails = {
  post: (req, res) => {
    const body = req.body.all_data;
    console.log(body);
    let business = body.alias;
    // console.log("Insert Code Here to get details");
    ("use strict");

    const yelp = require("yelp-fusion");
    const client = yelp.client(
      "Jk6OGhKusZG5Qn6aoEVDIYfXwVAD83DYG0bekF3uGPqqyhLYyVhZjTQIIpWQlMR6dr0p4FEFk05SgQzMci2IU-6e1khz6ONpKgrbdmv-7oR9O2XMzbDlhC6qR1cBYnYx"
    );

    client
      .business(business)
      .then((response) => {
        let details = response.jsonBody;
        // console.log(response.jsonBody.name);
        res.send(details).status(200);
      })
      .catch((e) => {
        res.send("There was an issue retrieving business details").status(400);
      });
  },
};
// Yelp similar api endpoint is not working
//need to fix this
const yelpSimilar = {
  get: (req, res) => {
    // console.log("Insert Code Here to get similar");
    ("use strict");

    const yelp = require("yelp-fusion");
    const client = yelp.client(
      "Jk6OGhKusZG5Qn6aoEVDIYfXwVAD83DYG0bekF3uGPqqyhLYyVhZjTQIIpWQlMR6dr0p4FEFk05SgQzMci2IU-6e1khz6ONpKgrbdmv-7oR9O2XMzbDlhC6qR1cBYnYx"
    );

    client
      .businessMatch({
        name: "Pannikin Coffee & Tea",
        address1: "510 N Coast Hwy 101",
        address2: "Encinitas, CA 92024",
        city: "Encinitas",
        state: "CA",
        country: "US",
      })
      .then((response) => {
        // console.log(response.jsonBody.businesses[0].id);
      })
      .catch((e) => {
        console.log(e);
      });
  },
};

const yelpAutoComplete = {
  get: (req, res) => {
    // console.log("Insert Code Here to get similar");
    ("use strict");

    const yelp = require("yelp-fusion");
    const client = yelp.client(
      "Jk6OGhKusZG5Qn6aoEVDIYfXwVAD83DYG0bekF3uGPqqyhLYyVhZjTQIIpWQlMR6dr0p4FEFk05SgQzMci2IU-6e1khz6ONpKgrbdmv-7oR9O2XMzbDlhC6qR1cBYnYx"
    );

    client
      .autocomplete({
        text: "pasta",
      })
      .then((response) => {
        // console.log(response.jsonBody.terms[0].text);
      })
      .catch((e) => {
        console.log(e);
      });
  },
};

module.exports = {
  yelpBusinesses,
  yelpReviews,
  yelpDetails,
  yelpSimilar,
  yelpAutoComplete,
};
