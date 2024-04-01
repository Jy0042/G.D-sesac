// 1. 전개 구문 (spread)

// 1-1 배열
const lunchMenu = ["국밥", "치킨마요", "파스타", "돈까스"];
const dinnerMenu = ["라면", "볶음밥", "파스타", "냉동"];

console.log(lunchMenu);
console.log(dinnerMenu);
console.log(lunchMenu, dinnerMenu);

console.log(...dinnerMenu);

console.log("-------- for --------");

for (let i = 0; i < lunchMenu.length; i++) {
  console.log(lunchMenu[i]);
}

console.log("-------- foreach --------");

lunchMenu.forEach((element) => {
  console.log(element);
});

console.log("-------- map --------");

lunchMenu.map((item) => console.log(item));

console.log("-------- for of --------");

for (let menu of lunchMenu) {
  console.log(menu);
}

// 전체요소에 접근하고 싶은 경우
// 연산 (계산)등의 필요한 작업이 아닌 경우
// 전개 연산자 사용 -> 일일이 요소에 접근하지 않고 사용할 수 있도록 함
console.log(...lunchMenu);
console.log(...[1, 2, 3, 4, 5]); // 꼭 변수에 저장하지 않고 배열에 바로 사용 가능

// 배열합치기
// ['국밥', '치킨마요', '파스타', '돈가스', '라면', '볶음밥', '바질페스토파스타', '냉동볶음밥']

const newArr = [];
function usePush() {
  lunchMenu.map((menu1) => newArr.push(menu1));
  dinnerMenu.map((menu1) => newArr.push(menu1));
}

usePush();
console.log(newArr);

// concat() : 배열을 연결하는 메서드
const newArr2 = lunchMenu.concat(dinnerMenu);
console.log(newArr2);

// spread
// 보다 직관적
const newArr3 = [...lunchMenu, ...dinnerMenu];
console.log(newArr3);

const prodData1 = [
  {
    id: 1,
    prod_name: "피크닉",
    price: 700,
  },
  {
    id: 2,
    prod_name: "딸기우유",
    price: 2000,
  },
  {
    id: 3,
    prod_name: "밀키스",
    price: 1100,
  },
];

const prodData2 = [
  {
    id: 4,
    prod_name: "코멧 쿠키",
    price: 500,
  },
  {
    id: 5,
    prod_name: "쌀과자",
    price: 300,
  },
  {
    id: 6,
    prod_name: "마가렛트",
    price: 150,
  },
];

const totalData = [...prodData1, ...prodData2];
console.log(totalData);

// -----------------------

// 1-2 문자열
// 전개 구문은 배열뿐만 아니라 객체나 문자열에도 사용 가능
// for of 문에도 문자열 사용 가능

const str = "fighting!!";
console.log(...str);

const strToArr = [...str];
console.log(strToArr);

const strToArr2 = str.split("");
console.log(strToArr2);

// -----------------------

// 1-3 객체
let me1 = {
  name: "layla",
  height: 173,
  married: false,
  pet: null,
};

let me2 = {
  name: "레일라",
  like: ["backing", "traveling"],
  pet: {
    name: "janghwa",
    like: ["layla", "sleeping"],
  },
  greeting: function () {
    console.log(
      `안녕하세요 제이름은 ${this.name}이고, 키는 ${this.height}cm 입니다`
    );
  },
};

// 객체를 합칠 때 동일한 key 가 있다면 뒤에 있는 변수 객체의 key 의 value 가 저장
let me = { ...me1, ...me2 };
console.log(me);
me.greeting(); // 객체 내부에 value 로 저장된 함수 사용 시 점 표기법만 사용 가능

// 합치면서 key 추가하기
me = {
  ...me1,
  ...me2,
  status: "hungry",
};
console.log(me);

me = {
  ...me,
  mbti: "istp",
};
console.log(me);

const word1 = "abc";
const word2 = "xyz";

const newWordArr = [...word1, ...word2];
console.log(newWordArr);

// 다른 방법 1
// 두 개의 문자열을 하나의 문자열로 합친 후 배열로 저장
const newWordArr2 = (word1 + word2).split('');
console.log(newWordArr2);

// 다른 방법 2
// 문자열을 concat 메서드 사용해 연결하고 배열로 저장
const newWordArr3 = word1.concat(word2).split('');
console.log(newWordArr3);

// 문자열을 배열로 나누고 concat 메서드 사용해 연결
const newWordArr4 = word1.split('').concat(word2.split(''));
console.log(newWordArr4);

