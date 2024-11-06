function singleNumber(nums) {
 
  const count = nums.reduce((acc, num) => {
    acc[num] = (acc[num] || 0) + 1;
    return acc;
  }, {});

  
  return nums.filter(num => count[num] === 1)[0];
}

let result1 = singleNumber([2, 2, 1]);
let result2 = singleNumber([4, 1, 2, 1, 2]);
let result3 = singleNumber([10]);

console.log(result1); // 1
console.log(result2); // 4
console.log(result3); // 10
console.log(typeof result1); // "number"
