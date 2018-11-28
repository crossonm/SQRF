function findSquareRoot() {
   var theNumber = Number(prompt("Pick a number"));
   var numsquared = theNumber*theNumber;
   numsquared = document.getElementById("squarednum").innerHTML=theNumber*theNumber;
    
}

function giveSquareRoot() {
    var theNumber = Number(prompt("Pick a number"));
    var theroot = Math.sqrt(theNumber);
    theroot =  document.getElementById("squarerootnum").innerHTML=Math.sqrt(theNumber);
 }


