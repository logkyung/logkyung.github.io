---
emoji: ✏️
title: 한 입 크기로 잘라 먹는 TypeScript (3)
date: '2024-04-24 23:30:00'
author: logkyung
tags: TypeScript
categories: 블로그
---

## TypeScript의 기본 타입

### 원시 타입(Primitive Type)
하나의 값만 저장할 수 있는 타입. number, string, boolean, null, undefined 등의 타입이 있다.

### number
숫자를 의미하는 모든 값.

`변수명: 타입`: 타입 주석(annotaion)이라고 하며 변수의 타입을 정의하는 가장 기본적인 방식

```
let num1: number = 123;         // 양의 정수
let num2: number = -123;        // 음의 정수
let num3: number = 0.123;       // 양의 실수
let num4: number = -0.123;      // 음의 실수
let num5: number = Infinity;    // 양의 무한대
let num6: number = -Infinity;   // 음의 무한대
let num7: number = NaN;         // Not a Number
```

### string
문자 하나, 문자열을 의미하는 모든 값.

```
let str1: string = "hello";           // 큰 따옴표 문자열
let str2: string = 'hello';           // 작은 따옴표 문자열
let str3: string = `hello`;           // 백틱 문자열
let str4: string = `hello ${num1}`;   // 템플릿 리터럴
```

### boolean
true, false를 의미하는 값.

```
let bool1: boolean = true;
let bool2: boolean = false;
```

### null
`let null1: null = null;`

### undefined
`let unde1: undefined = undefined;`


### ‼️주의할 점
number 타입의 변수를 생성하고 중간에 넣을 값이 없어 잠깐 null값을 넣어야 하는 상황이 존재. 하지만 null도 원시 *타입*이기 때문에 다른 타입의 변수에 할당할 수 없다. 이때 tsconfig.json 파일의 옵션으로 null 값을 할당하는 것이 가능하다.
*strictNullChecks* 옵션을 false로 설정하면 null타입이 아닌 변수에 null 값을 할당할 수 있다. *strictNullChecks* 는 말 그대로 *엄격한 타입 검사* 를 할지 말지 결정하는 옵션이다. 따라서 해당 옵션을 false로 설정하면 엄격하게 검사하지 않겠다는 뜻.
참고로 *strict* 옵션은 *strictNullChecks* 옵션의 상위 옵션으로, *strict* 옵션을 true로 설정하면 하위 옵션인 *strictNullChecks* 옵션은 따로 설정하지 않아도 자동으로 true가 되며, false로 설정하면 자동으로 false로 설정된다. *strict* 옵션을 true로 설정했다 하더라도 *strictNullChecks* 를 명시적으로 false로 설정할 수 있다.

### literal type
값 자체가 타입이 되는 타입.

```
let numA: 10 = 10;
numA = 12;           // 오류 발생
```

numA의 타입으로 10이라는 값을 넣어줬기 때문에 numA는 이제 10이 아닌 다른 값은 가질 수 없다. 10이라는 값만 허용하는 타입을 만든 것. 이렇게 값 자체를 타입으로 만든 타입을 리터럴 타입이라고 한다. string과 boolean 타입도 마찬가지로 리터럴 타입을 만들 수 있다.

```
let strA: "hello" = "hello";
let boolA: true = false;      // 오류 발생
```
