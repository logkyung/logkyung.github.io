---
emoji: ✏️
title: 한 입 크기로 잘라 먹는 TypeScript (4)
date: '2024-04-25 23:50:00'
author: logkyung
tags: TypeScript
categories: 블로그
---

## 배열과 튜플

### 배열의 타입 정의
1) 타입 어노테이션
: *배열명: 타입[]* 대괄호를 넣어서 배열이라는 것을 알린다.

```
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "logkyung"];
```

2) 제네릭 문법
: *배열명: Array<타입>*

```
let boolArr: Array<boolean> = [true, false, true];
```

### 배열에 들어가는 요소의 타입이 다양할 경우
예를 들어, number 타입의 요소와 string 타입의 요소가 같이 들어가는 배열의 경우 어떻게 타입을 정의할까?
: *배열명: (타입1 | 타입2)[]* 타입1이 들어갈 수도 있고, 타입2가 들어갈 수도 있다는 의미. => 유니온 타입

```
let multiArr: (number | string)[] = [1, "hello"];
```

### 다차원 배열의 타입을 정의하는 방법
: *배열명: 타입[]\*[]* 대괄호 연달아 작성
```
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5]
];
```
