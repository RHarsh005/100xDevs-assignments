const request = require("supertest");
const assert = require("assert");
const express = require("express");
const app = express();
// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// rate limit the requests from a user to only 5 request per second
// If a user sends more than 5 requests in a single second, the server
// should block them with a 404.
// User will be sending in their user id in the header as 'user-id'
// You have been given a numberOfRequestsForUser object to start off with which
// clears every one second

let numberOfRequestsForUser = {};
// setInterval(() => {
//   numberOfRequestsForUser = {};
// }, 1000);

app.use((req, res, next) => {
  const userId = req.headers["user-id"];
  // console.log(userId);
  // console.log(numberOfRequestsForUser);
  // console.log(numberOfRequestsForUser[userId]);
  // const val = numberOfRequestsForUser[userId] || 0;
  // console.log(val);

  // if (val >= 5) {
  //   res.status(404).send({});
  // }

  // numberOfRequestsForUser[userId] = val + 1;

  // console.log(numberOfRequestsForUser);

  if (userId) {
    const currentTime = Date.now();
    const userRequests = numberOfRequestsForUser[userId];
    console.log(userRequests);

    if (!userRequests) {
      console.log("if");
      numberOfRequestsForUser[userId] = [
        {
          timestamp: currentTime,
          // count: 1,
        },
      ];
    } else {
      let val = userRequests.filter((curr) => currentTime - curr.timestamp < 1000);

      console.log("else");
      console.log(val);
      if (val.length >= 5) {
        res.send(404);
      }

      numberOfRequestsForUser[userId].push({
        timestamp: currentTime,
        // count: userRequests.length + 1,
      });
    }
    console.log(numberOfRequestsForUser);
  }

  next();
});

app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

module.exports = app;
