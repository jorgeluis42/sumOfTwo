// find lowest number and second lowest number
//add both numbers and only those two 

function sumTwoSmallestNumbers(numbers) {  
    let smallNumber = numbers.sort(function(a,b){return a-b;});
    let count=0;
  
    for(i=0; i<smallNumber.length; i++){
      if(i==0){
        count+=smallNumber[0];
      }
      if(i==1){
        count+=smallNumber[1];
      }
    }
    return count;
  }