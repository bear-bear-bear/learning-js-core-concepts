/* 콜백함수를 담는 함수 예시1 - setInterval() */
var cb1 = function () {
  // 콜백함수로 쓰일 함수 표현식
  console.log("1초마다 실행될 겁니다. 그런데 이제 변수를 곁들인");
};

setInterval(cb1, 1000); // setInterval( callback, ms )

/* ----------------------------------------------- */
console.clear();

/* 콜백 함수를 담는 함수 예시 - forEach() */

var arr = [1, 2, 3, 4, 5];
var entries = [];
var cb2 = function (v, i) {
  entries.push([i, v, this[i]]);
};

arr.forEach(cb2, [10, 20, 30, 40, 50]); // arr.forEach(callback(currentValue, index, array)[, thisArg])
console.log(entries);

/* ----------------------------------------------- */
console.clear();

/* 이벤트 핸들러 */
document.body.innerHTML = '<div id="a">abc</div>';
function cbFunc(x) {
  console.log(this, x);
}

document.getElementById("a").addEventListener("click", cbFunc); // addEventListener(type, callback[, options])

/* ----------------------------------------------- */
console.clear();

/* 콜백함수는 '메소드'가 아닌 '함수'이다 */

var arr = [1, 2, 3, 4, 5];
var obj = {
  vals: "boom",
  logValues: function (v, i) {
    if (this.vals) {
      console.log(this.vals, v, i);
    } else {
      console.log(v, i);
    }
  },
};
obj.logValues(1, 2); // 메소드로 호출
arr.forEach(obj.logValues); // 콜백함수로 호출
