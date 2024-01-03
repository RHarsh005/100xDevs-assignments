const fs = require("fs");

// --- 1 ---
try {
  const fileName = "test.txt";

  const data = fs.readFileSync(fileName, "utf-8");
  if (data) {
    let lines = data.split("\n");

    lines.forEach((curr, i, lines) => {
      lines[i] = curr.replace(/\s+/g, " ");
    });
    console.log(lines);

    fs.writeFileSync(fileName, lines.join("\n"));
  }
} catch (err) {
  console.error(err);
}

// --- 2 ---
// SAME SOLUTION AS WRITTEN IN EASY
