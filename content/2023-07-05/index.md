---
emoji: 💡
title: 모던 자바스크립트 (2)
date: '2023-07-05 19:00:00'
author: logkyung
tags: 블로그
categories: JavaScript
---

## AND와 OR의 연산 방식
자바스크립트에서 논리 연산자는 매번 true나 false를 리턴하는 게 아니라 상황에 따라서 양쪽 값 중 하나를 선택하는 방식으로 동작한다.

### AND 연산자
왼쪽 값이 Truthy면 오르쪽 값 리턴, 왼쪽 값이 Falsy면 왼쪽 값 리턴
``console.log("Python && JavaScript");  // Python이 Truthy이므로 JavaScript 리턴``

### OR 연산자
왼쪽 값이 Truthy면 왼쪽 값 리턴, 왼쪽 값이 Falsy면 오른쪽 값 리턴

- null && undefined   // null
- 0 || true           // true
- '0' && NaN          // NaN
- {} || 123           // {}

<br>

## null 병합 연산자: ??
?? 연산자 왼편의 값이 null이거나 undefined라면 연산자 오른쪽 값 리턴, 아니면 왼쪽 값 리턴
동작 방식은 OR 연산과 비슷하지만 병합 연산자는 왼편 값이 null/undefined인지 확인하고 OR은 falsy인지 확인한다는 차이점이 있다.

<br>

## 변수와 스코프
값의 재할당이 필요한 경우 let
필요하지 않은 경우 const

1. 변수가 유효한 시점의 차이
var는 변수를 만들기도 전에 사용 가능하다는 문제가 있다.
hoisting: 코드 상에서는 선언이 나중에 되었지만 선언이 위로 올라간 듯한 현상
let이나 const는 변수 선언 전에 사용할 수 없다.

2. var는 중복 선언이 가능하다는 문제
3. scope 차이
var는 함수 스코프
let, const는 블록 스코프

<br>

## 함수 만드는 방법
### 1. 함수 선언 (Function Declaration)
```
function 함수이름(파라미터) {
  동작
  return 리턴값
}
```

### 2. 함수 표현식(Function Expression)
```
const printHello = function() {
  console.log("Hello");
};
```
변수에 함수 선언을 할당하는 방식이다.
함수 선언은 호이스팅이 가능하지만 표현식은 불가능하다.
또한 함수 선언은 함수 스코프를 가진다. 표현식은 할당된 변수에 따라 스코프가 달라진다.

<br>

## 파라미터와 아규먼트
### 파라미터(Parameter)
함수에서 넘겨받는 부분을 파라미터라고 한다.
함수를 호출할 때 undefined를 넘겨 기본값이 동작하게 할 수 있다.
파라미터의 기본값은 앞쪽에 정의된 파라미터를 활용할 수 있다.

### 아규먼트(Argument)
함수 호출 시 파라미터로 넘겨주는 값을 의미한다.
아규먼트 개수에 따라 유연하게 동작하는 함수를 만드려면 함수 내부에서 arguments라는 아규먼트를 다루는 특별한 객체를 사용할 수 있다.

### Rest Parameter
파라미터 앞에 마침표 세 개를 붙여서 사용한다.
```
function name(...paramenter) {

}
```
arguments 객체는 유사 배열이라 배열의 메소드를 사용할 수 없다.
반면 Rest Parameter는 배열이기 때문에 배열의 메소드를 활용할 수 있다.
일반 파라미터와 함께 사용할 수도 있는데 그럴 땐 반드시 가장 마지막에 작성하도록 한다.

<br>

## Arrow Function
기존 함수의 선언 방식을 보다 간결하게 만들어주는 문법이다.
이름이 없는 익명함수이기 때문에 이름을 가진 변수에 할당하거나, 다른 함수의 아규먼트를 선언할 때 활용할 수 있다.
```
() => {
  동작
}
```
더 짧게 표현도 가능한데
```
number => number*2
```
- 파라미터가 하나인 arrow function은 소괄호 부분을 생략할 수 있다.
- 파라미터가 두 개 이상이거나 없을 경우 반드시 작성해야 한다.
- 내부 동작 부분이 return문 하나로만 이루어져 있다면 중괄호와 함께 리턴 키워드를 생략할 수 있다.
- 함수 내부에 리턴문 하나밖에 없지만 리턴 값이 객체인 경우 객체를 소괄호로 감싸야 한다.
- arrow function에는 arguments 객체가 없다.

<br>

## this
브라우저 안에서 자바스크립트가 동작한다면 전역 객체인 window 객체가 this의 기본값이다.
함수 내부에서 사용할 수 있는데 특히 객체의 메소드를 만들 때 사용한다.
자바스크립트에서 this는 함수를 호출한 객체를 가리키는 키워드이다.
일반 함수와 arrow function은 this를 다루는 방식이 다르다.
arrow function에서 this는 호출할 대상에 따라 상대적으로 변하는 것이 아니다.
arror function이 선언되기 직전에 유효한 this 값과 같은 값을 갖게 된다.
이런 특징 때문에 객체에 메소드를 만들 때는 arrow function보다 일반 함수 사용을 권장한다.

