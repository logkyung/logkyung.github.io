---
emoji: ✏️
title: 한 입 크기로 잘라 먹는 TypeScript (1)
date: '2023-11-22 23:12:00'
author: logkyung
tags: TypeScript
categories: 블로그
---

## 1. TypeScript란?
TypeScript란 JavaScript의 확장판으로, 자바스크립트를 더 안전하게 사용하기 위해 자바스크립트에 "타입 관련 기능들"을 추가한 언어이다. C#의 창시자가 타입스크립트의 개발자라고 한다. 또한 타입스크립트는 오픈소스로 되어 있어 현재도 다양한 개발자들이 타입스크립트 개발에 참여하고 있다고도 한다.
자바스크립트는 원래 단순한 기능 개발을 위해 사용되었지만, Node.js의 등장으로 어디서든 자바스크립트를 구동할 수 있게 되면서 점차 규모가 큰 프로그램에도 자바스크립트를 사용하기 시작했다. 규모가 커짐에 따라 안정성 또한 중요해 졌는데, 자바스크립트의 유연성을 가져가면서도 버그의 발생 가능성을 줄일 수 있는 타입스크립트가 등장한 것이다.
<br>
```
let a = 1;
a.toUpperCase();
```
위의 코드를 실행하면 type error가 발생하긴 하지만, 아예 실행이 되지 않는 것은 아니다.

```
let a: number = 1;
a.toUpperCase();  // red underline.
```
위의 코드처럼 변수 a에 number type을 지정해 주면 아래의 a.toUpperCase() 라인에 빨간 밑줄이 생기면서 type error 발생을 알려주고 실행 또한 되지 않는다.
