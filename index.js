let emoji = require("node-emoji");

function printEmojis() {
  for (let i = 0; i <=9; i++) {
    console.log(emoji.random().emoji);
  }
}

printEmojis();
