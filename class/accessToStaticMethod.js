/* 생성자 함수의 static method에 접근하기 */
// 생성자 함수 Person 선언
function Person(name, age) {
  this._name = name;
  this._age = age;
}

// 이것은 static method 선언
Person.getInformations = function (instance) {
  return {
    name: instance._name,
    age: instance._age,
  };
};

// 이것들은 (prototype) method 선언
Person.prototype.getName = function () {
  return this._name;
};
Person.prototype.getAge = function () {
  return this._age;
};

// Person의 instance 생성
var gomu = new Person("고무", 30);

// 생성한 instance로 (prototype) method를 실행해보면, 정상적으로 결과가 출력된다.
console.log(gomu.getName()); // 고무
console.log(gomu.getAge()); // 30

// 하지만 instance에서 static method를 호출한다면?
// instance에서 static method를 호출할 수 없기 때문에 에러가 난다.
console.log(gomu.getInformations(gomu)); // ❌ 에러.

// static method는 instance가 아닌 생성자 함수에서 호출해야 제대로 된 결과를 얻을 수 있다.
console.log(Person.getInformations(gomu)); // { name: '고무', age: 30 }
