/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  arr=[]
  
  const categoryTotals = {};

  for (const transaction of transactions) {
    const { category, price } = transaction;

    // Check if the category already exists in the totals
    if (categoryTotals.hasOwnProperty(category)) {
      categoryTotals[category] += price; 
    } else {
      categoryTotals[category] = price;
    }
  }
  const result = Object.entries(categoryTotals).map(([category, totalAmount]) => ({
    [category]: totalAmount
  }));

  console.log(result);
  return result;
  // console.log(categoryTotals)
  // return [];
}
let t1={
  itemName:"bike",
  category:"transport",
  price:1000   
}
let t2={
  itemName:"car",
  category:"transport",
  price:2000   
}
let t3={
  itemName:"vegetable",
  category:"food",
  price:1000    
}
transactions = [t1,t2,t3]
calculateTotalSpentByCategory(transactions)
module.exports = calculateTotalSpentByCategory;
