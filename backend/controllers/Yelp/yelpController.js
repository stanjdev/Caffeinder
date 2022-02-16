const yelpBusinesses = {
  get: (req, res) => {
<<<<<<< HEAD
    console.log("Insert Code Here to get businesses");
    ("use strict");

    const yelp = require("yelp-fusion");

    // Place holder for Yelp Fusion's API Key. Grab them
    // from https://www.yelp.com/developers/v3/manage_app
    const apiKey =
      "Jk6OGhKusZG5Qn6aoEVDIYfXwVAD83DYG0bekF3uGPqqyhLYyVhZjTQIIpWQlMR6dr0p4FEFk05SgQzMci2IU-6e1khz6ONpKgrbdmv-7oR9O2XMzbDlhC6qR1cBYnYx";

    const searchRequest = {
      term: "Coffee shops",
      location: "san francisco, ca",
    };

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
=======
    console.log("Insert Code Here");
>>>>>>> omar-firebase-integration
  },
};

const yelpReviews = {
  get: (req, res) => {
<<<<<<< HEAD
    const body = req.body;
    let business = body.alias;
    console.log("Insert Code Here to get reviews");
    ("use strict");

    const yelp = require("yelp-fusion");
    const client = yelp.client(
      "Jk6OGhKusZG5Qn6aoEVDIYfXwVAD83DYG0bekF3uGPqqyhLYyVhZjTQIIpWQlMR6dr0p4FEFk05SgQzMci2IU-6e1khz6ONpKgrbdmv-7oR9O2XMzbDlhC6qR1cBYnYx"
    );

    client
      .reviews(business)
      .then((response) => {
        let reviews = response.jsonBody.reviews;
        console.log(response.jsonBody.reviews);
        res.send(reviews).status(200);
      })
      .catch((e) => {
        res.send("There was an issue retrieving business reivews").status(400);
      });
=======
    console.log("Insert Code Here");
>>>>>>> omar-firebase-integration
  },
};

const yelpDetails = {
  get: (req, res) => {
<<<<<<< HEAD
    const body = req.body;
    let business = body.alias;
    console.log("Insert Code Here to get details");
    ("use strict");
=======
    console.log("Insert Code Here");
  },
};
>>>>>>> omar-firebase-integration

    const yelp = require("yelp-fusion");
    const client = yelp.client(
      "Jk6OGhKusZG5Qn6aoEVDIYfXwVAD83DYG0bekF3uGPqqyhLYyVhZjTQIIpWQlMR6dr0p4FEFk05SgQzMci2IU-6e1khz6ONpKgrbdmv-7oR9O2XMzbDlhC6qR1cBYnYx"
    );

    client
      .business(business)
      .then((response) => {
        let details = response.jsonBody;
        console.log(response.jsonBody.name);
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
<<<<<<< HEAD
    console.log("Insert Code Here to get similar");
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
        console.log(response.jsonBody.businesses[0].id);
      })
      .catch((e) => {
        console.log(e);
      });
  },
};

const yelpAutoComplete = {
  get: (req, res) => {
    console.log("Insert Code Here to get similar");
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
        console.log(response.jsonBody.terms[0].text);
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
=======
    console.log("Insert Code Here");
  },
};

module.exports = { yelpBusinesses, yelpReviews, yelpDetails, yelpSimilar };
>>>>>>> omar-firebase-integration
