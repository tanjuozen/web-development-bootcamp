function avarage(scores){
    var total = 0;
    scores.forEach(score => total += score);
    console.log(Math.round(total/scores.length));
}

avarage([90,98,89,100,100,86,94]);