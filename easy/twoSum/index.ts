function twoSum(nums: number[], target: number): number[] {
  const result: number[] = [];
  
  for (let i = 0; i < nums.length; i++) {
    const numberToCalc = nums[i];
    let x = i + 1;
    
    for (; x < nums.length; x++) {
      const sum = (numberToCalc + nums[x]);
      
      if (sum === target) {
        result.push(i);
        result.push(x);
      };
    }
  }
  
  return result;
};