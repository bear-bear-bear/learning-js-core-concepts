/* 클래스 상속 구현하기 */

// Person 생성자 함수
function Person(name, age) {
  this.name = name || "이름없음";
  this.age = age || "나이모름";
}

Person.prototype.getName = function () {
  return this.name;
};
Person.prototype.getAge = function () {
  return this.age;
};

function Employee(name, age, position) {
  this.name = name || "이름없음";
  this.age = age || "나이모름";
  this.position = position || "직책모름";
}

// Employee 생성자 함수가 위의 Person의 프로퍼티와 메소드를 상속받게 하고 싶다면,
// Employee의 프로토타입과 Person 생성자 함수를 연결해주면 된다!
Employee.prototype = new Person();

// 그런데 이렇게 하면, Employee의 prototype이
// Person 생성자로 아예 대체되어 버리는 결과가 나온다.
// 때문에 기존의 Employee의 기능을 다시 부여해주는 과정이 필요한데,
// prototype이 기본적으로 생성되는, 생성자 함수가 담긴 constructor 프로퍼티를 이용하면 된다.
// 바로 이렇게.
Employee.prototype.constructor = Employee;

// 이해가 잘 되지 않는가?
// 쓰고있는 나도 이해가 잘 되지 않는다.
// 너무 어렵다.

// 아, position에 대한 get 함수도 만들어주자.
Employee.prototype.getPosition = function () {
  return this.position;
};
// 주의할 점은, 바로 위의 getPosition() 이 덮여서 없어지지 않도록
// Employee.prototype = new Person(); 을 마친 후에 해당 함수를 선언해야 한다는 것이다.

// 상속 작업을 마쳤으니 Employee 생성자로 인스턴스를 생성하여 출력해보자.
var gomu = new Employee("고무", 30, "CEO");
console.dir(gomu);
// 브라우저에서 결과를 확인해보면,
// gomu, gomu.__proto__, gomu.__proto__.__proto__ 로 이루어진 객체가 확인된다.
// 얼핏보면 원하는대로 잘 생성된 듯 하지만,
// gomu.__proto__, 즉 Employee.prototype 부분에 Person 생성자의 프로퍼티가 그대로 담겨있다.
// 못마땅하다. 우리가 원한건 Person 생성자의 메소드이지 프로퍼티가 아니기 때문이다.
// 어떻게하면 Person의 메소드만을 깔끔하게 상속받을 수 있을까?

// 다음과 같은 방법으로 가능하다.
// 1. 비어있는 생성자 함수를 선언하고,
// 2. 이 생성자 함수의 프로토 타입에 Person의 프로토타입만을 연결하고,
// 3. Employee.prototype이 이 함수의 인스턴스를 상속받도록 하면 해결된다!

// 위 방법의 비어있는 생성자 함수를 Bridge() 라고 이름짓고, 코드로 구현해보자.

function Bridge() {}
Bridge.prototype = Person.prototype;
Employee.prototype = new Bridge();
Employee.prototype.constructor = Employee;

// 다시 한번 결과를 확인해보자.
var gomu = new Employee("고무", 30, "CEO");
console.dir(gomu);
// 브라우저에서 결과를 확인해보면, Person의 인스턴스를 제외한 메소드만을
// 깔끔히 상속받은 것을 확인할 수 있다!
// 이는 es6 이전에 아주 자주 쓰이던 패턴이며,
// 더글라스 크락포드는 이를 함수로 구현해서 쓰곤 했다. 이렇게 말이다.

var extendClass = (function () {
  function Bridge() {}
  return function (Parent, Child) {
    Bridge.prototype = Parent.prototype;
    Child.prototype = new Bridge();
    Child.prototype.constructor = Child;
  };
})();

// Bridge() 생성자 함수는 한번만 생성되어 계속되어 재활용되고,
// 슈퍼 클래스와 서브 클래스로 쓰일 생성자 함수를 매개변수로 넘겨주면
// 자동으로 둘 사이의 상속 구조를 연결해주는 함수이다! 실로 섹시하다.

// 위의 함수를 활용해서 지금까지 수행했던 복잡한 과정을 쉽게 처리해보자.

extendClass(Person, Employee); // 상속 완료
Employee.prototype.getPosition = function () {
  return this.position;
}; // getPosition() 추가 선언

// 간단해졌다!

// 조금 더 욕심을 내서, 이번엔 Person과 Employee의 공통된 인스턴스 선언인
//
// this.name = name || "이름없음";
// this.age = age || "나이모름";
//
// 부분을, 하위 클래스에서 아래와 같은 선언만으로 상속받게 하고 싶다. 어떻게 구현해야 할까?
//
// this.superClass(name, age);
//
// 위에서 선언했던 extendClass 함수에 다음과 같이 한 줄만 추가하면 된다.

extendClass = (function () {
  function Bridge() {}
  return function (Parent, Child) {
    Bridge.prototype = Parent.prototype;
    Child.prototype = new Bridge();
    Child.prototype.constructor = Child;
    Child.prototype.superClass = Parent; // 추가 ! 😎
  };
})();

// 최종 코드는 아래와 같다.
var extendClass = (function () {
  function Bridge() {}
  return function (Parent, Child) {
    Bridge.prototype = Parent.prototype;
    Child.prototype = new Bridge();
    Child.prototype.constructor = Child;
    Child.prototype.superClass = Parent; // 추가 ! 😎
  };
})();
function Person(name, age) {
  this.name = name || "이름없음";
  this.age = age || "나이모름";
}
Person.prototype.getName = function () {
  return this.name;
};
Person.prototype.getAge = function () {
  return this.age;
};
function Employee(name, age, position) {
  this.superClass(name, age);
  this.position = position || "직책모름";
}
extendClass(Person, Employee);
Employee.prototype.getPosition = function () {
  return this.position;
};

// 사실, 위 코드는 es6 이상에서 문서 가장 하단에 적은 간단한 코드로 구현할 수 있다.
// 하지만, 위의 코드를 이해하고 구현해보면서 자바스크립트의 프로토타입,
// 참조형 데이터에 대한 이해, 프로토타입, 프로토타입 체이닝 등에 대한 전체적인 이해가 가능했으므로,
// 불필요한 시간은 결코 아니였다고 생각한다. 🙂🙂

// 아래는 es6 이상에서의 클래스 상속 구현
class Person {
  constructor(name, age) {
    this.name = name || "이름없음";
    this.age = age || "나이모름";
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
}
class Employee extends Person {
  constructor(name, age, position) {
    super(name, age);
    this.position = position || "직책모름";
  }
  getPosition() {
    return this.position;
  }
}
