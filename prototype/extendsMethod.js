/* 메소드 상속 및 동작 원리 */

/* Person 생성자로 학생1, 학생2 객체를 만들었다. */
/* 각 객체에는 같은 내용의 set(), get()이 정의 된다.*/

function Person(n, a) {
  this.name = n;
  this.age - a;
}
var student1 = new Person("학생1", 20);
var student2 = new Person("학생2", 20);

// 😫😫😫 아래 코드는 쓸데 없는 반복이 심하다
student1.setOlder = function () {
  this.age += 1;
};
student1.getAge = function () {
  return this.age;
};
student2.setOlder = function () {
  this.age += 1;
};
student2.getAge = function () {
  return this.age;
};

// 😁😁😁 위 코드는 이렇게 수정할 수 있다
Person.prototype.setOlder = function () {
  this.age += 1;
};
Person.prototype.getAge = function () {
  return this.age;
};

/* 호출해보자 */

// 아래 코드는 undefined 오류가 난다.
// setOlder(), getAge() 내부에서 참조하는 this가 '__proto__' 이기 때문.

student1.__proto__.setOlder(); // ❌TypeError: Cannot read property 'setOlder' of undefined
student1.__proto__.getAge(); // ❌TypeError: Cannot read property 'getAge' of undefined

// __proto__ 는 생략이 가능하기 때문에,
// 이렇게 호출하면, setOlder(), getAge() 내부에서 참조하는 this가 'student1'을 가리키면서 정상 작동한다.

student1.setOlder(); // 😎 this.age = 21
student1.getAge(); // 😎 return 21

// 만약 여기서, 아래와 같이 프로토 타입이 미리 정의 되어 있었다면,
student2.prototype.age = 100;

// 아래와 같은 결과를 보인다.
// 메소드 호출시에 this가 어떻게 바인딩 되는지를 잘 생각해본다.

student2.__proto__.setOlder(); // 😎 this.age = 101
student2.__proto__.getAge(); // 😎 return 101

student2.setOlder(); // 😎 this.age = 21
student2.getAge(); // 😎 return 21
