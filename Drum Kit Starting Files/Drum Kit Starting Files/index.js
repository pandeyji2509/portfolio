var numberofdrumbuttons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberofdrumbuttons;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    //this.style.color="white";
    if(i<=3){
    var audio =new Audio("sounds/tom-"+i+".mp3");
    audio.play();
}
    else if(i==4){
    var audio =new Audio("sounds/snare.mp3");
    audio.play();
}
    else if(i==5){
    var audio =new Audio("sounds/crash.mp3");
    audio.play();
    }
    else{
    var audio =new Audio("sounds/kick-bass.mp3");
    audio.play();
    }
});
}