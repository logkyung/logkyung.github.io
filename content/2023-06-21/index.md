---
emoji: 💡
title: 모던 자바스크립트
date: '2023-06-21 23:13:00'
author: logkyung
tags: 블로그
categories: JavaScript
---

## 데이터 타입의 특징과 종류
기본형(Primitive Type)
- Number
- String
- Boolean
- Null
- Undefined
- Symbol: 유일값 만들 때
- BigInt: 매우 큰 수 다룰 떄

참조형(Reference Type)
- Object

연산 시 데이터 타입이 유연하게 변할 수 있다는 특징은 간결하고 편리한 코드 작성에 도움이 된다.

## Symbol과 BigInt

### Symbol
: 코드 내에서 유일한 값을 가진 이름을 만들 때 사용

`const user = Symbol();   // 혹은 Symbol('this is user'); 설명을 덧붙일 수 있다`

이렇게 생성된 user라는 이름의 변수는 어떤 값과 비교해도 true가 될 수 없는 고유한 값

user === "this is user"; // false
user === 'user' // false

똑같은 설명을 가지고 있는 심볼이라 하더라도 두 값을 비교하면 false


### BigInt
: 자바스크립트에서 안전한 최대 정수는 2^53-1, 최소 정수는 -(2^53-1)로 대략 9천조이다.
이 숫자 범위를 초과하는 정수값은 미세한 오류가 발생하게 된다.
최소, 최대 정수보다 큰 수의 연산이 필요한 경우 BigInt를 사용한다.

사용방법: 일반 정수 마지막에 알파벳 'n'을 붙이거나 BigInt라는 함수 사용
소수표현에는 사용할 수 없다.
소수 형태 결과가 리턴되는 연산은 소수점 아래를 버리고 정수로 표현된다.
BigInt끼리만 연산할 수 있고 서로 다른 타입은 명시적 타입 변환을 필요로 한다.
