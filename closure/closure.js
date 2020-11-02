/* 접근 권한 제어 & 지역변수 보호 */
function a() {
  var x = 1;
  function b() {
    console.log(x);
  }
  b();
}
a();
console.log(x);

/* 데이터 보존 및 활용 */
function a() {
  var x = 1;
  return function b() {
    console.log(x);
  };
}
var c = a();
c();

/* 접근 권한 제어 & 데이터 보존 및 활용 & 지역변수 활용 */
function a() {
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
var c = a();
c.x = 10;