<br>

## 객체 지향 프로그래밍
'객체'간의 상호작용을 중심으로 하는 프로그래밍

### 객체 만들기
```
const user = {
  email: 'abc123@gmail.com',
  birth: '1997-01-01',
  buy(item) {
    console.log("this.email buys item.name");
  },
}

const item = {
  name: '스웨터',
  price: 20000,
}
```

### Factory Function
```
function createUser(email, birth) {
  const user = {
    email,
    birth,
    buy(item) {
      console.log('this.email buys item.name');
    },
  };
  return user
}

const user1 = createUser('abc123@gmail.com', '1997-01-01');

```
객체를 생성해서 return하는 함수를 Factory Function이라고 한다.

### Constructor Function
```
function User(email, birth) {
  this.email = email,
  this.birth = birth,
  this.buy = function(item) {
    console.log('위랑 똑같음');
  };
}

const user1 = new User(email, birth);
```
this 키워드는 constructor function으로 생성할 수 있는 해당 객체를 의미한다.
객체를 여러 개 생성했을 때 각각의 값이 다르게 잘 설정되는 이유는 constructor function의 this가 매번 생성되는 해당 객체를 가리키기 때문이다.
- constructor function으로 객체를 생성하려면 new를 붙여서 호출
- 일반 함수와 달리 함수 이름의 첫 번째 알파벳을 대문자로

### Class
```
class User {
  constructor(email, birth) {
    this.email = email,
    this.birth = birth,
  }

  buy(item) {
    console.log('위');
  }
}
```
- new 키워드로 객체 생성
- constructor 안에 프로퍼티, 바깥에 메소드를 정의

### 추상화
객체 지향 프로그래밍의 핵심 개념 네 가지(추상화, 캡슐화, 상속, 다형성) 중 하나
어떤 구체적인 존재를 원하는 방향으로 간략화 해서 나타내는 것을 말한다.

### 캡슐화
객체의 특정 프로퍼티에 직접 접근하지 못하도록 막는 것을 말한다.
setter/getter 메소드를 통해 구현할 수 있다.
```
set email(address) {
  if (address.includes('@')) {
    this._email = address;
  } else {
    throw new Error("invalid email address");
  }
}
```
숨기고자 하는 프로퍼티 이름을 _를 붙이고 써준다.
```
get email() {
  return this._email;
}
```
원래 있던 email 프로퍼티는 _email 프로퍼티로 교체하고 _email에 직접 접근하기보다 getter, setter를 통해 접근하게 한다.
특정 프로퍼티에 대한 접근을 미리 정해진 메소드를 통해서만 가능하게 하는 것을 캡슐화라고 하며 캡슐화를 함으로써 프로그램의 안정성을 높일 수 있다.

### 캡슐화 더 알아보기
```
function createUser(email, birthdate) {
  let _email = email;

  const user = {
    birthdate,

    get email() {
      return _email;
    },

    set email(address) {
      if (address.includes('@')) {
        _email = address;
      } else {
        throw new Error('invalid email address');
      }
    },
  };

  return user;
}
```
- createUser 함수 안에, 객체 바깥에 _email 함수를 선언
- 대신 user 객체 안에는 email이라는 getter/setter 설정
- closure: 어떤 함수와 그 함수가 참조할 수 있는 값들로 이루어진 환경을 하나로 묶은 것
- createUser 함수가 실행되는 시점에 email이라는 getter/setter 메소드는 _email이라는 변수 값에 접근할 수 있는 상태
- 그리고 핵심은 getter/setter 메소드는 객체가 리턴된 후에도 여전히 _email에 접근하는 것이 가능하다는 것
- 이처럼 함수가 정의된 당시에 참조할 수 있었던 변수들을 계속 참조할 수 있는 상태의 함수를 클로저라고 한다.

### 상속(Inheritance)
하나의 객체가 다른 객체의 프로퍼티와 메소드를 물려받는 것
상속받은 자식 클래스는 super 생성자를 호출해야 한다.

자식 클래스를 만들 때는 자식 클래스의 생성자 안에서 super를 통해 부모 클래스의 생성자 함수를 먼저 호출해줘야 한다.

### 다형성(Polymorphism)
많은 형태를 갖고 있는 성질

```
buy(item) {
  console.log('this.email buys item.name with a 5% discount');
}

users = [user 배열]

users.forEach((user) => {
  user.buy(item);
});
```
하나의 변수가 다양한 종류의 객체를 가리킬 수 있는 것을 다형성이라고 한다.
