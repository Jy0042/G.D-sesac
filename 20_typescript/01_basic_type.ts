let num: number = 1;
// num = '1' -> error: number 타입으로 지정한 변수는 문자열로 작성 불가
num = 2;
console.log(num);

let str: string = 'str';
let isTrue: true = true;
let undef: undefined = undefined;
let empty: null = null;

// 원시타입의 경우 타입 작성하지 않아도 ts가 알아서 타입을 추론
let isTrue2 = true;
let undef2;
let empty2 = null;

// isTrue2 변수는 boolean 타입이라고 직접 작성하지 않아도
// 알아서 boolean 임을 추론헤 문자열로 재할당 시 에러 발생
// isTrue2 = 'aa'

// array
// 요소의 갯수를 미리 명시할 필요는 없지만
// array의 요소가 어떤 타입인지 명시 필요

// 배열의 요소가 1가지 인 경우
let numArr: number[] = [1, 2, 3, 4, 5];
let strArr: Array<string> = ['가', '나', '다', '라', '마'];

// 배열 여러개의 타입을 작성 할 때
// number or string 타입의 요소를 가진 배열
let arr1: (number | string)[] = [1, 2, 3, "가", "나", "다"];
let arr2: Array<number | string> = [1, 2, 3, "가", "나", "다"];

// boolean or null or number array를 요소로 가진 배열
let arr3: (boolean | null | number[])[] =  [true, null, false, [4, 22]];
let arr4: Array<boolean | null | number[]> = [true, null, false, [4, 22]];

// 어떤 자료형이든 상관없이 들어갈 수 있는 배열
let arrAny: any[] = [1, 2, 500, false, ['A', 'b', 3, false], null, undefined];

// object
let obj1: object = {
  name: 'jy',
  gender: 'man',
}

// -----------------------------------

//타입 추론 (암묵적으로 타입 지정됨)
let aa = 5;
let bb = 'hi';
let cc = true;
let dd= null;
let ee;

//aa = '5'; // error (Type 'string' is not assignable to type 'number')
//bb = 5;
//cc = 5'
//dd = 5;
ee = 5; // 타입을 지정하지 않고 선언만 한 변수의 경우 any 타입이 자동 지정됨
ee = 'abc'; // any 타입을 사용하게 되면 ts를 사용하는 이유 사라짐
