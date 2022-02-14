const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const logger = require("logger");
const session = require("express-session");
const path = require("path");
// const firebase = require("firebase");

const app = express();

const YelpRouter = require("../../../routers/Yelp/yelpRouter.js");

app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: "helloworld",
    cookie: { maxAge: 60000 },
    saveUninitialized: false,
  })
);
app.use(morgan("dev"));

// const firebaseConfig = {
//   type: "service_account",
//   project_id: "caffinder-4e392",
//   private_key_id: "0d2b7f084a9647aa5abd0705b9cd14de6c8a00a6",
//   private_key:
//     "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDGPysANN38Snuw\n3eNqaiedTGEIeGSdBsZAwd76bhZ0LlZ0xhAjUkQREgngD4t+4KMC5fekLc38JLzS\ngveGw2XOHGYW7selFKtsj/Onx2Fdwplwn2to7cLwPN2ZUUJr6Lzx1/jN5HV3wma3\nGVEWEPizMnH5Ah1Pqob39W2ZmgPRSj7pNKa/Izft9UjCGl+cR+VK2k2+GLR+eLMl\nncktNld+Yw5RXKxDBA4VUO2CpAIGLlE5q1XWPgXEuay9S4fyCLioHUbB1vZ3j93B\n/JuAlv4OGbOJTJckto/trJq1eRsBMRrYuibzOTIKRWgdvLceWkhiLfgfUnuNa7KA\ndOUDsRoLAgMBAAECggEACrNGIuYM7/J6kqVSAmBlxaZlu7X5LZs8ACrMBOsEPekd\nCYMsmSYg6RBMMCfRTlvZm0JxB2ThhVvbmpEvGGWw4lsYt4wpLSPcd35IQc9lK1EM\nRHlBAZIzv2Z0SjOJ85ZwUa1n5H+8R2aFchnlDTKFT0bIbWRL02JPk/qkm8clsETK\nmOGM6ZwF52pCcHWrPJDXOSM62TtAR+HWJ8VqKsXAoEi7E7TmM9IsvwAxB5csCojN\nQa23rTATzNfBGFO/8iED7FSYKtSX1lMKmX7ldHNh/px24m5q5OqSD7SmS6PQAiIl\nYBhMhZjCJTK0pImBkUx4wtDHZiIpXrSPZakuAWjdwQKBgQDw2I8tJ+K7NtGec1O6\nNiWfranvvH+VqBeSOJmQhK1+KyyIqb/SiqSv7ShQ65guPF5uwC4P/kdBDwuZAe5C\nUv5izD+hah26v9mfsZpGBZOEglz2jgm4icWIPDrMp4LNBl9dj8K6+gmoZcoeeN5L\n9Szz6V7Rc/FFab/9vaRjrtWxiQKBgQDSuHCQCdHX2M3YCtYCvY1laRjrh8Q9ld1E\nIGH4YSJqTjGM9OgTFROUG9YCmbvDdCkPjQ40vy7CneDKGcV3X3o3jwTJYHMU6J6I\nzvL1a1IiRFipYGPGVjpX6IorcLdqZry9OCbaOddDitlVRzXJbQ7hsetDgOfbd94F\nRQpUXuCt8wKBgQCCsVFIdKthYgbvz68wje9urcNYd1ZYdKWN0C7ssEKhA3agFlUk\nP93MJYpKFv42oMWxnZGhVh9+W1a0ycprrTOjkyg4RCgrza2fLbYEp0P8lO0zUbJO\ntFw/aEeUBJZDAWFAmSFXaxVQjyPV00r1tu6U0R+F0z+qpg7r9zu8aARH2QKBgD7b\n4kg1hbGb7RvLb7f1j5520YZBQ9sTP6Q4/MC5SSjpFoLz897tZJ/EBf1UmtxdZHpN\nG7XEalCIBCyFr5BCnRTBxy3DZdEQ62noQjXPw/qQ5Nnx9RGPW2wp5D29LBnDd/4C\nKCTlKD/vxZFY4sSpkczl5EaIx6GCimqMA97TRrbdAoGARGgI9/wVL7p2wIqGNLis\npE8eZaxAOTnRVdyeEc0Z2pe2PabzK0hdPhCMQWK7jZYmA1SQ1hxQr3DbHt4cFhXz\nmMgUznWj+1gxjxpMzYDfYKCw7oHBuBTb6fR3jlXtsmOOYZy6rJNvbcuRJsystCQD\nk/HNcMFyyYiahqXMXgU+NFU=\n-----END PRIVATE KEY-----\n",
//   client_email:
//     "firebase-adminsdk-vma96@caffinder-4e392.iam.gserviceaccount.com",
//   client_id: "102715447893185958457",
//   auth_uri: "https://accounts.google.com/o/oauth2/auth",
//   token_uri: "https://oauth2.googleapis.com/token",
//   auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
//   client_x509_cert_url:
//     "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-vma96%40caffinder-4e392.iam.gserviceaccount.com",
// };

// app.use(firebase.firebaseConfig(firebaseConfig));

app.use("/api/yelp", YelpRouter);

module.exports = app;
