## JavaScript 배열 함수 연습

<br/>

- 배열 함수를 익히기 위한 연습 문제입니다.
- 각 문제에서 언급한 조건을 참고하여 문제를 풀어 주세요.
- 각 문제의 출력값은 `Expected value` 와 **완전히 동일**해야 합니다.

<br/>

---
<br/>
<br/>

1. 다음과 같이 순서가 없는 숫자들이 배열로 이루어져 있다.<br/>
작은 수부터 큰 수까지 한 눈에 보이도록 오름차순 정렬하여 배열로 출력하시오.
> Original value:
```javascript
[ 5, 8, 4, 9, 2, 1, 3, 6, 0, 7, 10 ]
```

> Expected value:
```javascript
[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```
<br/>
<br/>

2. 다음 배열의 각 요소는 기본적으로 천단위가 적용되어 있는 요소들이다.<br/>
천단위를 없애고 직접 1,000을 곱하여 새로운 배열로 출력하시오.
> Original value:
```javascript
[ 1, 3, 5, 7, 9 ]
```

> Expected value:
```javascript
[ '1,000', '3,000', '5,000', '7,000', '9,000' ]
```
<br/>
<br/>

3. 다음 배열의 요소들의 텍스트를 일괄 변경하려고 한다.<br/>
가장 앞 글자를 대문자로 바꾸고, 가장 뒤 문자에 `, js` 문자열을 포함하여 출력하시오.
> Original value:
```javascript
[ 'hello', 'hi', 'welcome', 'great', 'awesome' ]
```

> Expected value:
```javascript
[ 'Hello, js', 'Hi, js', 'Welcome, js', 'Great, js', 'Awesome, js' ]
```
<br/>
<br/>

4. 다음 배열의 요소들 중 5글자 이상인 요소들을 찾아 새로운 배열로 출력하시오.
> Original value:
```javascript
[ 'node', 'go', 'c', 'java', 'python' ,'csharp', 'spring' ]
```

> Expected value:
```javascript
[ 'python', 'csharp', 'spring' ]
```
<br/>
<br/>

5. 게시판에서 한 줄에 표시하기에 너무 긴 문장을 끊어서 표시하려고 한다.<br/>
50글자가 넘어가는 글자일 경우 51글자부터는 `...` 으로 표시하시오.
> Original value:
```javascript
[
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    'when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    'It has survived not only five centuries,'
]
```

> Expected value:
```javascript
[
    'Lorem Ipsum is simply dummy text of the printing a...',
    "Lorem Ipsum has been the industry's standard dummy...",
    'when an unknown printer took a galley of type and ...',
    'It has survived not only five centuries',
]
```
<br/>
<br/>

6. 다음 객체에서 items 요소를 한 항목씩 웹 페지이지에 출럭하시오.
> 이 문제는의 `CSS` 결과물은 `Expected value` 와 동일하지 않아도 되며, 출력된 값의 형태 (`HTML`, `JavaScript`) 만 같으면 됩니다.
```javascript
[
    {
        "id": 1,
        "title": "서비스 이용 약관",
        "content": "서비스 이용 약관 동의 내용",
        "description": "",
        "isRequired": true
    },
    {
        "id": 2,
        "title": "개인정보 수집 및 이용 약관",
        "content": "개인정보 수집 및 이용 약관 동의 내용",
        "description": "",
        "isRequired": true
    },
    {
        "id": 3,
        "title": "광고성 정보 수신",
        "content": "광고성 정보 수신 동의 내용",
        "description": "다양한 프로모션 정보를 보내드립니다.",
        "isRequired": false
    }
]
```
<img src="./source/6/result.png">

<br/>
<br/>

7. 다음은 모 플랫폼의 회원 목록이다.<br/>
`simmy` 회원이 로그인 할 경우, 해당 회원의 이름을 가져와 출력하시오.
(UI 표현, JS 로직으로 표현 등 표현 방식은 무관. 단, JS의 배열 함수 사용 필수)

<details>
<summary>코드 보기</summary>
<div markdown="1">

