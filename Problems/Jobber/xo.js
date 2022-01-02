
// Given 4 inputs, a major x, major y, minor x, and minor y, write a program that will output a checkerboard pattern of the given size. Example:
 
// XXXOOOXXXOOOXXX
// XXXOOOXXXOOOXXX
// OOOXXXOOOXXXOOO
// OOOXXXOOOXXXOOO
// XXXOOOXXXOOOXXX
// XXXOOOXXXOOOXXX
// OOOXXXOOOXXXOOO
// OOOXXXOOOXXXOOO
// The inputs for the above output:
// major_x = 5
// major_y = 4
// minor_x = 3
// minor_y = 2



function checkerboard(major_x, major_y, minor_x, minor_y){

      let board = new Array(major_y * minor_y);
      for(let i = 0; i < board.length;  i++){
          board[i] = new Array(major_x * minor_x);
      }

      for(let i = 0; i < major_y * minor_y; i++){
        let flag = Math.floor(i/minor_y) % 2 === 0 ? true : false;
          for(let j = 0; j < major_x; j++){
            for(let k = 0; k < minor_x ; k++){
                // let index = j*minor_x + k;
                // if(flag) board[i][index] = 'X';
                // else board[i][index] = 'O';
                console.log("K", k);
            }
            flag = !flag;         
          }
      }
      console.log(board);
}

checkerboard(5, 4, 3, 2);