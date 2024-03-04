console.log("connected");

/*
  조건문
  - 어떤 조건에 따라 논리 구조를 나눔
  - 각 조건을 '분기'라고 함
  - 조건에 따라 서로 다른 문장을 실행
*/

/* 
  if문의 기본 구조

  if(조건) {
    조건이 참인 경우 실행될 코드
  }
*/

// 조건이 하나만 있는 경우
if (5 > 3) {
  console.log("5는 3보다 큽니다.");
}

// 만약 조건이 false라면 해당 코드 블럭이 실행되지 않고 넘어감
if (5 > 7) {
  console.log("조건이 false이므로 이 코드블럭은 실행되지 않고 넘어감.");
}

// let number = Number(prompt("숫자를 입력해주세요.")); // 입력받은 값을 Number 타입으로 강제 형변환

// if, else문
// 입력받은 수가 10보다 클 때 if 다음의 코드블럭을 실행
// 입력받은 수가 10보다 작을 때 else문의 코드블럭을 실행
// if (number > 10) {
//   console.log("입력받은 수가 10보다 큽니다.");
// } else {
//   console.log("입력받은 수가 10보다 작습니다.");
// }

// else if문
// if, else문에 다른 조건을 추가하는 방식
// else문은 하나만 사용 가능. 하지만 else if문은 여러개 사용 가능
// 여러개의 분기로 나누고 싶으면 else if를 여러개 사용해서 조건을 많이 작성할 수 있음
// if (number > 10) {
//   console.log("입력받은 수가 10보다 큽니다.");
// } else if (number === 10) {
//   console.log("입력받은수가 10입니다.");
// } else console.log("입력받은 수가 10보다 작습니다.");

console.clear();

// 성적 계산하는 프로그램
/*
const score = Number(prompt("성적을 입력해주세요."));
// 조건이 true가 나온다면 해당 코드블럭을 실행하고, 나머지 조건문은 실행되지 않음
// 위의 조건을 통과하고 다음 조건문을 실행하는 경우 위의 조건들이 모두 false였음을 잊지 않기
if (score > 100) {
  // 100점보다 큰 점수는 없음
  console.log("점수가 잘못 입력되었습니다.");
} else if (score >= 90) {
  // 100~90점 사이의 점수일 때 실행
  console.log("A");
} else if (score >= 80) {
  // 89~80점 사이의 점수일 때 실행
  console.log("B");
} else if (score >= 70) {
  // 79~70점 사이의 점수일 때 실행
  console.log("C");
} else if (score >= 60) {
  // 69~60점 사이의 점수일 때 실행
  console.log("D");
} else {
  // 59점 이하의 점수일 때 실행
  console.log("F");
}
*/

// 나이 실습
// let age = Number(prompt("나이를 입력하세요."));

// if (age >= 20) {
//   console.log("성인");
// } else if (age >= 17) {
//   console.log("고등학생");
// } else if (age >= 14) {
//   console.log("중학생");
// } else if (age >= 8) {
//   console.log("초등학생");
// } else if (age >= 0) {
//   console.log("유아");
// } else {
//   console.log("음수값이 들어왔습니다.");
// }

// 다른 방법
// if (age < 0) {
//   console.log("음수값이 들어왔음");
// } else if (age < 8) {
//   console.log("유아");
// } else if (age < 14) {
//   console.log("초등학생");
// } else if (age < 17) {
//   console.log("중학생");
// } else if (age < 20) {
//   console.log("고등학생");
// } else if (age < 150) {
//   console.log("성인");
// } else if (age >= 150) {
//   console.log("나이로 들어올 수 없는 값이 입력되었습니다.");
// }

// 추가
// if (age >= 150 && age < 0) {
//   console.log('나이로 들어올 수 없는 값이 입력되었습니다.');
// } ... 나머지 코드

console.log("--------------------------------------------");
// 조건문 중첩하기
// 조건문 안제 조건문 작성 가능
const userId = "aa";
const userPw = "123";

