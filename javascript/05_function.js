hello1(); // 함수 선언문으로 작성 된 함수는 함수 선언 전 호출 가능
//hello2(); // 함수 표현식으로 작성 된 함수는 함수 선언 전 호출 불가능

// 함수 정의
// 1. 명시적 함수 선언 -> 함수 선언문
function hello1() {
  console.log("Hello World1");
}
// 함수 호출
hello1();

// 2. 함수 표현식
const hello2 = function () {
  console.log("Hello World2");
};
// 함수 호출
hello2();

// 2-2. 화살표 함수
const hello3 = () => {
  console.log("Hello World3");
};
hello3();

// return 사용
/* 
  return : 반환값 -> 함수 내부 코드의 "최종 결과 값"
  console.log()로 콘솔을 출력하는 것에 그치지 않고,
  함수 내부 코드의 최종 결과값을 저장하고, 보관하기 위한 키워드
  - 함수 블럭 안에서 return 키워드를 만나면 함수 실행 중단
*/

function onePlusOne() {
  return 1 + 1;
};
console.log(onePlusOne()); //console.log(2) -> 콘솔창에 2 출력


function numPlusOne(i) {
  return i + 1;
};
console.log(numPlusOne(9));

function sum(num1, num2) {
  return num1 + num2;
};
console.log(sum(11,9));

//함수의 반환값을 변수에 저장해서 사용
const result = sum(11,9);
console.log(result);
const result2 = sum(100,35);

function hi(name) {
  alert(`hi! ${name}`);
}

hi('JunYoung');
