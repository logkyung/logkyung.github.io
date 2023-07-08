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

`myEmitter.on(...)`
on 메소드를 이용해 이벤트가 발생했을 때 실행할 콜백을 등록할 수 있다.

`myEmitter.emit('테스트명');`
이후 emit 메소드로 이벤트를 직접 발생시킬 수 있다.
