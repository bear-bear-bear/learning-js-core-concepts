### this   
---
          
#### 전역공간에서
```
 - 전역객체를 가리킴
    - 브라우저 콘솔에선 'Window 객체'
    - node.js 에선 'grobal 객체'
 - Window, global 둘 모두 ECMA Script 에서 정의한 구현체
```

#### 함수 내부에서
````
 - 전역객체를 가리킴
````

#### 메소드 호출시
````
 - 메소드 호출 주체 (메소드 바로 앞)
 - 즉, 메소드명 바로 앞에 있는 마지막 점 '.' 까지가 주체.
       
 - 여기서, '함수는 (전역 객체의) 메소드다' 라고 생각하는게 편한데, 
 - 옳지는 않지만 이렇게 생각한다면 앞에 뭐가 있다면 걔가 this고 없다면 전역객체가 this다.
````

#### callback에서 
````
 - 기본적으로는 함수 내부의 this와 동일
 - 제어권을 가진 함수가 callback의 this를 명시한 경우에 그에 따르게 된다. (addEventListener()의 this는 dom)
 - 개발자가 this를 바인딩한 채로 callback을 넘기면 그에 따른다.(thisArg)
````

#### 생성자함수에서
````
 - 인스턴스를 가리킨다.
````