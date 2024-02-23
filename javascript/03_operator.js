console.log("connected!");

/* 
  * 대입 연산자
    = : 변수에 값을 할당할 때 사용
*/
let num = 3;
const int = 5;

/*
  * 비교 연산자
  ==, != : 피연사자의 값이 같은지 비교,
  타입이 달라고 괜찮음 (값만 비교)
*/

console.log(1 == 1);   // true
console.log(1 == 2);   // false
console.log(1 == "1"); // true
console.log(1 != 1);   // false
console.log(1 != 2);   // true
console.log(1 != "1"); // false
console.log(1 != "2"); // true

console.log("-----------------------");

/*
  * 비교 연산자
  ===, !== : 피연산자의 값과 타입을 모두 비교,
  엄격한 동등 연산자
*/

console.log(1 === 1);   // true
console.log(1 === 2);   // false
console.log(1 === "1"); // false
console.log(1 !== 1);   // false
console.log(1 !== 2);   // true
console.log(1 !== "1"); // true
console.log(1 !== "2"); // true

console.log("-----------------------");

/*
  * 크기 비교
  >, <, >=, <=
*/

console.log(2 > 1);  //true
console.log(1 >= 1); //true
console.log(2 < 1);  //false
console.log(1 <= 1);  //true

console.log("-----------------------");

/*
  * 산술 연산자
  +, -, *, /, %(나머지), **(제곱)
*/

console.log(1 + 2);  // 3
console.log(1 - 2);  // -1
console.log(1 * 2);  //2
console.log(1 / 2);  // 0.5

// 나머지 연산자
console.log(1 % 2);  // 몫 : 0, 나머지 : 1 = 1
console.log(8 % 5);  // 몫 : 1, 나머지 : 3 = 3
console.log(8 % 3);  // 몫 : 2, 나머지 : 2 = 2
console.log(8 % 5);  // 몫 : 1, 나머지 : 3 = 3
console.log(1 ** 2); // 1

console.log("-----------------------");

/*
  * 논리 연산자
  !, &&, ||
*/

console.log(!true);   // false
console.log(!false);  // true
console.log(!!true);  // true
console.log(!!false); // false

console.log(true && true); // true
console.log(1 < 2 && 1 < 5); // true
console.log(1 > 2 && 1 < 5); // false

console.log(true || true); // true
console.log(true || false); // true

console.log(1 > 2 || 1 < 5); // true
console.log(1 > 2 || 1 < 5); // true

// 연산자 응용
console.log(!(2>1));
console.log(2 > 1 && -2 < 1);
console.log((2 > 1 && -2 <1) || 5 > 3);

console.log("-----------------------");

