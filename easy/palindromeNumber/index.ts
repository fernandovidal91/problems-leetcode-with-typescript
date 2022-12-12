function isPalindrome(x: number): boolean {
  const convertNumberInArray = String(x).split("");
  const revertArray = convertNumberInArray.reverse();
  const joinArray = revertArray.join("");

  if (x === Number(joinArray)) return true;
  
  return false;
};