/*-- 기본형 --*/
var a = 10;
var b = a; // a === 10, b === 10

b = 20; // a === 10, b === 20

console.log(a === b); // false

/*-- 참조형 --*/
var obj = {
  a: 10,
  b: "b",
};

var obj2 = obj; // obj2는 obj1의 '주소값'을 가리킴. obj1.a === 10, obj2.a === 10

obj2.a = 20; // obj1 === 20, obj2 === 20

console.log(obj.a === obj2.a); // true

/*-- Nested한 참조형 --*/
var nestedObj = {
  a: [4, 5, 6],
};

nestedObj.a = "abc"; // a가 'abc'가 들어있는 주소를 가리키게 되면서 [4, 5, 6] 의 데이터를 가리키고 있던 주소들이 가비지로 처리됨
