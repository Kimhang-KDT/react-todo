"# react-todo"
  - typescript 사용

## Nest CLI 설치
npm i -g @nestjs/cli

## 리액트 앱 프로젝트 생성
npx create-react-app my-app --template typescript

### MUI 패키지 설치
npm install @mui/material @emotion/react @emotion/styled \
npm install @mui/icons-material

### react-router-dom 설치
npm install react-router-dom

### react-hook-form 설치
npm install react-hook-form

## NestJS 프로젝트 생성
nest new --strict project-name

### NestJS 프로젝트 세팅

  - 모듈 생성

  $ nest g mo users / todos / auth

  - 컨트롤러 생성

  $ nest g co users / todos / auth

  - 서비스 생성

  $ nest g s users / todos / auth

### 필요 패키지 설치
npm install @nestjs/common @nestjs/core @nestjs/mongoose @nestjs/jwt @nestjs/passport mongoose passport passport-jwt bcrypt class-validator class-transformer
npm install --save-dev @types/passport-jwt @types/bcrypt


### 실행
npm run start:dev

## 프로젝트 구조
