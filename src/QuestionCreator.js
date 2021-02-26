let arr = [];
let operators = ["*", "/", "-", "+"];

export default function QuestionCreator() {
  console.log("count");
  for (let i = 0; arr.length < 10; i++) {
    const getRandomOperand = () => Math.ceil(Math.random() * 9);
    const getRandomOperator = () => operators[Math.floor(Math.random() * 4)];
    let randomNo1 = getRandomOperand();
    let randomNo2 = getRandomOperand();
    let randomOperator = getRandomOperator();
    const calculate = {
      "+": function (x, y) {
        return x + y;
      },
      "-": function (x, y) {
        return x - y;
      },
      "*": function (x, y) {
        return x * y;
      },
      "/": function (x, y) {
        return x / y;
      },
    };
    let answer = Math.floor(calculate[randomOperator](randomNo1, randomNo2));
    if (answer)
      arr.push(
        `Question No.${
          arr.length + 1
        }: ${randomNo1} ${randomOperator} ${randomNo2} = ${answer}`
      );
  }
  return arr;
}
