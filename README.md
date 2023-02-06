## 프로젝트 소개

맛집 리스트를 보여주고 리스트 중 하나의 아이템을 선택하면 팝업으로 상세 설명을 보여줍니다.

<br>

## 실행방법

**`git clone https://github.com/unidagit/eat-mall.git`**

1. json-server 실행법 <br/>
   **`json-server --watch ./json-server/db.json --port 9000`**

2. Next , start the Project : <br/>
   **`yarn dev`**

<br>

## ⚒ 개발 환경

### [사용한 라이브러리 및 프레임워크]

- Next.js
  - SSR을 구현하기위해 적용하였습니다.
- React
  - 재사용가능한 컴포넌트 단위로 작성하기 위해 적용했습니다.
- javaScript
- Tailwind CSS
  - 커스터마이징이 유연하고 반응형 페이지를 쉽게 구현할수 있어 적용하였습니다.
- React Spinners
  - api를 호출하고 데이터를 받아오는 동안 사용자들에게 로딩중이라는 것을 알리기 위해 적용했습니다.
- React Icons
  - Modal Close 버튼과 menu 버튼으로 아이콘을 사용하였습니다.
- axios

  - return을 promise 객체로 해주기 때문에 response 데이터를 다루기가 편리하여 적용하였습니다.

  <br>

## 구현 내용

<br>

## 필수 수행 항목

- [x] 헤더 - 바디 - 푸터 형식으로 표현
- [x] 헤더에는 프로젝트이름(AWESOME FOOD STORE)과 메뉴(ABOUT + STORE) 표현
- [x] 푸터에는 카피라이트 추가(@ 2020 내이름)
- [x] ABOUT엔 간단한 프로젝트 소개 문구 표현 (정적 페이지)
- [x] STORE 리스트는 정사각형 이미지 그리드로 표현 (REST API 사용)
- [x] 하나의 아이템을 선택하면 팝업을 띄우고 맛집 이름과 사진, 설명, 홈페이지 바로가기(url이 있을 경우)를 표현
- [x] 팝업 오른쪽 위에 X버튼을 넣고 누르면 팝업이 닫힘
- [x] 정의하지 않은 url로 접근시 에러 페이지를 보여주고 5초 후 메인 페이지로 이동
