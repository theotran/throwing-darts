module.exports = scoreThrows;


function scoreThrows (score) {
  var totalScore=0;
  score.forEach(function (entry) {
    if(entry > 10) {
      totalScore += 0;
    }
    if(entry >=5 && entry <= 10) {
      totalScore += 5;
    }
    if(entry < 5) {
      totalScore += 10;
    }
  });
  //check if all indexes are less than 5
  var bonus = score.every(function (index) {
    if(index < 5) {
      return true;
    } else {
      return false;
    }
    console.log(totalScore);
  });
  if(bonus) {
    totalScore += 100;
  }
  return totalScore;
}
console.log(scoreThrows([1, 2, 3, 4]));