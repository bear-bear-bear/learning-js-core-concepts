/* 함수 내부에서 */
function a() {
  console.log(this); // Window / global
}

function b() {
  function c() {
    console.log(this);
  }
  c();
}
b(); // Window / global

var d = {
  e: function () {
    function f() {
      console.log(this);
    }
    f();
  },
};
d.e(); // Window / global
