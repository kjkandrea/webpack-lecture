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

이 플러그인은 HTML 파일을 후처리하는데 사용한다. 빌드 타임의 값을 넣거나 코드를 압축할수 있다.

이런식으로 정의한 후 EJS로 꺼내쓸 수 있다.

``` javascript
// webpack.config.js

new HtmlWebpackPlugin({
    template: './src/index.html',
    templateParameters: {
        env: process.env.NODE_ENV === 'development' ? ' - 개발환경' : ''
    }
})
```

``` html
// index.html

<title>Document<%= env %></title>
```

```
NODE_ENV=development webpack && open ./dist/index.html
```

이렇게하면 html title이 'Document - 개발환경' 이라고 출력되는걸 볼 수 있다.

#### CleanWebpackPlugin

빌드 이전 결과물(dist)을 제거하는 디렉토리 이다.

```
npm install -D clean-webpack-plugin
```

``` javascript
// webpack.config.js

const { CleanWebpackPlugin } = require('clean-webpack-plugin')

...
plugins: [
    new CleanWebpackPlugin()
]
...
```

#### MiniCssExtractPlugin

css 빌드결과물을 파일로 따로 하나 뺀다. `process.env.NODE_ENV`로 분기해서 사용하는듯.

```
npm install -D mini-css-extract-plugin
```

## babel

```
npm install -D @babel/core @babel/cli
```

```
npx babel app.js
```

바벨은 세 단계로 빌드를 진행한다.

* 파싱(Parsing)
* 변환(Transforming)
* 출력 (Printing)

코드를 읽고 추상 구문 트리(AST)로 변환하는 단계를 **파싱**이라고 한다. 이것은 빌드 작업을 처리하기에 적합한 자료구조인데 컴파일러 이론에 사용되는 개념이다.
추상 구문 트리를 변경하는 것이 **변환** 단계이다. 실제로 코드를 변경하는 작업을 한다.
변경된 결과물을 **출력**하는 것을 마지막으로 바벨은 작업을 완료한다.

### 프리셋

바벨은 몇가지 기본 프리셋을 제공하는데, `preset-env`는 ECMAScript2015+를 변환할 때 사용한다. 사용해보자.

```
npm install -D @babel/preset-env
```

``` javascript
// babel.config.js

module.exports = {
  presets: [
    '@babel/preset-env'
  ]
}
```

```
npx babel app.js
```