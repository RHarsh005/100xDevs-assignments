// --- 1 ---
function counter1() {
  setInterval(() => {
    console.clear();
    console.log(new Date().toLocaleTimeString());
  }, 1000);
}
// counter1();

// --- 2 ---
function counter2() {
  console.clear();
  console.log(new Date().toLocaleTimeString());
  setTimeout(counter2, 1000);
}
// counter2();

const fs = require("fs");

// --- 3 ---
fs.readFile("3-read-from-file.md", "utf8", (err, data) => {
  if (err) console.error(err);
  else console.log(data + "2");
});

// --- 4 ---
fs.writeFileSync("data.txt", "--- content ---", (err) => {
  if (err) console.error(err);
});
