# React Study Repository

<details>
  <summary>1. Babel과 Webpack</summary>
  
  **Babel:**
  - 최신 JavaScript(ES6+) 문법을 구형 브라우저에서 실행할 수 있도록 변환하는 컴파일러.

- 최신 JS 문법을 구버전 JS로 변환하여, 브라우저 호환성 문제를 해결함.

**Babel 프리셋:**
특정 기능을 처리하기 위한 플러그인 모음.

- `@babel/preset-env`: 최신 JavaScript 문법을 구버전 JS로 변환.
- `@babel/preset-flow`: Flow 타입 주석을 제거하고, 순수 JavaScript로 변환.
- `@babel/preset-react`: JSX 구문을 JavaScript로 변환.
- `@babel/preset-typescript`: TypeScript를 JavaScript로 변환.

**Babel 플러그인:**

- `@babel/plugin-transform-arrow-functions`: 화살표 함수를 일반 함수 표현식으로 변환.

**CommonJS와 브라우저:**

- CommonJS는 Node.js 환경에서 사용되는 모듈 시스템.

- 브라우저는 기본적으로 CommonJS 모듈을 지원하지 않음. CommonJS 방식으로 작성된 스크립트는 브라우저에서 오류를 발생시킬 수 있음.

- Webpack과 같은 번들러를 사용하면 CommonJS 모듈을 브라우저에서 실행 가능한 코드로 변환할 수 있음.

**Webpack:**

- 모듈 번들러로, 여러 파일들(JS, CSS, 이미지 등)을 하나의 파일로 번들링함.

- 코드 스플리팅, 의존성 그래프 생성, 성능 최적화 등의 기능을 제공함.

**Webpack 패키지 예시:**

- `webpack`: Webpack 본체
- `webpack-cli`: Webpack 명령어 인터페이스
- `babel-loader`: Babel을 Webpack과 연결하는 로더
