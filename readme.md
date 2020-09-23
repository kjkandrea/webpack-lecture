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