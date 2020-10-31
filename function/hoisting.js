/* 작성한 코드 */
console.log(a());
console.log(b());
console.log(c());

function a() {
  return "a";
}
var b = function () {
  return "b";
};
var c = function c() {
  return "b";
};

/* 자바스크립트 엔진에 의해 호이스팅 된 코드 */
// '선언'만 호이스팅 됨에 유의한다.
function a() {
  return "a";
}
var b;
var c;

console.log(a());
console.log(b());
console.log(c());

var b = function () {
  return "b";
};
var c = function c() {
  return "b";
};
