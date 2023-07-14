---
emoji: 💡
title: Interactive JavaScript (1)
date: '2023-07-13 20:22:00'
author: logkyung
tags: 블로그
categories: JavaScript
---

## JavaScript
### id로 태그 선택하기
`document.getElementById('id')`
단 하나의 요소만 선택할 때는 태그에 id를 부여하고 getElementById 메소드를 사용한다. 존재하지 않는 id의 태그에 접근하려고 하면 null을 리턴한다.

### class로 태그 선택
`document.getElementsByClassName('class')`
같은 클래스 이름을 가진 태그들의 배열의 형태로 리턴된다. 완벽한 배열이 아니기 때문에 배열의 메소드를 사용할 수는 없지만, 대괄호 표기법으로 요소들에 접근하거나 length를 사용하거나 for...of문을 사용할 수 있어 유사배열(Array-Like Object)이라고 한다.  순서는 태그의 깊이와 상관 없이 위에서부터 순서대로이다. 만약 없는 값에 접근하면 undefined 값을 리턴한다. 또 한 가지 주의할 점은 같은 클래스 이름을 여러 태그가 가질 수 있기 때문에 메소드 이름이 Element**s**라는 것.

### 태그 이름으로 선택
`document.getElementsByTagName('tag')`
클래스로 태그 선택할 때와 마찬가지로 같은 종류의 태그들이 배열의 형태로 리턴된다. 역시 유사배열의 형태를 가지고 있으며, css 선택자처럼 **\*** 값을 전달하면 모든 태그를 선택할 수 있다.

### css 선택자로 태그 선택
`document.querySelector('css')`
예를 들어, 아래와 같은 html 코드가 있을 때
```
<!DOCTYPE  html>
<html  lang="ko">
<head>
  <meta  charset="UTF-8">
  <title>JS with Codeit</title>
  <link  rel="stylesheet" href="style.css">
</head>
<body>
  <div id="myDiv">Hello World</div>
  <ul id="myList">
    <li class="my-list">JavaScript</li>
    <li class="my-list">Nodejs</li>
    <li class="my-list">React</li>
  </ul>
  <script  src="index.js"></script>
</body>
</html>
```
id로 선택하려면
- `document.querySelector('#myDiv');`
- `document.querySelector('#myList');`

와 같이 선택할 수 있다.
class 이름으로 선택하는 경우는 어떨까
`document.querySelector('.my-list');`와 같이 선택할 수 있다.
하지만 여기서 주의할 점은, 이렇게 하면 'my-list'라는 이름을 가진 li 태그 세 개가 선택될 것 같지만 querySelector 메소드는 여러 개 중 가장 첫 번째 요소만 선택한다. 따라서 여러 개를 같이 선택하고 싶은 경우는
`document.querySelectorAll('.my-list');` 처럼 querySelectorAll 메소드를 사용해야 한다. 마찬가지로 태그들이 nodeList 라는 유사 배열의 형태로 선택되며, 없는 값에 접근할 경우 비어있는 nodeList가 리턴된다.
