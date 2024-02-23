/* 기본형 (Primitive type)
    1. string
    - 텍스트 정보
    - 따옴표로 감싸야 함
    - 숫자, 특수문자, true, false, 모두 따옴표 안에 잇으면 문자열
*/

const myName = '신데렐라';
const email = 'glassshose@goole.com';
const gender = 'female';
console.log(myName);
console.log(email);
console.log(gender);

// 문자와 변수를 동시에 사용하기
const aa = 'a';
console.log(aa);

console.log('원하는 텍스트 콘솔창에 출력');

console.log(aa, '쉼표'); // 자동으로 띄어쓰기 됨
console.log(aa + '+ 연산자'); // 전부 연결해서 출력됨

// "안녕 나는 레일라야"
const name = '레일라';
console.log('안녕 나는', name, '야');
console.log('안녕 나는' + name + '야');

// 템플릿 리터럴
// 문자열 내 변수를 간결하게 표현
// 백틱(``) 기호와 달러, 중괄호(${}) 사용
console.log(`안녕 나는 ${name}야`);
const printHello = `안녕 나는 ${name}야`; // -> 문자열로 저장됨


/* 
  2. Number
    - 숫자 (정수, 소수)
    - 연산가능
*/

let number = 123;
let opacity = 0.7;
let add = 1 + 2;

/* 
  3. boolean
    - true, false 중에서 하나의 값을 가지는 논리 요소
*/

let checked = true;
let liShow = false;

/* 
  4. undefined
    - 값도 없고 타입도 지정되어 있지 않은 상태 (정의 되어 있지 않음)
*/

let undef;
console.log(undef); // undefined

let obj = {
  abc: 123,
};
console.log(obj.abc); // 123
console.log(obj.efg); // undefined


/* 
  5. null
    - 빈 값, null 타입으로 타입 존재하지만 값이 없음
    - 값이 없다는 것을 의도적으로 명시 할 때 사용 - > 개발자가 직접 null 값을 할당
*/

let empty = null;
console.log(empty);


/* 
  6. Array
    - 순서가 있는 데이터의 묶음
    - 값이 없다는 것을 의도적으로 명시 할 때 사용 - > 개발자가 직접 null 값을 할당
*/

let fruit = [ 'apple', 'orange', 'banana', 'grape'];
let fruit2 = new Array ("apple", "orange", "banana", "grape");

console.log(fruit);
console.log(fruit[2]);

let arr = [1, "str", false, true, null, undefined];

const ddd = [
  [1,2],
  [3,4]
]
console.log(ddd[1][0]);

// 배열 응용
// 다차원 배열
// 배열 안에 배열이 있는 형태
const korean = [
  ["가", "갸", "거", "겨"],
  ["나", "냐", "너", "녀"],
  ["다", "댜", "더", "뎌"],
];

console.log(korean[0]);
console.log(korean[1][1]);
console.log(korean[2]);

const letters2 = [
  ["사", "스", "자", "크"],
  ["진", "안", "리", "이"],
  ["가", "수", "림", "나"],
  ["아", "으", "차", "운"],
];

console.log(
  letters2[3][0] + letters2[1][3] + 
  letters2[0][1] + letters2[0][3] +
  letters2[2][2]
);

/* 
  7. Object
    - 배열은 순서가 있는 반면에 객체는 키 - 값 형태로 작성
    { key1 : value1, key2 : value2 ...}
*/

let cat = {
  name : '논',
  age : 7,
  isCute : true,
  mew : function() {
    return '먕';
  }
};

// 점 표기법
console.log(cat);
console.log(cat.name);

// 대괄호 사용
console.log(cat['name']);


// 변경, 추가 가능
cat.like = 'ㅇㅇㅇ';
console.log(cat.like);

cat.name = '야논';
console.log(cat.name);


/*
    JS의 자료형 -> 데이터 타입
    - 기본형 (Primitive)
      - string
      - number
      - boolean
      - null
      - undefined
    - 객체 (Object)
    - array (배열)
    - object (객체) -> 키-값을 쌍을 가지고 중괄호 {} 안에 감싸여 작성된 것
*/


// JS의 이상한 자동 형변환
let a = '3';
let b = 2;
let c = '10';

// 문자 + 문자
console.log(a + c); // '310' -> 문자의 나열
console.log(c - a); // 7 -> 숫자가 됨
console.log(a * c); // 30 -> 숫자가 됨
console.log(c / a); // 계산 됨

// 숫자 + 문자
console.log(b + a); // '23' -> 숫자가 문자열로 변환되어 문자의 나열
console.log(b - a); // -1 -> 문자가 숫자로 변환되어 계산됨 나머지 * -, /도 동일

const introduce = {
  name: "jy",
  gender: "men",
  interest: "game",
  hairColor: "black",
  country: "korea"
};

console.log(introduce);


// 자료형 확인
// typeof
// 피연산자의 데이터 타입을 문자열로 변환
console.log('------------------');
console.log(typeof '문자열'); // string
console.log(typeof 123); // number
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof NaN); // NaN : Not a Number -> number
let nud;
console.log(nud);


// 형변환
console.log("------------------");
// 1. ? -> 문자
let str1 = true;
let str2 = 123;
let str3 = null;

console.log(String(str1));
console.log(typeof String(str1));
console.log(String(str2));
console.log(String(str3));
console.log(str1.toString());
console.log(str2.toString());

// 2. ? -> 숫자
let n1 = true;
let n2 = false;
let n3 = '12345';
let n4 = '123.9';

console.log(Number(n1));
console.log(Number(n2));

console.log(Number(n3));
console.log(Number(n4));
console.log(parseInt(n3));
console.log(parseInt(n4));
console.log(parseFloat(n4));

let mathScore = "77";
let engScore = "88";

let avgScore = ((Number(mathScore) + Number(engScore)) /  2);

console.log(avgScore);

// prompt 사용
let mathScore2 = Number(prompt('수학 점수 입력 ㄱㄱ')); 
let engScore2 = Number(prompt("영어 점수 입력 ㄱㄱ"));

let avgScore2 = (mathScore2 + engScore2) / 2;

console.log(avgScore2);

alert(`평균 점수 : ${avgScore2}점 ^^`);
