// 제네릭

function printSomething<T>(x: T): T {
  console.log(x);
  return x;
};

printSomething<string>("hello");
printSomething<number>(1);

// 두 개의 다른 인자 제네릭으로 받기
function getTwoPrams<T, K>(x: T, y: K): void {
  console.log(x, y);
};

getTwoPrams<number, string>(1, "2");
getTwoPrams<string, number>("1", 2);
getTwoPrams<null, boolean>(null, true);
getTwoPrams<number[], string[]>([1, 2, 3], ['1', '2', '3']);

// ----------------------------

// interface 에서 generic
console.log('----- interface 에서 generic -----');

interface Phone<T> {
  name: string;
  compony: string;
  price: number;
  option: T;
};

const iphone15: Phone<string> = {
  name: 'iphone15',
  compony: 'apple',
  price: 130,
  option: 'lightblue',
};

const flip5: Phone<string[]> = {
  name: 'flip5',
  compony: 'samsung',
  price: 130,
  option: ['black', 'white', 'purple']
};

// 제네릭으로 넘겨줄 T를 type로 선언
type IphoneOption = {
  color: string;
  storage: number;
};

const iphone16: Phone<IphoneOption> = {
  name: "iphone16",
  compony: "apple",
  price: 180,
  option: {
    color: "sliver",
    storage: 256,
  },
};