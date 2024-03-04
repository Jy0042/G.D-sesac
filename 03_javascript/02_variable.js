console.log("connected");

// 변수 선언
var varName;

// 변수 할당
varName = "James";

// 변수 선언과 할당을 동시에
var varName = "James";

// 변수 재할당
varName = "Tom";

var varName = "Jane";

console.log(varName);

aa = 123;

console.log(aa);


/* let 키워드
    1. 변수 선언 -> 할당
    2. 변수 선언과 값 할당을 동시에
*/

//변수 선언
let letName;

//값 할당
letName = "사과";
console.log(letName);

//변수 선언과 값 할다을 동시에
let letName2 = "망고";
console.log(letName2);

// let letName2 = "바나나"; // error: 중복 선언 불가

letName2 = "바나나"; // 값을 재할당
console.log(letName2);

/* 
    const 키워드
    - 반드시 변수 선언과 값 할당이 동시에 이루어져야 함
    - 변수 재선언, 재할당 불가든ㅇ
    - 사용처 : 변하지 않는 값을 변수에 저장할 때 사용
*/

// const constName; // error: 선언과 동시에 값 할당 필요
const constName = "Tom";
console.log(constName);

/*
    # 정리
    
    * var : es6 이전에 사용되던 변수 선언 키워드 -> 사용 지양하자
    
    * let : 변수 선언 키워드 
        - 변수 선언 -> 값 할당
        - 변수 중복 선언은 불가능
        - 변수 재할당은 가능 (값을 수정할 수 있음)
    
    * const : 상수 선언 키워드
        - 상수 : 변하지 않는 값
        - 변수 선언과 값 할당을 동시에 해야 함
        - 재선언, 재할당 불가능

    * 식별자 규칙
        : 이름을 지정할 때 사용하는 단어 (변수명, 함수명 등)
        - 키워드 사용 불가
            - 키워드 : 특별한 역할을 이미 하고 있는 단어
            - ex : var, let, const, if, function, for, return, ...
        - 숫자로 시작 불가
        - 특수문자는 _, $ 만 허용
        - 공백 문자 사용 불가

    * 사용 가능한 식별자
        : tom, jane, age, i, myName, my_name
    * 사용 불가능한 식별자
        : var, let, const, 1st, my name, my-name
*/