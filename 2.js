function minimumWaitingTime(queries) {
 // Write your code here.
  queries.sort((a, b) => a - b);

  let totalWaitingTime = 0;

  for (let i = 0; i < queries.length; i++) {
    const duration = queries[i];
    const queriesLeft = queries.length - (i + 1);
    totalWaitingTime += duration * queriesLeft;
  }

  return totalWaitingTime;
}
// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;
