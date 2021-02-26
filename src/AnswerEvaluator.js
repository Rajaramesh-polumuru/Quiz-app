export default function AnswerEvaluator(quesArr, ansArr) {
  let temp = [];
  let ans = {};
  quesArr.forEach((element) => {
    if (element.length <= 25) temp.push(element.slice(23));
    else temp.push(element.slice(24));
  });
  let correctAnswerIndex = [];
  let wrongAnswerIndex = [];
  let ind = 0;
  let marks = 0;
  temp.forEach((element) => {
    if (
      parseInt(element) === parseInt(parseInt(ansArr[ind]) ? ansArr[ind] : "0")
    ) {
      marks++;
      correctAnswerIndex.push(ind);
    } else {
      wrongAnswerIndex.push(ind);
    }
    ind++;
  });
  return { marks, correctAnswerIndex, quesArr, wrongAnswerIndex };
}