// 조건문 함수로 구현
/**
 * 입력 받은 아이다와 비밀번호가 맞는 지 확인 후 알림창 띄움
 */
function loginUser() {
  const inputId = prompt("아이디를 입력해주세요.");
  const inputPw = prompt("비밀번호를 입력해주세요.");

  if (userId === inputId && userPw === inputPw) {
    console.log("로그인 성공!");
    alert(`안녕하세요, ${inputId}님`);
  } else if (userId !== inputId) {
    // console.log("로그인 실패");
    alert("아이디를 다시 입력해주세요.");
  } else if (userPw !== inputPw) {
    console.log("로그인 실패");
    alert("비밀번호를 다시 입력해주세요.");
  }
}

  loginUser();


// switch 문
// switch의 괄호 안에 case의 조건으로 비교식에 들어갈 수 없음
/*
  1. 변수 x의 값과 첫번째 case문의 값 3을 비교
  2. 두 값이 동올하면 :(콜론) 뒤의 코드가 실행
  3. break문을 통해 해당 스코프에서 빠져나옴
  4. 만약 첫번째 case문의 값과 x가 다르면 다음 case 값과 비교
  5. 모든 case문의 값과 x의 값이 다르다면 default 다음의 코드 실행
  
  # break는 필수 작성
  # default는 생략 가능
  
*/

let x = 6;

// switch문의 괄호안에는 조건이 아닌 값이 들어감
// case에도 조건이 아닌 값을 작성
switch (x) {
  case 3:
    console.log('x = 3 ㅇㅇ');
    break;

  case 4:
    console.log('x = 4 ㅇㅇ');
    // break 작성하지 않으면 case 4를 실행하고 싶을 때 case 5까지 모두 실행됨
    // 해당 스코프를 빠져나가지 못함
    // 원하는 코드가 실행된 이 후 꼭 break 를 사용해 스코프를 빠져 나올 수 있도록 작성
    break;
  
  case 5:
    console.log('x = 5 ㅇㅇ');
    break;
  default:
    console.log('x = 3, 4, 5 가 아닌 다른 값');
}

// if문으로 작성 된 성적 계산식 switch문 사용하여 수정
// switch(number) {
//   case 100:
//     console.log('A');
//   break;

//   case 90:
//     console.log('B');
//   break;
//   ...
// }
// 위처럼 작성하는 경우 100, 90, ... 이런 값이 아니면 원하는 동작을 하지 않음
// 이런 경우 점수는 10으로 나눈 몫을 찾아봐 number로 전달 후 case 값 변경

let number = 88;

switch (parseInt(number / 10)) {
  case 10:
  case 9:
    console.log("A");
    break;
  case 8:
    console.log("B");
    break;
  case 7:
    console.log("C");
    break;
  case 6:
    console.log("D");
    break;
  default:
    console.log("F");
    break;
}

// 삼항연산자
// 조건식 ? 조건이 참일 때 실행될 코드 : 조건이 거짓일 때 실행될 코드

// 홀수, 짝수 판별하기
let num = 5;

if (num%2 ===1) {
  console.log('홀수');
} else {
    console.log('짝수');
}

// 삼항연산자로 변환
num % 2 === 1 ? '홀수' : '짝수';

let fruit = 'apple';

console.log(fruit === 'apple' ? 'apple' : 'not apple');

let isLoggedIn = true;
isLoggedIn === true 
  ? console.log('로그인 유저입니다.')
  : console.log('로그인 하지 않은 유저');

isLoggedIn = true
  ? number > 10
    ? "로그인 한 유저인데, number 값이 10보다 큼"
    : "로그인 한 유저인데, number 값이 10보다 작음"
  : "로그인 하지 않은 유저"


// 실습
let now = new Date().getHours();

now = 24;

console.log(now >= 12 ? '오후' : '오전');