import * as math from "./utils/mathUtil.js";
import "./app.css";
import nyancat from "./nyancat.jpg";
import UserList from "./views/UserList.js";

console.log(math.sum(2, 3));
console.log(process.env.NODE_ENV);

document.addEventListener("DOMContentLoaded", async () => {
  const preEl = document.createElement("pre");
  preEl.textContent = `
    빌드 환경 : ${process.env.NODE_ENV}
    api 도메인 주소 : ${api.domain}
  `;
  document.body.prepend(preEl);

  const imageEl = document.createElement("img");
  imageEl.src = nyancat;
  document.body.append(imageEl);

  UserList.render();
});
