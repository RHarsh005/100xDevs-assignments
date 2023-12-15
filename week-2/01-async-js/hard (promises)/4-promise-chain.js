/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */
function wait1(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), t * 1000);
  });
}

function wait2(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), t * 1000);
  });
}

function wait3(t) {
  return new Promise((resolve, reject) => {
    return setTimeout(() => resolve(), t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  let start = Date.now();

  return wait1(t1)
    .then(() => wait2(t2))
    .then(() => wait3(t3))
    .then(() => {
      //   console.log(typeof Date.now() + "-> now");
      //   console.log(typeof new Date().getTime());
      return new Date().getTime() - start;
    })
    .catch((error) => {
      console.error("Rejected: ", error);
      return -1;
    });
}

// async function compare(t1, t2, t3) {
//   const promiseAllCal = require("./3-promise-all");
//   const allAns = await promiseAllCal(t1, t2, t3).then((data) => data);
//   console.log(allAns + " -> all");

//   const sequenceCal = await calculateTime(t1, t2, t3);
//   console.log(sequenceCal + " -> sequence");
// }
// compare(5, 10, 20);

module.exports = calculateTime;
