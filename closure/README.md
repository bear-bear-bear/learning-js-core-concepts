### 클로저(Closure)          
---
          
#### 정의
```
 - A closure is the combination of a function and the lexical environment within which that function was declared (mdn)

 - 즉, 클로저는,
    - 함수와 그 함수가 선언될 당시의 환경정보 사이의 조합
    - 선언 당시의 환경에 대한 정보를 담는 객체 (구성 환경)
    - 함수 내부에서 생성한 데이터와 그 유효범위로 인해 발생하는 특수한 현상/상태
    - '최초 선언시의 정보를 유지' 하는 것.
```

#### 사용목적
```
 - 접근 권한 제어
 - 지역변수 보호
 - 데이터 보존 및 활용
```

#### 사용법
```
 - 1. 함수에서 지역변수 및 내부함수 등을 생성한다.
 - 2. 외부에 노출시키고자 하는 멤버들로 구성된 객체를 return 한다.
 - >> return한 객체에 포함되지 않은 멤버들은 private하다. 
 - >> return한 객체에 포함된 멤버들은 public하다.
```