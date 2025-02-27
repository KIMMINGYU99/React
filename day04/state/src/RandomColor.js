const arr = "abcdef0123456789".split("");

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const colorArr = Array(6).fill(0);
export const hex = () =>
  "#" + colorArr.map((v) => (v = arr[getRandom(0, 15)])).join;
console.log(colorArr.map((v) => (v = arr[getRandom(0, 15)])).join;);
