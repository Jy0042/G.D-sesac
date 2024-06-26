var num = 1;
// num = '1' -> error: number 타입으로 지정한 변수는 문자열로 작성 불가
num = 2;
console.log(num);
var str = 'str';
var isTrue = true;
var undef = undefined;
var empty = null;
// 원시타입의 경우 타입 작성하지 않아도 ts가 알아서 타입을 추론
var isTrue2 = true;
var undef2;
var empty2 = null;
// isTrue2 변수는 boolean 타입이라고 직접 작성하지 않아도
// 알아서 boolean 임을 추론헤 문자열로 재할당 시 에러 발생
// isTrue2 = 'aa'
// array
// 요소의 갯수를 미리 명시할 필요는 없지만
// array의 요소가 어떤 타입인지 명시 필요
// 배열의 요소가 1가지 인 경우
var numArr = [1, 2, 3, 4, 5];
var strArr = ['가', '나', '다', '라', '마'];
// 배열 여러개의 타입을 작성 할 때
// number or string 타입의 요소를 가진 배열
var arr1 = [1, 2, 3, "가", "나", "다"];
var arr2 = [1, 2, 3, "가", "나", "다"];
// boolean or null or number array를 요소로 가진 배열
var arr3 = [true, null, false, [4, 22]];
var arr4 = [true, null, false, [4, 22]];
// 어떤 자료형이든 상관없이 들어갈 수 있는 배열
var arrAny = [1, 2, 500, false, ['A', 'b', 3, false], null, undefined];
