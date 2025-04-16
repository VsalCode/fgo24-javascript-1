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

/* output :

* * * * * 
*       * 
*       * 
*       * 
* * * * * 

*/