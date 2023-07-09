---
emoji: 💡
title: Node.js 정리
date: '2023-07-07 22:10:00'
author: logkyung
tags: 블로그
categories: Node.js
---

## Node.js
<br>
### Node.js
JavaScript를 웹 브라우저 외에도 사용할 수 있게 하는 JS 실행 환경.
- 서버에서 사용되는 프로그램을 만들 수 있고,
- JS만 알아도 웹서비스를 만들 수 있다

는 장점을 가진다.

node를 설치한 후 Visual Studio Code에서 간단한 코드를 작성한 뒤, 터미널에서
`node 파일명`
을 입력하면 파일이 실행된다.

원래 JavaScript는 웹 브라우저 내에서만 실행할 수 있는 코드인데, node는 브라우저가 아닌 환경에서도 실행할 수 있게 한다.
<br>
### require
모듈을 로드해주는 함수
`require(상대경로 / 파일 / 디렉토리이름)`
실행하면 모듈을 로드해서 객체를 리턴해준다. 변수에 require가 리턴하는 객체를 할당해서 사용하면 된다.

반대로 현재 모듈을 다른 모듈에서 사용하게 하려면 외부로 공개해줘야 한다. exports 키워드를 사용해서 공개할 수 있다.
`exports module = module;`
exports 뒤의 module은 모듈 외부로 공개할 이름을 뜻하고, 오른쪽의 module은 모듈 내부에서의 이름을 말한다.

이때 공개하고 싶은 것들을 모아 하나의 객체로 만들고 그 객체를 공개할 수도 있다. 아래는 예시 코드이다.
```
let info = {
	name: "Yuna Kim",
	email: "yuna123@node.js",
	birthdate: "1994-01-01",
};

module.exports = info;
```

정리하면,
- 공개하고 싶은 모듈을 하나씩 exports 키워드로 공개할 수 있다.
- 공개하고 싶은 것들을 모아 하나의 객체로 만들고 module.exports로 객체를 공개할 수도 있다.

Node.js에서 모듈은
- 직접 만든 모듈
- 만들어져 있는 모듈
이렇게 두 가지로 나눌 수 있는데, 만들어져 있는 모듈은 다시
- 코어 모듈
- 서드파티 모듈
로 나눌 수 있다.

코어 모듈: 노드 안에 이미 포함되어 있는 모듈을 뜻한다. 노드를 설치하면 바로 사용할 수 있다.
서드파티 모듈: 개인 혹은 회사가 만들어 npm 저장소에서 제공하는 모듈.
<br>
### 비동기 프로그래밍
비동기 실행: 특정 작업이 완료되었을 때 실행할 콜백을 등록해두고 다음 작업으로 실행 흐름을 넘기는 것
Node.js는 비동기 함수를 사용해 비동기 프로그래밍을 하는 것을 권장하고 있다.

이때 비동기 프로그래밍을 하는 방법은 이벤트를 사용하는 것이다.
이벤트란 어떤 일이 발생했음을 알리는 신호이다.

`const EventEmitter = require('events');`
events라는 코어모듈을 로드해서 사용할 수 있고, events는 EventEmitter라는 클래스를 공개하는 모듈이다.

`const myEmitter = new EventEmitter();`
EventEmitter 클래스로 myEmitter라는 객체를 생성한다.

`myEmitter.on(eventName, listener)`
on 메소드를 이용해 이벤트가 발생했을 때 실행할 콜백을 등록할 수 있다.

`myEmitter.emit(eventName);`
이후 emit 메소드로 이벤트를 직접 발생시킬 수 있다.

```
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('event', () => {
	console.log('Success');
});

myEmitter.emit('event');
```
이때 request에는 client의 요청 정보가 담겨있으며, response 객체는 콜백 함수 안에서 가공되어 client로 보낼 데이터를 담을 객체이다.

EventEmitter 객체는 많은 코어 모듈의 기반이 되기 때문에 제대로 이해하는 것이 중요하다.

### EventEmitter 사용법
EventEmitter 객체를 사용할 때 주의할 점이 있는데, **이벤트를 발생시키기 전에 콜백 설정을 먼저 해줘야 한다**는 것이다.
만약 이벤트를 먼저 발생시키면 콜백 함수가 등록된 후에는 어떠한 이벤트도 발생하지 않기 때문에 함수는 동작하지 않는다.

이벤트의 특징에는 다음이 있다.
- 하나의 이벤트에 여러 개의 콜백을 설정할 수 있다
- 설정된 콜백들은 이벤트가 발생하면 등록된 순서대로 실행한다
- 이벤트를 발생시키고 콜백이 실행되는 과정은 하나의 EventEmitter 객체에서만 이루어진다.

예를 들어, 아래와 같은 코드를 실행시키면 어떤 결과가 출력될까?
```
const EventEmitter = require('events');
const myEmitter = new EventEmitter();
const myEmitter2 = new EventEmitter();

myEmitter.on('event', () => {
	console.log('Success');
});

myEmitter2.on('event', () => {
	console.log('Success2');
});

myEmitter.emit('event');
myEmitter.emit('event');
```
정답은 Success가 두 번 출력된다. 이벤트 이름은 'event'로 같지만 이 이벤트를 발생시키는 객체는 myEmitter객체이고 이는 myEmitter2와는 다른 객체이기 때문이다.

`myEmitter.emit(eventName[, ...args]);`
이벤트에 추가 정보를 함께 전달할 수도 있다. 전달할 정보를 추가 인자로 전달해주면 된다.

```
myEmitter.on(eventName, (arg1, arg2) => {
	console.log(arg1);
	console.log(arg2);
});
```
파라미터로 정보를 받아올 수 있다. 하지만 모든 인자를 받아야 하는 것은 아니다. 또한 여러 인자를 하나씩 넘겨주는 것 보다 여러 정보를 담은 객체 하나만을 넘겨주는 것이 좋다.
<br>
### 웹 서버 열어보기
```
const http = require('http');

const server = http.createServer((req, res) => {
	console.log(req.url);
});

server.listen(3000);
```
먼저 http 코어 모듈을 로드해 http 객체에 저장한다.
이후 http 객체의 createServer 메소드로 서버를 열고, 클라이언트의 요청이 들어올 때마다 실행될 함수를 등록한다.
server.listen(3000);은 서버가 3000번의 포트 번호를 가지고 클라이언트의 요청을 기다리게 한다.
<br>
### 라우팅
요청이 들어온 URL에 따라 서버가 다른 응답을 보내게 하는 것을 URL 라우팅 혹은 라우팅이라고 한다. 라우팅은 서버에서 이루어져야 할 가장 기본적인 동작 중 하나이다.
URL에 따라 다른 응답을 보내려면 클라이언트가 요청한 URL을 가져와야 한다.  URL은 req 객체의 프로퍼티로 들어오기 때문에 req.url 로 접근할 수 있다. 그러면 url은 도메인 네임 뒤의 /부터 경로를 모두 가져온다.
