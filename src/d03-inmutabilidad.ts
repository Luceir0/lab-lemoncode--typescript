const startSpread = performance.now();
let list: number[] = [];
for (let i = 0; i < 20000; i++) {
  list = [...list, i];
}
const endSpread = performance.now();

const startPush = performance.now();
const listPush: number[] = [];
for (let i = 0; i < 20000; i++) {
  listPush.push(i);
}
const endPush = performance.now();

console.log("Spread: ", endSpread - startSpread); // Spread:  2244
console.log("Push: ", endPush - startPush); // Push:  1
