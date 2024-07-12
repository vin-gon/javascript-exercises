const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
  let total = 0;
	for (let i = 0; i < nums.length; ++i)
  {
    total += nums[i];
  }

  return total;
};

const multiply = function(nums) {
  let total = 1;
	for (let i = 0; i < nums.length; ++i)
  {
    total *= nums[i];
  }

  return total;
};

const power = function(a, b) {
	let res = 1;
  for (let i = 0; i < b; ++i)
  {
    res *= a;
  }

  return res;
};

const factorial = function(a) {
	let res = 1;
  for (let i = 2; i <= a; ++i)
  {
    res *= i;
  }

  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
