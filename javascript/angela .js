//prompt("what is your name?");
//prompt("what is their name?");
//var lovescore=Math.random()*100;
//lovescore=Math.floor(lovescore)+1;
//alert("your love score is"+lovescore+"%");

//to find
var guestlist=["angela","jack","james","lara","jason"];
var guestName=prompt("what is your name?");
if(guestlist.includes(guestName)){
    alert("welcome");
}
else{
    alert("sorry,may be next time");
}

//tu push
var output=[];
var count=1;
function fizzbuzz(){
    output.push(count);
    console.log(output);
}

