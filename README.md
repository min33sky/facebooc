# FacebooC

## Description

....

## Modules

- nextjs
- tailwindcss
- [NextAuth](https://next-auth.js.org/)

## Coding Note

### Facebook LOGIN API 인증 문제 해결하기

`http`로 로그인이 안되는 문제가 있다.

- [해결 링크](https://jsikim1.tistory.com/114)

### 파일 업로드에서 같은 파일 업로드시 반응 없을때 해결

input의 onchange 이벤트를 통해 파일 업로드를 하는데 같은 파일을 다시 선택할 경우 반응이 없는 문제가 생긴다. 해결하기 위해선 e.target.value를 ''으로 초기화시켜주면 된다.

```js
const onChange = (e) => {
  onUpload(e.target.files[0]);
  e.target.value = '';
};
```

### Firebase의 timestamp 관련

[링크](https://firebase.google.com/docs/reference/js/firebase.firestore.Timestamp)

### "url" parameter is valid but upstream response is invalid 해결하기

next의 Image 컴포넌트를 사용해서 이미지를 불러올 때 위와같은 에러가 뜰 경우가 있다.
`next@11.1.0` (현재 최신버전)에서 발생하는 에러고 `11.0.1`에선 제대로 작동한다.

### 배포했을 때 Facebook 로그인이 안되는 경우

페이스북 개발자 사이트에 들어간 후 Facebook 로그인 - 설정에 들어가서 유효한 OAuth 리디렉션 URL에 콜백 URL을 작성하면 된다.
예) httsp:facebooc.vercelapp.api/auth/callback/facebook
[콜백 관련 링크](https://next-auth-example.vercel.app/api/auth/providers)

### Firebase Storage Rule 문제

아래와 같은 메세지가 뜨면서 업로드가 안되는 문제가 있다.

```
react_devtools_backend.js:2842 FirebaseError: Firebase Storage: User does not have permission to access 'posts/W7oJrjAIBRvEoY2a2YXS'. (storage/unauthorized)
{
  "error": {
    "code": 403,
    "message": "Permission denied. Could not perform this operation"
  }
}

```

Storage의 Rule 설정을 안해서 생기는 문제고 아래와 같이 해결한다.

```
<!-- before -->
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}

<!-- After -->
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write;
    }
  }
}


```
