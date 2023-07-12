---
emoji: 💡
title: Express 정리 (2)
date: '2023-07-11 21:19:00'
author: logkyung
tags: 블로그
categories: Express
---

## Express (2)
### ORM으로 데이터베이스 작업
자바스크립트로 데이터베이스를 다루기 위해서는 '클라이언트 객체'가 필요하다. 클라이언트 객체를 사용하기 위해서는, ORM을 이용해 자바스크립트로 작성한 데이터베이스 관련 코드를 자동으로 SQL로 변환한 후 클라이언트 객체를 통해 데이터베이스로 전달하는 방식이 있다.

1. 필요한 패키지를 설치한다.
`npm install mysql2 sequelize sequelize-cli`

2. Sequelize를 사용하기 위한 준비작업
`npx sequelize init`
- config, migrations, models 디렉토리 생성
- config/config.json 파일 생성
- models/index.js 파일 생성

3. config.json의 development 객체에 db 정보 설정

4. 데이터베이스 생성
`npx sequelize db:create --env development`
개발용 환경의 데이터베이스 생성

5. 테이블 생성
`npx sequelize model:generate --name modelName --attributes attrName:dataType,attrName:dataType ...`
데이터베이스에서 하나의 테이블은 sequelize에서 하나의 class에 해당하고, class의 객체 하나는 테이블에서 하나의 row에 해당한다.
이때 modelName은 단수로 쓴다. 하지만 sequelize는 자동으로 복수형으로 변환해서 테이블에 적용한다. 또한 id column은 sequelize가 자동 생성하기 때문에 작성할 필요가 없다.
- migrations 디렉토리에 변경사항에 대한 정보가 담긴 마이그레이션 파일이 생성된다.
- models 디렉토리에 modelName.js 파일이 생성된다
- 마이그레이션 파일에 createdAt, updatedAt 속성이 자동으로 추가되어있다. 이 속성의 defaultValue 속성에 Sequelize.fn('now')를 추가해 현재 시간이 설정되게 한다.

6. 데이터베이스에 테이블 생성
`npx sequelize db:migrate`
migrations 디렉토리에 있는 모든 마이그레이션 파일들을 적용한다.

7. seed 데이터 생성
`npx sequelize seed:generate --name seedName`
seeders 디렉토리에 (생성일자와시간)-seedName.js 파일이 생성된다. 파일에 JSON 형식의 데이터 배열로 넣어준다.

8. 테이블에 데이터 추가
`npx sequelize db:seed:all`
seeders 디렉토리에 있는 모든 seed 파일들이 적용된다.
