// commonjs
// 한 번에 module.exports 시키기

const colors = ["pink", "blue", "yellow"];

const sayHi = function() {
  console.log("안녕하세요 이 함수는 sayHi 함수");
};

function sayName(name) {
  console.log("my name is " + name + " 이 함수는 sayName 함수");
  sayHi();
};

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getBornYear() {
    return new Date().getFullYear() - this.age;
  }
}

module.exports = { colors, sayName, Person };
