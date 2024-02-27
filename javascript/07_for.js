/*
  # for문
    - for (for문 내에서 사용할 변수 선언; 조건식 (어디까지 증가 / 감소 할지 작성); 증감) {
      반복할 코드
    }

  * i + 1 = i / i += 1 / i++ -> 모두 동일함
  * i - 1 = i / i -= 1 / i-- -> 모두 동일함
  * i++; 변수 1에서 값을 꺼낸 뒤, 1을 더함
  * i--; 변수 1에서 값을 꺼낸 뒤, 1을 뺌
  * 
  
  // 5씩 늘리고 싶을 때 -> i += 5 -> i를 5씩 늘림
*/

for (let i = 0; i < 10; i++) {
  console.log('hi',i)
}

for (let i = 0; i < 10; i+=3) {
  console.log("bye", i);
}

// 1부터 5까지 1씩 증가하면서 출력하는 방법
// 1. i <= 5
for (let i = 0; i <=5; i++) {
  console.log(i)
}
// 2. i < 6
for (let i = 0; i <6; i++) {
  console.log(i)
}

for (let i = 5; i > 0; i--) {
  console.log('test',i);
}


// quiz, 1부터 n까지 모든 수를 더해 result를 콘솔로 찍기
let n = 10;
let result = 0;

for (let i = 1; i <= n; i++) {
  result += i;
}

console.log("quiz", result);

// for문과 배열 함께 사용하기
// 배열의 모든 요소 출력하기
let cafe = ['americano', 'latte', 'espresso', 'tea'];
// console.log(cafe.length); // 배결의 길이를 출력

for (let i = 0; i < cafe.length; i++) {
  console.log('cafe menu -', cafe[i]);
}

// 배열 요소의 총 합 구하기
let numArr = [99,88,77,66,55];
let numSum = 0;

for (let i = 0; i < numArr.length; i++) {
  numSum += numArr[i];
}
console.log(numSum);

console.log('-----------------');

// for문과 if문 함께 사용
// 짝수만 출력
// 1. for문만 사용
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// 2. if문과 함께 사용
for (let i = 0; i <= 10; i ++) {
  if (i % 2 === 0) {
    console.log('if문으로 짝수만',i);
  } 
}

console.clear();

// const 구구단 = Number(prompt('구구단 숫자 입력'));
// console.log(구구단 +'단');
// for (let i = 1; i < 10; i++) {
//   console.log(`${구구단} x ${i} = ${구구단*i}`);
// }

for (let i = 2; i < 10; i++) {
  console.log(i+'단');
  for(let j = 1; j < 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// 주어진 숫자들 중에서 짝수만 찾아 합을 구하는 문제

// 주어진 숫자 배열
const numbers = [3, 7, 2, 8, 5, 10, 6];

// 짝수들의 합을 저장할 변수 초기화
let evenSum = 0;

// 주어진 배열에서 짝수를 찾아 합산
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenSum += numbers[i];
  }
}

// 결과 출력
console.log(`주어진 숫자 배열 [${numbers}] 중에서 짝수의 합은 ${evenSum}입니다.`);


if (0===false) {
  console.log("ok");
} else {
  console.log("no");
}
