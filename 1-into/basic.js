import * as dfd from "danfojs-node";

const s = new dfd.Series([1, 3, 5, undefined, 6, 8]);
s.print();

const df = new dfd.DataFrame([
  { name: "A", age: 23, score: 88 },
  { name: "B", age: 21, score: 92 },
  { name: "C", age: 23, score: 75 },
]);
df.head().print();