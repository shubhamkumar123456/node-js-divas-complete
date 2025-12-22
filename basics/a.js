let x = 10;
let y = 5;
let obj = {
  name: "abc",
  age: 45,
};

// console.log(obj)

function xyz() {
  console.log("hello");
}

// xyz()

// console.log(x)

// module.exports = x; //10
module.exports = {
    x:x,
    y,
    obj,
    xyz
}
