const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("userEmail");
const pwdInput = document.getElementById("userPassword");

const users = [
  {
    id: "asd@naver.com",
    pw: "spdlqj123!@",
  },
  {
    id: "bsd@naver.com",
    pw: "spdlqj111!@",
  },
];

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

function handleCheckId() {
  let email = emailInput.value;

  if (email && !emailReg(email)) {
    emailInput.classList.add("is--invalid");
  } else {
    emailInput.classList.remove("is--invalid");
  }
}

function findUserById(id) {
  return users.find((userObj) => userObj.id === id);
}

function login(id, pw) {
  let user = findUserById(id);

  if (!user) {
    alert("등록된 회원이 아닙니다.");
    return;
  }

  if (user.pw !== pw) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  location.href = "/mission01/welcome.html";
}

function handleSubmit(e) {
  e.preventDefault();

  let id = this.userEmail.value;
  let pw = this.userPassword.value;

  if (!id) {
    alert("이메일을 입력해 주세요.");
    return;
  }

  login(id, pw);
}

emailInput.addEventListener("input", handleCheckId);
loginForm.addEventListener("submit", handleSubmit);
