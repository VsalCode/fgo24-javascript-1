/*----------------------------------------------- 
FOR LOOP
-----------------------------------------------*/

// FAZZTRACK
for (let index = 1; index <= 5; index++) {
  if ( index == 4 ){
    console.log("Fazztrack");
  } else {
    console.log(index);
    
  }
}

// FOR - SEGITIGA TERBALIK

for (let r1 = 0; r1 < 5; r1++) {
  row = ""
  for (let r2 = 0; r2 < 5 - r1; r2++) {
    row += "* "
  }  
  console.log(row);
  
}

// FOR - SEGITIGA SIKU-SIKU
for (let i = 0; i <= 5; i++) {
  row = ""
  for (let f = 0; f < i; f++) {
    row += "* "
  }  
  console.log(row);
  
}

/*----------------------------------------------- 
WHILE LOOP
-----------------------------------------------*/

// FAZZTRACK
let index1 = 0

while(index1 < 1){
  index2 = 0
  while(index2 <= 5){
    if(index2 == 4){
      console.log("Fazztrack");
    } else {
      console.log(index2);
    }
    index2++
  }
  index1++
}

// WHILE - SEGITIGA TERBALIK

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

// WHILE - SEGITIGA SIKU-SIKU

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

/*----------------------------------------------- 
DO WHILE LOOP
-----------------------------------------------*/

// Fazztrack

z = 1

do {
  if(z == 4){
    console.log("Fazztrack");
  } else {
    console.log(z);
    
  }
  z++
} while (z <= 5); 

// DO WHILE - SEGITIGA TERBALIK
m = 0
do {
  n = 0
  row = ""
  do{
    row += "* "      
    n++
  }while (n < 5 - m)
    console.log(row);
  m++
} while (m < 5);

// DO WHILE - SEGITIGA SIKU-SIKU
m = 0
do {
  n = 0
  row = ""
  do{
    row += "* "      
    n++
  }while (n < m)
    console.log(row);
  m++
} while (m < 5);

/*----------------------------------------------- 
BENTUK KOTAK, output :

* * * * * 
*       * 
*       * 
*       * 
* * * * * 
-----------------------------------------------*/

for (let i = 0; i <= 4; i++) {
  row = ""
  for (let f = 0; f <= 4; f++) {
    if(i == 0 || f == 0 || i == 4 || f == 4){
      row += "* "
    } else{
      row += "  "
    }
  }  
  console.log(row);
}

/* 

*/

/*----------------------------------------------- 
BENTUK SEGITIGA SAMA KAKI
-----------------------------------------------*/

for (let b = 0; b <= 5; b++) {
  let temp = ""
  for (let k = 5; k > 0; k--) {
    if( k > b ){
      temp += " "
    }else if (k <= b){
      temp += "* "
    }
  }  
  console.log(temp);
  
}

/*----------------------------------------------- 
OUTPUT :

* * * * *  
* * * *   *
* * *   * *
* *   * * *
*   * * * *
  * * * * *
-----------------------------------------------*/

for (let r = 0; r <= 5; r++) {
  let s1 = ""
  for (let t = 5; t > r; t--) {
      s1 += "* "
  }
  let s2 = ""
  for (let t = 0; t < r; t++) {
      s2 += " *"
  }
  console.log(s1 + " " + s2)
}

/*----------------------------------------------- 
OUTPUT :

     *
    * 
   *  
  *   
 *    
*     

-----------------------------------------------*/


for (let r = 0; r <= 5; r++) {
  let s1 = ""
  for (let t = 5; t > r; t--) {
      s1 += " "
  }
  let s2 = ""
  for (let t = 0; t < r; t++) {
      s2 += " "
  }
  console.log(s1 + "*" + s2)
}