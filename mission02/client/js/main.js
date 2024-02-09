/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/
const lists = getNode(".nav ul");
const body = getNode("body");
const visualImage = getNode(".visual img");
const nickname = getNode(".nickName");

function setBgcolor(index) {
  body.style.background = `linear-gradient(to bottom, ${
    data[index - 1].color[0]
  }, #000)`;
}

function setImage(name, alt) {
  attr(visualImage, "src", `./assets/${name.toLowerCase()}.jpeg`);
  attr(visualImage, "alt", alt);
}

function setNameText(name) {
  nickname.textContent = name;
}

function handleSlide(e) {
  e.preventDefault();

  const target = e.target.closest("li");

  if (!target) return;

  const list = [...lists.children];
  const index = target.dataset.index;
  const name = data[index - 1].name;
  const alt = data[index - 1].alt;

  list.forEach((li) => removeClass(li, "is-active"));
  addClass(target, "is-active");

  setBgcolor(index);
  setImage(name, alt);
  setNameText(name);
}

lists.addEventListener("click", handleSlide);
