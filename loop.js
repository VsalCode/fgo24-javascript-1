for (let index = 1; index <= 5; index++) {
  if ( index == 4 ){
    console.log("Fazztrack");
  } else {
    console.log(index);
    
  }
}

/* output :
1
2
3
Fazztrack
5
*/

let x = 0

while (x < 5) {
  let row = " "
  let y = 0
  while (y < 5 - x ) {
    row += "* "
    y++;
  }
  console.log(row);
  x++;
} 

/* output :

* * * * * 
 * * * * 
 * * * 
 * * 
 * 

*/

let a = 0

while (a <= 5) {
  let row = " "
  let b = 0
  while (b < a ) {
    row += "* "
    b++;
  }
  console.log(row);
  a++;
}

/* Output :

 * 
 * * 
 * * * 
 * * * * 
 * * * * * 

*/
