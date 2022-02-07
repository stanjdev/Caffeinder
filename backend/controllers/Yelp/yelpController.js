const yelpBusinesses = {
  get:(req, res) => {
    console.log('Insert Code Here to get businesses');
  }
}

const yelpReviews = {
  get:(req, res) => {
    console.log('Insert Code Here to get reviews');
  }
}

const yelpDetails = {
  get:(req, res) => {
    console.log('Insert Code Here to get details');
  }
}

const yelpSimilar = {
  get:(req, res) => {
    console.log('Insert Code Here to get similar');
  }
}

module.exports = {yelpBusinesses, yelpReviews, yelpDetails, yelpSimilar};