---
emoji: 💡
title: 230831 | Programmers
date: '2023-08-31 20:18:00'
author: logkyung
tags: 블로그
categories: 블로그
---

## 소수 찾기
### 문제 설명
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다. (1은 소수가 아닙니다.)

### 제한 조건
n은 2이상 1000000이하의 자연수입니다.

### 입출력 예
|n|result|
|-|-|
|10|4|
|5|3|

### 입출력 예 설명
#### 입출력 예 #1
1부터 10 사이의 소수는 [2, 3, 5, 7] 4개가 존재하므로 4를 반환

#### 입출력 예 #2
1부터 5 사이의 소수는 [2, 3, 5] 3개가 존재하므로 3를 반환

### 내 풀이
#### 첫 번째 시도
냅다 배열로 풀려고 함 -> 시간초과

#### 두 번째 시도
isPrime 함수에서 n의 반까지만 가도 된다는 점 이용 -> 시간초과

#### 세 번째 시도
다시, $\sqrt{n}$ 까지만 가면 된다는 점 이용 -> 시간초과

#### 네 번째 시도
에라토스테네스의 체 -> 성공

각각 시간 복잡도 비교해보기