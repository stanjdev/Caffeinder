const db = require("../../server/www/bin/firebase");

const localReivews = {
  get: (req, res) => {
    const body = req.body;
    const businessName = body.businessName;
    let results = [];
    db.collection("reviews")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data());
          let docData = doc.data();
          if (docData.businessName == businessName) {
            results.push(docData);
          }
        });
        res.send(results).status(200);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
  post: (req, res) => {
    const body = req.body;
    const fullName = body.first_name + " " + body.last_name;
    const refId = Math.floor(Math.random() * 100000);
    const review_id = body.business_name + " " + refId;
    newReivew = {
      id: review_id,
      business_name: body.business_name,
      rating: body.rating,
      user: {
        id: refId,
        profile_url: "https://google.com",
        image_url: "https://google.com",
        name: fullName,
      },
      text: body.text,
      time_created: Date.now(),
      url: "https://google.com",
    };
    console.log(newReivew);
    db.collection("reviews")
      .doc(review_id)
      .set(newReivew)
      .then((data) => {
        res.send(data).status(200);
      })
      .catch((err) => {
        console.error(err.message);
      });
  },
  patch: (req, res) => {
    const body = req.body;
    const business_id = body.id;
    const fullName = body.first_name + " " + body.last_name;
    updateRevioew = {
      id: body.id,
      rating: body.rating,
      user: {
        id: body.id,
        profile_url: "https://google.com",
        image_url: "https://google.com",
        name: fullName,
      },
      text: body.text,
      time_created: body.time_created,
      url: fullName,
    };
    db.collection("reviews")
      .doc(business_id)
      .update(updateRevioew)
      .then((data) => {
        res.send(data).status(200);
      })
      .catch((err) => {
        console.error(err.message);
      });
  },
  delete: (req, res) => {
    const body = req.body;
    const business_id = body.id;
    db.collection("reviews")
      .doc(business_id)
      .delete()
      .then((data) => {
        res.send(data).status(200);
      })
      .catch((err) => {
        console.error(err.message);
      });
  },
};

module.exports = { localReivews };
