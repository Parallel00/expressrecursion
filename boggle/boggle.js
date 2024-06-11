
function makeBoard(boardString) {

  const letters = boardString.split(/\s+/);

  const board = [
    letters.slice(0, 5),
    letters.slice(5, 10),
    letters.slice(10, 15),
    letters.slice(15, 20),
    letters.slice(20, 25),
  ];

  return board;
}

function find(board, word) {
  for (let b = 0; b < 5; b++)
	  for (let a = 0; a < 5; a++){
		  if (findWrd(board, word, b, a, new Set())) return true;
	  }
	  
	return false;
}

function findWrd(board, word, b, a, found){
	if (board[b][a] != word[0]) return false;
	if (found.has(b + "-" + a)) return false;
	if (word.length === 1) return true;
	
	found = new Set(found);
	found.add(b + "-" + a);
	
	if (b > 0 && findFrom(board, word.slice(1), b - 1, a, found)) return true;
	if (b < 4 && findFrom(board, word.slice(1), b + 1, a, found)) return true;
	if (a > 0 && findFrom(board, word.slice(1), b, a - 1, found)) return true;
	if (a < 4 && findFrom(board, word.slice(1), b, a + 1, found)) return true;
}

const board = makeBoard(`N C A N E
                         O U I O P
                         Z Q Z O N
                         F A D P L
                         E D E A Z`);

console.log(find(board, "NOON"), true);
console.log(find(board, "NOPE"), true);
console.log(find(board, "CANON"), false);
console.log(find(board, "QUINE"), false);
console.log(find(board, "FADED"), true);

const board2 = makeBoard(`E D O S Z
                          N S O N R
                          O U O O P
                          Z Q Z O R
                          F A D P L`);

console.log(find(board2, "NOOOOS"), true);
