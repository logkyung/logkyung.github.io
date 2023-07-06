---
emoji: 💡
title: JS 웹 개발
date: '2023-07-06 21:00:00'
author: logkyung
tags: 블로그
categories: JavaScript
---
### fetch
```
feth('https://google.com')
  .then((response) => response.text())
  .then((result) => { console.log(result); });
```
fetch: 서버로 request를 보내고 response를 받는 함수
파라미터로 넘어온 URL로 request를 보낸다.
response를 받으면 받은 response를 처리하거나 사용하는 부분이 필요한데, then 안의 코드가 그것이다.
서버가 보낸 response는 하나의 객체가 되어 파라미터로(여기서는 response이며 단어는 임의로 지정) 넘어온다.
fetch 함수가 실행될 때 then 안의 구문이 바로 실행되는 것은 아니고 response가 도착한 후에 실행된다. 이처럼 어떤 조건이 만족되었을 때 실행되는 함수를 callback 함수라고 하며, then 메소드는 callback을 등록해주는 메소드인 걸 알 수 있다.
이전 callback의 리턴 값은 다음 callback이 넘겨받을 수 있는데 위 코드에서는 result에 이전 callback의 리턴 값인 response.text()가 들어가 있다.
<br>
fetch 함수의 실행 원리를 정리해 보면 다음과 같다.
- fetch 함수는 어떤 객체(promise)를 리턴한다.
- 이 객체의 then 메소드로 'response가 왔을 때 실행할 callback'을 등록할 수 있다.
- 이렇게 등록된 callback들은 then 메소드로 등록한 순서대로 실행되며 이전 콜백의 리턴 값을 이후 콜백이 넘겨받아 사용할 수 있다.
<br>
### JSON
JavaScript Object Notation.
자바스크립트 언어의 문법을 빌려 만들어진 데이터 포맷.
JSON 문법은 자바스크립트 문법과 거의 유사하다.
<br>
### JavaScript 문법과의 차이
- JSON은 프로퍼티 이름과 값을 표현하는 방식에 제한이 있다.
	- 프로퍼티 이름에 반드시 ""를 붙여야 한다. (JS는 붙여도 되고 안붙여도 됨)
	- 값이 문자열인 경우 ""로 감싸줘야 한다. (JS는 '' 혹은 "")
- JSON은 undefined, NaN, Infinity 등을 사용할 수 없다.
- 주석을 달 수 없다. 코드가 아닌 데이터 포맷이기 때문
<br>
### JSON 데이터와 객체의 변환
- JSON.parse(result) : JSON 데이터를 객체로 변환
- JSON.stringify(data): 객체를 JSON 데이터로 변환
