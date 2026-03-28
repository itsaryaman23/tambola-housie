import templateGenerator from "./templateGenerator.js";

function ticketGenerator() {
  let template = templateGenerator();
  for (let i = 0; i < 9; i++) {
    let q = 0;
    for (let j = 0; j < 3; j++) {
      if (template[j][i] === 1)
        q++;
    }
    let numbers;
    if (i === 0) {
      numbers = randomRangeGenerator(i * 10 + 1, i * 10 + 9, q);
    }
    else if (i === 8) {
      numbers = randomRangeGenerator((i - 1) * 10 + 1, i * 10, q);
    }
    else {
      numbers = randomRangeGenerator(i * 10 + 1, i * 10 + 9, q);
    }
    for (let k = 0; k < 3; k++) {
      if (template[k][i] === 1)
        template[k][i] = numbers.shift();
    }
  }
  return template;
}

function randomRangeGenerator(min, max, quantity) {
  let list = [];
  while (quantity > 0) {
    let choice = Math.floor(Math.random() * (max - min + 1)) + min;
    if (list.includes(choice))
      continue;
    list.push(choice);
    quantity--;
  }
  return list.sort((a, b) => a - b);
}

let ticket = ticketGenerator();
for (const row of ticket) {
  console.log(...row);
}

export default ticketGenerator;