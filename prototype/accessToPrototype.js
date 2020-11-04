/* 생성자 함수의 prototype에 접근하기 */
function Person(n, a) {
  this.name = n;
  this.age = a;
}

var student = new Person("학생", 20); // 생성자 함수의 프로토타입에 접근

var studentClone1 = new student.__proto__.constructor("학생_클론1", 22); // 생성자 함수의 프로토타입에 접근

var studentClone2 = new student.constructor("학생_클론2", 23); // 생성자 함수의 프로토타입에 접근

var studentProto = Object.getPrototypeOf(student); // 생성자 함수에 접근

var studentClone3 = new studentProto.constructor("학생_클론3", 21); // 생성자 함수의 프로토타입에 접근

var studentClone4 = new Person.prototype.constructor("학생_클론4", 24); // 생성자 함수의 프로토타입에 접근
