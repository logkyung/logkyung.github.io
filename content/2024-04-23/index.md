---
emoji: ✏️
title: 한 입 크기로 잘라 먹는 TypeScript (1)
date: '2024-04-23 23:00:00'
author: logkyung
tags: TypeScript
categories: 블로그
---

## 1. TypeScript 실행하기

### tsc로 컴파일하고 실행
`tsc 파일명`은 특정 파일을 컴파일 하도록 타입스크립트 컴파일러에게 지시하는 명령어. 위 명령어를 입력하면 자바스크립트 파일이 생성되고, 이렇게 컴파일 된 자바스크립트 코드는 node를 이용해 실행.
- tsc src/index.ts : src 폴더 내에 index.js 파일 생성
- node src/index.js: 컴파일 된 js 코드 실행

### tsx(TypeScript Execute)로 실행
하지만 `ts-node`는 Node 20 버전 이상에서는 더 이상 동작하지 않음. 따라서 tsx로 대체. `ts-node 파일명`은 `tsx 파일명`과 같은 동작을 한다.
타입스크립트 코드를 실행하기 위해 tsc를 이용해 타입스크립트 코드를 자바스크립트로 변환, Node.js로 자바스크립트 코드를 실행. `tsx`는 명령어 한 번으로 두 번의 과정을 동시에 수행. 자바스크립트 파일을 생성하지 않고 한번에 타입스크립트 파일을 실행.

## 2. TypeScript 컴파일러 옵션 설정하기
- tsc --init: tsconfig.json 파일을 생성

- "include": ["폴더명"]
: ts 파일을 컴파일할 때 'tsc [파일 경로]' 명령어를 이용해서 컴파일. 하지만 폴더 내에 파일이 많이 있다면 하나씩 일일이 명령어를 입력하기 어려울 것. include 설정을 이용하면 해당 폴더 내의 모든 ts 파일을 한 번에 컴파일 가능.
