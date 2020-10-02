import * as math from "./utils/mathUtil.js";
import "./app.css";
import nyancat from "./nyancat.jpg";
import FormView from "./views/FormView.js";

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

  import(/* webpackChunkName: "view" */ "./views/UserList.js").then(
    (module) => {
      const result = module.default;
      result.render();
    }
  );
  FormView.render();
});

if (module.hot) {
  console.log("HMR working...");

  module.hot.accept("./views/FormView.js", () => {
    console.log("HMR FormView modify");
    FormView.render();
  });

  module.hot.accept("./views/UserList.js", () => {
    console.log("HMR UserList modify");
    // UserList.render();
  });
}

console.log("production 환경에서 console.log 제거 테스트");
