---
emoji: 💡
title: Express 정리
date: '2023-07-09 20:14:00'
author: logkyung
tags: 블로그
categories: Express
---

## Express
### Express 기초
Express: Node.js 환경에서 실행되는 서버 프로그램을 만들 때 사용하는 웹 프레임워크. 서버 프로그램에 필요한 최소한의 기능만 제공하기 때문에 전체적인 구조 설계는 개발자의 몫이다.

서버는 두 가지로 나뉜다.
- Web Server: 화면을 그리기 위해 필요한 HTML, CSS, JavaScript 코드들을 보내주는 서버
- API Server: Client가 request를 보내면 작업을 처리하고 결과 데이터를 response의 body에 담아서 보내는 서버
이번 학습에서는 API Server를 만드는 것을 목표로 한다.

`const app = express();`
express 객체를 생성한다. express로 만든 객체는 주로 app으로 하는 것이 관례이다.

```
app.get('/hello', (req, res) => {
	res.send('<h1>Hello Express!</h1>);
});
```
app.get(path, callback): 특정 path(여기서는 /hello)에 대해 들어온 요청과 응답을 다루는 콜백을 등록하는 함수이다.
res.send([body]): HTTP response를 보내는 response 객체의 메소드. 파라미터는 Buffer, String, 객체, Boolean, 또는 배열일 수 있다. 여기서는 HTML 코드를 화면에 표시한다.
특정 path에 대응하는 콜백을 route handler라고도 한다.

```
app.listen(3000, () => {
	console.log('Server is listening...');
});
```
서버가 요청을 들을 준비를 마치고 나면 콜백이 자동으로 실행된다.
<br>
URL에 가변적인 값이 들어가는 경우에 어떻게 처리할까?
예를 들어, 특정 직원의 정보를 요청하는 URL의 path가 '/api/members/2'와 같다고 할 때 members/ 뒤의 숫자는 직원에 따라 다 다를 것이다.
```
app.get('/api/members/:id', (req, res) => {
	// const id = req.params.id;
	const { id } = req.params;
	const member = members.find((m) => m.id === Number(id));
	if (member) {
		res.send(member);
	} else {
		res.status(404).send({ message: "There is no such member" });
	}
});
```
path에 있는 ":id"와 같은 부분을 route parameter라고 한다. ":" 기호는 뒤에 오는 값을 req.params의 id 속성에 담으라는 express의 표기법이다.
즉 '/api/members/2'에서 2라는 값은 req.params.id의 값이 된다.
이제 members 배열에서 해당 id와 일치하는 직원을 찾아 member에 넘겨주면 되는데 `const member = members.find((m) => m.id === Number(id));` 가 그것이다. 배열의 find 메소드를 이용해, 인자로 들어온 콜백함수가 true인 여러 요소 중 첫 번째 요소를 리턴한다.
해당 직원의 정보가 없을 때를 else문 안에서 처리하고 있다. 리퀘스트가 요청한 id의 직원 정보가 없다면, response의 상태 코드에 적절한 코드를 설정해줘야 한다. 여기서는 404 코드를 설정해주었다. 이때 body에 추가 메시지를 담아 보내려면 send 메소드를 뒤이어 붙이고, 인자로 정보를 넣어주면 된다. 문자열 자체를 보내는 것보다, 메시지도 하나의 JSON 데이터 형태로 넣어주는 게 나중에 추가 정보를 넣어야 할 때 확장하기 용이하다.
