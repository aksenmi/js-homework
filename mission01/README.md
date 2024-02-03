# 네이버 로그인 페이지 구현

---

로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.

---

## 프로젝트 주요 구조

### 1. index.html

> 로그인 form/input 이 있는 페이지

### 2. welcome.html

> 로그인 성공 후 랜딩되는 페이지

### 3. js/main.js

> index.html 에서 전달된 데이터로 로그인 관련 로직을 처리

## 프로그램 전체 흐름

### 1. 이메일 input창에 input 이벤트가 발생했을 때,

이벤트 받을 때마다, 이메일 input 값을 emailReg 에 파라미터로 전달하여 true / false 체크

- **false 일 때**

  - input 창에 display:none 되어있던 오류 메시지를 is--invalid 클래스를 적용하여 노출한다

- **true 일 때**

  - is--invalid 클래스를 제거하여 오류 메시지를 숨긴다

### 2. form에 submit 이벤트가 발생했을때,

input name 기반으로 입력받은 email input 값을 체크하여

- **email 이 공백일 때**

  - alert("이메일을 입력해 주세요") 노출

- **email 공백이 아닐 때**
  - users 에서 해당 email 을 가진 객체가 존재하는지 체크
    - **해당 객체가 존재하면**
      - 입력된 password 가 찾은 객체의 password 와 일치하는지 체크
        - **password 와 일치하면**
          - welcome 페이지로 이동
        - **password 와 일치하지 않으면**
          - alert("비밀번호가 일치하지 않습니다.") 노출
    - **해당 객체가 존재하지 않으면**
      - alert("등록된 회원이 아닙니다") 노출
