/* callback 에서 */
function a(x, y, z) {
  console.log(this, x, y, z);
}
var b = {
  c: "eee",
};

// 일 때 call() apply() bind()는 다음과 같이 구현됨

// call() 즉시호출 - func.call(thisArg[, arg1[, arg2[, ...]]])
a.call(b, 1, 2, 3); // { c: 'eee' } 1 2 3

// apply() 즉시호출 - func.apply(thisArg, [argsArray])
a.apply(b, [1, 2, 3]); // { c: 'eee' } 1 2 3

// bind() 새로운 함수 생성 (currying) - func.bind(thisArg[, arg1[, arg2[, ...]]])
var c = a.bind(b);
c(1, 2, 3); // { c: 'eee' } 1 2 3
var d = a.bind(b, 1, 2);
d(3); // { c: 'eee' } 1 2 3

/*-----------------*/

var callback = function () {
  console.dir(this);
};
var obj = {
  a: 1,
  b: function (cb) {
    cb(); // Window/global. callback()은 함수이기 때문에 그냥 호출한다면 this는 전역객체가 됨
  },
  c: function (cb) {
    cb.call(this); // { a: 1, b: [Function: b], c: [Function: c] }. callback()의 주도권을 다른 곳으로 넘긴다면, this는 전혀 다른 결과가 됨
  },
};
obj.b(callback);
obj.c(callback);

/*-----------------*/

var callback2 = function () {
  console.dir(this);
};
var obj = {
  a: 1,
};
setTimeout(callback2, 100); // Window/global. setTimeout() 을 임의로 바꿀 수는 없으니, this를 우리가 원하는 값으로 사용하려면 ,
setTimeout(callback2.bind(obj), 100); // { a: 1 }. 이렇게 사용하면 된다.
