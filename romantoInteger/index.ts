type RomanNum = 'I' | 'V' | 'X' | 'L' | 'C' | 'D' | 'M';

function romanToInt(s: RomanNum): number {
  const nums = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }

  let result = 0;

  const convertNumberInArray = s.split('');

  for (let i = 0; i < convertNumberInArray.length; i++) {
    const romanNum = convertNumberInArray[i];
    const nextNum = convertNumberInArray[i + 1]

    let numToSum = 0;

    if (nextNum && nums[romanNum] < nums[nextNum]) {
        numToSum = nums[nextNum] - nums[romanNum];
        i++;
    } else {
        numToSum = nums[romanNum];
    }

    result += numToSum;
  }

  return result;
};