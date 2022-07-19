function maxProfitWithKTransactions(prices, k) {
  // Write your code here.
  if(!prices.length) 
  {
    return 0;
  }
	const profit = [];
  
	for(let i=0;i<k+1;i++){
	    const row = new Array(prices.length).fill(0);
	    profit.push(row);
	}
	for(let i=1;i<k+1;i++){
  
	    let maxEle = -Infinity;
      
	    for(let j=1;j<prices.length;j++){
	        maxEle = Math.max(maxEle, profit[i-1][j-1] - prices[j-1]);
	        profit[i][j] = Math.max(profit[i][j-1], maxEle + prices[j]);
	        
	    }
	}
	return profit[k][prices.length -1];
}


// Do not edit the line below.
exports.maxProfitWithKTransactions = maxProfitWithKTransactions;
