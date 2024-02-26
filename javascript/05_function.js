/*
  함수
    * 특정 작업을 수행하기 위해 독집적으로 설계된 코드 집합
    * 함수 정의 -> 함수 호출
    * 함수 정의 / 선언
      - keyword : function
      - name : 함수 이름 (camelCase로 많이 작성)
      - parameter : 함수 선언 시 매개변수로 받을 것
        - parameter, arguments, 인자, 매개변수 모두 동일한 의미
      - body : 함수 내부 코드 (scope 라고도 함)
    * 함수 정의 / 선언 방식
      - 함수 선언문 (명시적 함수 선언)
        - function 키워드 사용
        - ex) function name () {}
      - 함수 표현식
        - 함수 이름 작성 x -> 변수를 만들어 함수 저장
        - 참고) js에서 함수가 값이기 때문에 가능한 방식
        - ex) const funcName = () => {}
        (참고) 함수 선언문 vs 함수 표현식
          - 함수 선언문 function funcName() {} 형태로 작성 / 함수 선언 전 호출 가능
          - 함수 표현식 const funcName = function() {} / 함수 선언 전 호출 불가
*/

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

// hi('JunYoung');



// let inputNum1 = parseFloat(prompt("숫자입력 1"));
// let inputNum2 = parseFloat(prompt("숫자입력 2"));

// function multiply(inputNum1, inputNum2) {
//   return alert(`숫자의 곱 : ${inputNum1 * inputNum2}`);
// }

// multiply(inputNum1, inputNum2);



let inputNum = parseInt(prompt('input number'));

const square = function(inputNum) {

return inputNum ** 2;

}

console.log(`숫자의 제곱 : ${num(inputNum)}`);

