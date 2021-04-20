/**
 * 1. Declare two functions: calculateRoundAverages and calculateTotalAverages
 */

/**
 * 2. Implement calculateRoundAverages
 * 
 * This function should print out the average score of each round
 * This function should receive the "golfScores" array as a parameter
 * This function should console log the average score of each round in the array
 * Please show only two decimals of accuracy on the averages:
 * 
 * An example of the expected output
 * "The average score for round 4 is 1.33"
*/
function calculateRoundAverages(golfScores) {
  for (let i = 0; i < golfScores.length; i++) {
    const scoresForOneRound = golfScores[i];
    let sumOfScoresForRound = 0;

    for (let j = 0; j < scoresForOneRound.length; j++) {
      sumOfScoresForRound = sumOfScoresForRound + scoresForOneRound[j];
    }

    const average = sumOfScoresForRound / scoresForOneRound.length;
    console.log(`The average score for round ${i+1} is ${average.toFixed(2)}`);
  }
}


/**
 * 3. Implement calculateTotalAverages
 * 
 * This function should print out the average of all average scores
 * This function should receive the "golfScores" array as a parameter
 * This function should console log the average of all averages
 * Please show only two decimals of accuracy
 * 
 * An example of the expected output:
 * "The average of averages is 1.39"
 */
 function calculateTotalAverages() {
  let sumOfRoundAverages = 0;

  for (let i = 0; i < golfScores.length; i++) {
    const scoresForOneRound = golfScores[i];
    let sumOfScoresForRound = 0;

    for (let j = 0; j < scoresForOneRound.length; j++) {
      sumOfScoresForRound = sumOfScoresForRound + scoresForOneRound[j];
    }

    const average = sumOfScoresForRound / scoresForOneRound.length;
    sumOfRoundAverages = sumOfRoundAverages + average;
  }

  const averageOfAverages = sumOfRoundAverages / golfScores.length;
  console.log(`The average of averages is ${averageOfAverages.toFixed(2)}`);
 }

///! ----- PLEASE DO NOT EDIT BELOW THIS ---- !///
const golfScores = [
  [1,2,2,-1,5,1,2,1,6,2,1,0,5,3,0,1,1,0],
  [1,1,3,0,3,2,2,1,6,2,1,0,3,1,-1,2,1,0],
  [2,1,2,1,4,1,2,1,6,2,1,0,-1,3,0,2,1,0],
  [0,2,3,0,3,1,1,1,6,2,1,0,0,2,0,1,1,0],
  [0,1,5,-2,3,2,2,1,6,2,1,0,-2,3,0,2,1,0],
  [1,1,3,-1,4,2,1,1,6,2,1,0,-1,4,0,4,1,0],
  [0,2,1,0,3,0,-1,1,6,2,1,0,0,3,-2,2,1,0],
  [0,1,1,0,2,1,-1,1,4,2,1,1,0,2,-1,1,0,0],
];
calculateRoundAverages(golfScores);
calculateTotalAverages(golfScores);