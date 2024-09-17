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

## NestJS 프로젝트 생성
nest new --strict project-name

### NestJS 프로젝트 세팅

  - 모듈 생성

  $ nest g mo users / todos / auth

  - 컨트롤러 생성

  $ nest g co users / todos / auth

  - 서비스 생성

  $ nest g s users / todos / auth

### dotenv 모듈 설치
npm install dotenv

## 프로젝트 구조
/frontend
  /src
    /components
      Header.tsx
      TodoForm.tsx
      TodoList.tsx
      TodoItem.tsx
    /pages
      Home.tsx
      Login.tsx
      Register.tsx
      TodoListPage.tsx
    /services
      api.ts
    /types
      todo.ts
      user.ts
    App.tsx
    index.tsx

/backend
  /src
    /auth
      auth.module.ts
      auth.service.ts
      auth.controller.ts
    /users
      users.module.ts
      users.service.ts
      users.controller.ts
    /todos
      todos.module.ts
      todos.service.ts
      todos.controller.ts
    app.module.ts
    main.ts
