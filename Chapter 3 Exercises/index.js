//Minimum
function minimum(num1, num2) {
    return Math.min(num1, num2);
}

//Recursion
function isEven(num) {
    if (num == 0) {
      return true;
    } else if (num == 1) {
      return false;
    } else if( num !== 0 || num !== 1) {
      return isEven(Math.abs(num - 2));
    }
  }
  
  isEven(-2);

//Bean Counting
function countBs(str) {
    count = 0;
    str.split('').forEach(letter => {
      if (letter == "B") {
        count +=1;
      }
    })
    return count;
  }

  function countChar(str, char) {
    count =0;
    str.split('').forEach(letter => {
      if (letter == char) {
        count +=1;
      }
    })
    return count;
  }

