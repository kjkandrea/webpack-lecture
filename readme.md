## 유의적 버전(Sementic Version)

``` json
"dependencies": {
    "react": "^16.13.1"
}
```

* 주 버전(Major Version): 기존 버전과 호환되지 않게 변경한 경우
* 부 버전(Minor version): 기존 버전과 호환되면서 기능이 추가된 경우
* 수 버전(Patch version): 기존 버전과 호환되면서 버그를 수정한 경우

`^version`(caret) 은 현재 버전과 호환 가능한 주 버전만 바뀌지 않는 버전을 의미한다. 

## webpack

```
npm install -D webpack webpack-cli
```

## loader

* `css-loader` 를 사용하면 javascript 파일에서 `.css` 파일을 import할 수 있다.
* `style-loader` 를 사용하면 변환된 css 파일을 해석할 수 있다.
* `file-loader` 를 사용하면 이미지들 파일 리소스를 해석할 수 있다.
* `url-loader` 를 사용하면 이미지등 리소스를 해시코드로 바꾸어 적용할 수 있다.

## plugin

로더가 파일 단위로 처리하는 반면 플러그인은 번들된 결과물을 처리한다. 번들된 자바스크립트를 난독화 한다거나 특정 텍스트를 추출하는 용도로 사용한다.

### 자주 사용하는 플러그인

#### BannerPlugin

dist에 빌드된 결과물에 빌드 정보, 커밋 정보들을 표기하기 위해 사용함.

``` javascript
// webpack.config.js 

const webpack = require('webpack')
const childProcess = require('child_process')

module.exports = {
  ...
  plugins: [
    new webpack.BannerPlugin({
      banner: `
        Build Date: ${new Date().toLocaleString()}
        Commit Version: ${childProcess.execSync('git rev-parse --short HEAD')}
        Author: ${childProcess.execSync('git config user.name')}
      `
    }),
  ]
```

뭐 이런식으로 사용하면 dist/main.js에 다음과 같이 주석이 추가된다.

``` javascript
// dist/main.js

/*!
 * 
 *  Build Date: 9/27/2020, 3:02:35 PM
 *  Commit Version: c4aa797
 * 
 *  Author: Jongkeun Kim
 * 
 *       
 */
```

#### DefinePlugin

dev, production 등 환경 의존적인 정보를 소스가 아닌 다른곳에서 관리하기 위하여 사용함.
환경변수를 만들어 어플리케이션에서 사용할 수 있다.

``` javascript
// webpack.config.js

plugins: [
    new webpack.DefinePlugin({
        "api.domain": JSON.stringify("http://dev.api.domain.com")
    })
]

```

이렇게 만들면...

``` javascript
// app.js

document.addEventListener('DOMContentLoaded', () => {
  const preEl = document.createElement('pre')
  preEl.textContent = `
    빌드 환경 : ${process.env.NODE_ENV}
    api 도메인 주소 : ${api.domain}
  `
  document.body.prepend(preEl)
})
```

이런식으로 접근하여 생성한 환경변수를 사용할 수 있다. 

#### HTMLTemplatePlugin

외부 패키지이다. 설치해보자.

```
npm i -D html-webpack-plugin 
```