```javascript
[
  {
    "id": 1,
    "email": "simmy@ureca.im",
    "name": "심소망",
    "description": "웹 프론트엔드 개발자",
  },
  {
    "id": 2,
    "email": "emily@ureca.im",
    "name": "염혜지",
    "description": "리액트 개발자",
  },
  {
    "id": 3,
    "email": "la@ureca.im",
    "name": "라정우",
    "description": "백엔드 개발자",
  },
  {
    "id": 4,
    "email": "andy@ureca.im",
    "name": "한장현",
    "description": "인프라 관리자",
  },
]
```

</div>
</details>

<br/>
<br/>

8. 다음은 모 플랫폼의 이용 약관 데이터이다.<br/>
다음 조건을 준수하여 UI를 구현하시오.

<details>
<summary>조건 보기</summary>
<div markdown="1">

- 최상단에 `모든 약관에 동의합니다` 를 구현할 것
- `필수 약관`에 모두 동의된 상태이면 `모든 약관에 동의합니다`에 자동 체크될 것
- `필수 약관`에 모두 동의한 상태에서 `필수 약관` 중 하나의 동의를 풀면 `모든 약관에 동의합니다`가 비활성화 될 것
- 각 약관을 클릭하면 팝업으로 `내용`이 출력될 것

</div>
</details>

<br/>

<details>
<summary>코드 보기</summary>
<div markdown="1">

```javascript
[
  {
    "id": 1,
    "email": "이용 약관 1",
    "content": "이용 약관 1 내용",
    "isRequired": true
  },
  {
    "id": 2,
    "email": "이용 약관 2",
    "content": "이용 약관 2 내용",
    "isRequired": true
  },
  {
    "id": 3,
    "email": "이용 약관 3",
    "content": "이용 약관 3 내용",
    "isRequired": true
  },
  {
    "id": 4,
    "email": "이용 약관 4",
    "content": "이용 약관 4 내용",
    "isRequired": true
  },
  {
    "id": 5,
    "email": "이용 약관 5",
    "content": "이용 약관 5 내용",
    "isRequired": true
  },
  {
    "id": 6,
    "email": "이용 약관 6",
    "content": "이용 약관 6 내용",
    "isRequired": true
  },
  {
    "id": 7,
    "email": "이용 약관 7",
    "content": "이용 약관 7 내용",
    "isRequired": true
  },
  {
    "id": 8,
    "email": "이용 약관 8",
    "content": "이용 약관 8 내용",
    "isRequired": true
  },
  {
    "id": 9,
    "email": "이용 약관 9,
    "content": "이용 약관 9 내용",
    "isRequired": true
  },
  {
    "id": 10,
    "email": "이용 약관 10",
    "content": "이용 약관 10 내용",
    "isRequired": true
  },
  {
    "id": 11,
    "email": "이용 약관 11",
    "content": "이용 약관 11 내용",
    "isRequired": false
  },
  {
    "id": 12,
    "email": "이용 약관 12",
    "content": "이용 약관 12 내용",
    "isRequired": false
  },
   {
    "id": 13,
    "email": "이용 약관 13",
    "content": "이용 약관 13 내용",
    "isRequired": false
  },
  {
    "id": 14,
    "email": "이용 약관 14",
    "content": "이용 약관 14 내용",
    "isRequired": false
  },
  {
    "id": 15,
    "email": "이용 약관 15",
    "content": "이용 약관 1 내용",
    "isRequired": false
  },
  {
    "id": 16,
    "email": "이용 약관 16",
    "content": "이용 약관 16 내용",
    "isRequired": false
  },
  {
    "id": 17,
    "email": "이용 약관 17",
    "content": "이용 약관 17 내용",
    "isRequired": false
  },
  {
    "id": 18,
    "email": "이용 약관 18",
    "content": "이용 약관 18 내용",
    "isRequired": false
  },
  {
    "id": 19,
    "email": "이용 약관 19",
    "content": "이용 약관 19 내용",
    "isRequired": false
  },
  {
    "id": 20,
    "email": "이용 약관 20",
    "content": "이용 약관 20 내용",
    "isRequired": false
  },

]
```