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




