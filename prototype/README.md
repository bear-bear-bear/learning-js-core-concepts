### 프로토타입(Prototype)         
---
          
#### 정의
```
 1. 생성자 함수(constructor)가 있을때,
 2. new 연산자를 써서 instance 를 만들면,
 3. 생성자 함수의 prototype 이라고 하는 프로퍼티가
 4. instance 의 __proto__ 라고 하는 프로퍼티에 전달된다. => 생성자 함수의 prototype과 instance 의 __proto__ 라고 하는 프로퍼티는 같은 객체를 참조하게 된다.****
 5. __proto__ 는 내부 프로퍼티에 접근할 때 이 단어를 생략할 수 있다.
```

#### 생성자의 프로토타입에 접근하는 법
```
 - [CONSTRUCTOR].prototype
 - [instance].__proto__
 - [instance]
 - (Object.getPrototypeOf([instance]))
```

#### 생성자 함수에 접근하는 법
```
 - [CONSTRUCTOR]
 - [CONSTRUCTOR].prototype.constructor
 - (Object.getPrototypeOf([instance])).constructor
 - [instance].__proto__.constructor
 - [instance].constructor
```

#### 프로토타입 체이닝
```
 - 모든 데이터 타입의 생성자 함수의 프로토타입에 연결된 Object.prototype에는, 자바스크립트 전체를 통괄하는 공통된 프로퍼티들이 정의되어 있고 이는 모든 데이터 타입이 프로토타입 체이닝에 의해서 접근할 수 있다.
 - 하지만 그렇기 때문에 객체의 프로토타입에는 객체에만 적용되는 프로토타입을 정의해둘 수 없다. 객체의 프로토타입에 특정 프로퍼티를 추가하면 바로 위 항목과 같은 이유로 모든 데이터 타입에 적용되어버리기 때문이다.
 - 그래서 어쩔 수 없이, 객체에만 적용되는 프로퍼티는 객체 생성자 함수에 직접 메서드를 정의할 수 밖에 없었다. 유독 객체 리터럴에서 대문자 Object로 시작하는 매서드가 많이 보이는 이유이다. (ex - assign(), keys(), create() 등등)
```