// Looping a Triangle 
function triangleLoop() {
    for (i=0; i<=7; i++) {
      let str = '#'
      console.log(str.repeat(i));
    }
  }
  
  triangleLoop();

// FizzBuzz
for (i=1; i<=100; i++) {
    if (i % 3 == 0 & i % 5 ==0) {
      console.log('FizzBuzz');
    } else if (i % 3 == 0) {
      console.log('Fizz')
    } else if (i % 5 == 0) {
      console.log('Buzz')
    } else {
      console.log(i);
    }
  }

  //Chessboard
let size = 10;
let board = "";
let c;

for (i=0; i < size; i++) {
  c = i % 2 ? "# " : " #";
  for (j=0; j < size/2; j++) {
    board +=c;
  }
  board += "\n"
}
console.log(board);