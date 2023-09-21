const section = document.querySelector("section");
const num = 200;

const imgs = createImg(section, num);

window.addEventListener("mousemove", (e) => {
  const percent = getPercent(e, num);
  activation(imgs, percent);
});

function getPercent(e, num) {
  const curPos = e.pageX;
  const wid = window.innerWidth;
  return parseInt((curPos / wid) * num);
}

function createImg(target, num) {
  for (let i = 0; i <= num; i++) {
    const img = document.createElement("img");
    const src = document.createAttribute("src");
    src.value = `img/pic${i}.jpg`;
    img.setAttributeNode(src);
    target.append(img);
  }
  const imgs_ = target.querySelectorAll("img");
  let count = 0;
  imgs_.forEach((img) => {
    img.onload = () => {
      count++;
      if (count === num) console.log("모든 이미지 로딩 완료");
    };
  });
  return imgs_;
}

function activation(arr, index) {
  arr.forEach((el) => (el.style.display = "none"));
  arr[index].style.display = "block";
}
