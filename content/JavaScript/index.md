---
emoji: 💡
title: JavaScript
date: '2023-05-21 21:43:00'
author: logkyung
tags: 블로그
categories: 블로그
---

## 💡 JavaScript 문법 정리
- return 함수의 역할은 **값 반환** , **함수 종료** 두 가지가 있다.
- 함수에 return문의 없으면 함수 종료 시 undefined 반환.
- undefined값의 경우
	- 변수를 선언하고 아무 값도 할당하지 않았을 때
	- 반환 값이 없는 함수를 호출한 경우
	- 파라미터가 있는 함수에 호출 시 아무 값도 넘겨주지 않을 때
- 옵셔널 파라미터
	- 함수 정의 시 파라미터에 기본 값을 할당해 준 경우 옵셔널 파라미터라고 함.
	- 옵셔널 파라미터는 선언할 때 가장 마지막에 해줘야 한다.
- 상수 선언 시 const 키워드 사용
	- `const PI = 3.14;`
	- 값을 재할당할 수 없기 때문에 값을 보호할 수 있다.
	- 선언 시 값을 할당해주지 않으면 안된다.
	- 상수 이름은 대문자와 밑줄로 표현해야 한다.

### for statement
```
for (초기화; 조건부; 증감부) {
	동작부분;
}
```
- 증감부는 채울 필요 없이 block 내에 작성해도 됨
- 하지만 for 특성 상 증감부가 있기 때문에 block 내의 동작부에는 실제 반복할 내용만 집중, 조건과 관련된 부분은 소괄호 내의 증감부에 작성하여 목적에 맞는 코드 작성
- 초기화 부분에서 생성한 변수는 로컬변수이다.
- 조건 변수 생성 시 let 사용하는 것을 권장

### while statement
```
while (조건부) {
	동작부분;
}
```
- while에는 초기화 부분이 없기 때문에 반복 횟수를 카운트하기 위해서는 while 밖에 global 변수 선언
- 조건부는 for문과 동일하게 작성
- 반복 횟수 증감조건은 while 내에 작성
- while 문을 사용해야 할 경우
	- 글로벌 변수를 조건부에서 비교하여 사용하고
	- 반복문 내에서도 변수를 다루면서
	- 반복문이 종료된 후에도 변수를 사용해야 할 때
- continue;를 사용할 경우에는 증감조건은 continue 앞에 작성해야 무한루프에 빠지지 않는다.

### Object: 객체
- 여러가지 값을 한 번에 저장해야 할 때 사용
- 중괄호 { }로 생성
- 여러가지 다양한 값들을 쉼표(,)로 구분하여 저장
- 각 값들을 명확하게 하기 위해 key: value 형태로 값을 저장
```
let obj = {
	Key1: Value1,
	Key2: Value2,
	Key3: {
	  key1: value1,
	  key2: value2,
	},
};
```
-	property name은 다음 규칙을 만족할 때 따옴표 없이 사용
	-	첫글자는 문자, 밑줄, 달러($)로 시작해야 한다.
	-	띄어쓰기는 사용할 수 없다.
	-	하이픈(-)을 사용할 수 없다.
- 규칙에 벗어난 이름을 사용해야 할 경우 반드시 따옴표로 감싸줘야 한다.
- 객체의 property에 접근하는 방법
	- 점 표기법
	`obj.Key1;`
	`obj.Key3.key1;`
	- 대괄호 표기법
	`obj['Key1'];`
	`obj['Key1']['key1'];`
- 존재하지 않는 property에 접근할 경우 undefined.

### for ... in문
```
let obj = {
	name: 'kyung',
	age: 26,
	gender: 'f',
};

for (let key in obj) {
	console.log(key); // name age gender
	console.log(obj[key]); // kyung 26 f
}
```
-	정수형 프로퍼티 네임 사용 시 주의사항
	-	프로퍼티 네임에 정수형을 사용할 수 있지만 실제로 사용될 때는 문자열로 형변환 되어서 사용된다.
	-	이러한 예외적인 프로퍼티 네임은 대괄호 표기법으로만 접근이 가능하다.
	-	객체는 정수형 프로퍼티 네임을 오름차순으로 먼저 정렬, 나머지 프로퍼티들은 추가한 순서대로 정렬하는 특징이 있다.
	```
	let myObject = {
		3: ‘정수3’,
		name: ‘codeit’,
		1: ‘정수1’,
		birthDay: ‘2017.5.17’,
		2: ‘정수2’,
	};

	for (let key in myObject {
		console.log(key);  // 1 2 3 name birthDay
	}
	```
	- for문을 사용하지 않고 콘솔에 객체를 출력만 해도 위와 같은 순서로 출력된다.
	- 자동으로 정렬되는 특성이 의도치 않은 결과를 가져올 수도 있기 때문에 일반적으로 정수형 프로퍼티는 잘 사용되지 않는다.

