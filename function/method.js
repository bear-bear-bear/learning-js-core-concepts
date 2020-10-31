var obj = {
  a: 1,
  b: function bb() {
    console.log(this); // { a: 1, b: [Function: bb], c: [Function: c] }
  },
  c: function () {
    console.log(this.a); // 1
  },
};

obj.b();
obj.c();

console.dir(obj.b); // [Function: bb]
console.dir(obj.c); // [Function: c]
