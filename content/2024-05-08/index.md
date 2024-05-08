---
emoji: ✏️
title: 한 입 크기로 잘라 먹는 TypeScript (5)
date: '2024-05-08 22:43:00'
author: logkyung
tags: TypeScript
categories: 블로그
---

## 객체

### 객체의 타입 정의
```
let user = {
  id: 1,
  name: "logkyung",
}
```
위와 같은 객체가 있을 때, 이 객체의 타입은 어떻게 정의하면 될까? 타입스크립트에는 object라는 타입이 존재한다. 하지만 `user: object`와 같이 정의하면 한 가지 문제가 있다. `user.id`처럼 객체의 프로퍼티에 접근하려고 하면 오류가 발생하는 것이다. 이유는 `user: object`와 같은 타입 정의는 *user 변수는 객체*라는 것 이상의 정의를 하지 않기 때문에 객체의 프로퍼티나 메소드의 정보에 대해서는 알 수 없다. 이럴 때는 "객체 리터럴 타입"을 사용한다.

```
let user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: "logkyung",
};
```
이렇게 해주면 프로퍼티에 접근할 수 있고, 각각의 프로퍼티는 타입을 가질 수 있다.

```
let dog: {
  name: string;
  color: string;
} = {
  name: "낑깡이",
  color: "brown",
};
```

기본적으로 C나 Java같은 언어에서는 변수명 앞에 타입을 명시해 정의한다. 하지만 타입스크립트는 프로퍼티의 구조에 따라 타입을 정의하는데 이를 *구조적 타입 시스템(Property Based Type System)*이라고 한다. 참고로 이름을 기준으로 타입을 정의하는 방식은 *명목적 타입 시스템*이라고 한다.

### 선택적 프로퍼티(Optional Property)

user 변수에 새로운 값을 넣으려고 한다. 이때 id는 모르고 이름만 알 때, 다음과 같이 작성하면 당연히 오류가 발생한다.
```
user = {
  name: "홍길동"
};
```
그럼 id를 넣어도 되고, 안 넣어도 되는 프로퍼티로 정의하려면 어떻게 할까? 간단하다. 프로퍼티의 타입을 정의할 때, 변수명 뒤에 *?* 만 붙여주면 된다.
```
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "logkyung",
};

user = {
  name: "홍길동",
};
```
*?* 는 프로퍼티가 있어도 되고 없어도 되는, 선택적 프로퍼티(Optional Property)라는 뜻이다.

### readonly
다음과 같은 객체 변수가 있다.
```
let config: {
  apiKey: string;
} = {
  apiKey = "MYAPIKEY",
};
```
현재 정의한 상태로는 `config.apiKey = "sldkfjl";`처럼 변경이 가능하다. 이때 apiKey를 변경이 불가능한, 읽기 전용 변수로 만들고자 할 때 변수명 앞에 *readonly* 키워드를 붙여주면 된다.

```
let config: {
  readonly apiKey: string;
} = {
  apiKey = "MYAPIKEY",
};

config.apiKey = "hacked";   // 오류 발생
```
