const arr = [
  1,
  2,
  3,
  4,
  5,
  6,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

document.querySelector("#btn").addEventListener("click", () => {
  var hex = "#";
  for (var i = 0; i < 6; i++) {
    hex += Random();
  }
  console.log(hex);
  document.querySelector("body").style.backgroundColor = hex;
  document.querySelector(".color").innerHTML = hex;

  function Random() {
    return arr[Math.floor(Math.random() * arr.length)];
  }
});
