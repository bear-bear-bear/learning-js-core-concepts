/* 프로토타입 체이닝 */
var arr = [1, 2, 3];

// Object 프로토타입의 메소드 toString() 을 프로토타입 체이닝으로 상속받음.
console.log(arr.toString()); // 1,2,3

// 이름이 같은 메소드를 배열 리터럴에 직접 할당하면,
arr.toString = function () {
  return this.join("_");
};

console.log(arr.toString()); // 1_2_3. 직접 할당한 메소드가 적용된다.

// call 메소드를 이용하여 arr을 this로 바인딩하여
// 명시적으로 arr 생성자 함수에 있는 prototype의 toString() 과
// Object의 prototype의 toString() 을 호출한다면, 결과는 아래와 같이 나온다.
// 직접 호출과 proto를 통한 호출의 결과가 다르다. 😅
console.log(arr.toString()); // 1_2_3. 직접 할당한 메소드가 적용된다.
console.log(arr.__proto__.toString.call(arr)); // 1,2,3. 직접 메소드를 할당하지 않았을때와 값이 동일하다.
console.log(arr.__proto__.__proto__.toString.call(arr)); // [object Array]

// 배열인 메소드는 모두 같은 출력을 얻도록,
// 위에 선언했던 메소드를 아래와 같이 수정할 수 있다.
var arr2 = [1, 2, 3];
Array.prototype.toString = function () {
  return "[" + this.join(", ") + "]";
};

// 결과를 보자.
// 직접 호출과 proto를 통한 호출의 결과가 같다! 😎
console.log(arr2.toString()); // [1, 2, 3]
console.log(arr2.__proto__.toString.call(arr2)); // [1, 2, 3]
console.log(arr2.__proto__.__proto__.toString.call(arr2)); // [object Array]

// 이번엔 객체의 경우를 살펴보자.
// 아래 객체를 문자열로 출력하고 싶다.
var obj = {
  a: 1,
  b: {
    c: "c",
  },
};
console.log(obj.toString()); // [object Object]. 이건 우리가 원했던 출력 결과가 아니다.

// 객체 내용을 문자열로 깔끔하게 출력하기 위해,
// 위에 배열에 했던 것처럼 Object.prototype.toSring() 을 새로 지정한다.

Object.prototype.toString = function () {
  var res = [];
  for (var key in this) {
    res.push(key + ":" + this[key].toString());
  }
  return "{" + res.join(", ") + "}";
};

// 이제 다시 객체를 출력해보자.
console.log(obj.toString()); // {a:1, b:{c:c}}. 성공이다!!

// 만약 Object.prototype에 지정한 위의 toString()을 객체 안에서 메소드로 선언한다면,
// 당신이 원하던 출력 결과는 나오지 않을 것이다. 출력 결과가 어떨지 궁금한가? 직접 해보라.