### Array: 배열
- 배열도 객체의 한 종류이다.
`let dataType = ['number', 'string', 'boolean', 'object', 'null', 'undefined']`
- 존재하지 않는 요소에 접근하려고 하면 undefined 반환.
- 배열의 메소드를 삭제할 때 delete 키워드를 사용하면 완벽하게 제거되지 않는다. (값은 지워지지만 그 자리에 undefined 값이 들어가 배열의 길이는 그대로)
- 완전히 제거하려면 splice라는 메소드를 사용해야 한다.
- splice(startIndex, deleteCount, item)
	-	배열이름.splice(startIndex); // startIndex부터 뒤의 모든 요소 삭제
	- 배열이름.splice(startIndex, deleteCount); // startIndex부터 count개의 요소 삭제
	- 배열이름.splice(startIndex, deleteCount, item); // 삭제한 요소의 자리에 item값 추가
	- 만약 2개 이상의 값을 넣으면 나머지 요소의 순서는 뒤로 밀린다.
	- deleteCount에 0을 넣고 item 값을 추가하면 아무것도 삭제되지 않고 원하는 자리에 원소를 추가할 수 있다.
	- splice를 잘 활용하는 것이 배열을 잘 다루는 법.

### 배열의 다양한 메소드
- 배열의 첫 요소 삭제: shift()
	`array.shift(); // 첫 번째 요소를 삭제한 후 나머지 요소들은 앞으로 당겨온다`
- 배열의 마지막 요소 삭제: pop()
	`array.pop();`
- 배열의 첫 요소에 값을 추가: unshift(item)
	`array.unshift(item);`
- 마지막 요소에 값 추가: push(item)
	`array.push(item);`
- 배열의 양 끝을 다뤄야 할 때 위의 메소드들을 사용한다.
- 배열에서 특정 값 찾기
	`array.indexOf(item);`
	- item의 index 반환
	- 값이 없다면 -1 반환
	- 값이 여러 개 존재할 경우 가장 첫 번째 원소의 index 반환
	`array.lastIndexOf(item); // 뒤에서부터 탐색`
- 배열에 특정 값 있는지 확인: includes
	`array.includes(item);`
	- 값이 배열에 존재하는지 여부만 확인하고 싶을 때 사용
	- item이 있을 경우 true, 없을 경우 false 반환
- 배열 뒤집기: reverse
	`array.reverse();`
	- 배열의 순서를 뒤집을 수 있다.

### for ... of 반복문
```
for (변수 of 배열) {
	동작부;
}
```
- 변수에 배열의 요소가 할당됨.
- 참고로 배열도 하나의 객체이기 때문에 for ... in 문을 사용할 수 있다.
- for ... in 문을 사용할 경우 변수에 인덱스가 할당된다.
- 하지만 for ... in 문은 객체에 더 최적화 되어있어 배열에는 사용을 권장하지 않는다.

### 다차원 배열
- 배열 또한 배열의 요소가 될 수 있다.
- 배열 안에 배열 -> 2차원 배열
- 배열 안에 2차원 배열 -> 3차원 배열
- 다차원 배열은 값에 의미가 필요한 경우보다 위치나 순서에 중점을 두는 경우 사용한다.
- 다차원 배열의 접근은 대괄호 두 개를 연속으로 사용한다.
```
array = [[1, 2], [3, 4]];

console.log(array[0]); // [1, 2]
console.log(array[1]); // [3, 4]
console.log(array[0][0]); // 1
console.log(array[0][1]); // 2
console.log(array[1][0]); // 3
console.log(array[1][1]); // 4
```

### 숫자형 메소드
- toFixed(0 ~ 100): 파라미터 값만큼 소수점 뒤의 자리수 고정해주는 메소드
	```
	let num = 3.1415;

	console.log(num.toFixed(3)); // 소수점 뒤 넷째자리에서 반올림하여 출력 -> 3.142
	console.log(num.toFixed(7)); // 부족한 자리수만큼 0으로 채워서 출력 -> 3.1415000
	```
	- 이때 데이터 타입은 문자열이므로 숫자형 연산이 필요한 경우 형변환을 해줘야 한다.
	`Number(num.toFixed(7)); or +num.toFixed(7);`

- toString(2 ~ 36): 파라미터 값의 진법으로 숫자 변환. 결과값은 문자열.
- 주의할 점: 숫자 뒤에 바로 . 을 사용하면 메소드가 아니라 소수점으로 인식
- 정수형 바로 뒤에 사용할 경우 `1234..toFixed(3)` 혹은 `(1234).toString(2)` 형태로 사용한다.

### Math 객체
- Math 객체란? JavaScript의 내장객체로 다양한 연산들을 사용할 수 있다.
- Math.abs(x): x의 절댓값 반환
- Math.max(n1, n2, ... nn): 여러 값 중 가장 큰 수 반환
- Math.min(n1, n2, ... nn): 가장 작은 수 반환
- Math.pow(x, y): x^y 반환
- Math.sqrt(x): x의 제곱근 반환
- Math.round(x): x의 반올림 값 반환
- Math.floor(x): x의 버림 값
- Math.ceil(x): x의 올림 값
- Math.random(): 0 이상 1 미만의 난수

### 문자열
- length: 공백을 포함한 문자열의 길이
- 요소 접근
	`string[n] // 대괄호 표기법`
	`string.charAt(n) // charAt 메소드 사용`
- 요소 탐색
	`string.indexOf(문자)`
	`string.lastIndexOf(문자)`
- 대소문자 변환
	`string.toUpperCase()`
	`string.toLowerCase()`
- 양 끝 공백 제거
	`string.trim()`
- 부분 문자열 접근
	`string.slice(start, end)`
	- start인덱스부터 end-1까지의 범위
	- 파라미터를 한 개만 넣으면 start인덱스부터 끝까지 범위
	- 파라미터가 없을 경우 전체 문자열
