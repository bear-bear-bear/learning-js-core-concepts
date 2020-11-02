/* 접근 권한 제어 & 지역변수 보호 */
function a() {
  var x = 1;
  function b() {
    console.log(x);
  }
  b();
}
a();
// console.log(x); // 오류!

/* 데이터 보존 및 활용 */
function c() {
  var x = 1;
  return function b() {
    console.log(x);
  };
}
var d = c();
d();

/* 접근 권한 제어 & 데이터 보존 및 활용 & 지역변수 활용 */
function e() {
  var _x = 1;
  return {
    get x() {
      return _x;
    },
    set x(v) {
      _x = v;
    },
  };
}
var f = e();
f.x = 10;

/* 그래서 어떻게 쓴다고?  */
function setName(name) {
  return function () {
    return name;
  };
}
var sayMyName = setName("고무곰");
sayMyName(); // "고무곰"

/* 더 실용적으로! */
function setCounter() {
  var count = 0;
  return function () {
    return ++count;
  };
}
var count = setCounter();
console.log(count()); // 1
