for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function() {
        this .style.color="white";
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);       
    });
}
addEventListener("keydown", function(even){
    makeSound(even.key);
    buttonAnimation(even.key);
});
function makeSound(key) {
    switch(key) {
        case "w":
                 var audio = new Audio("/sounds/tom-1.mp3");
                 audio.play();
                 break;
        case "a":var tom2 = new Audio("/sounds/tom-2.mp3");
                 tom2.play();
                 break;
        case "s":var tom3 = new Audio("/sounds/tom-3.mp3");
                 tom3.play();
                 break;
        case "d":var tom4 = new Audio("/sounds/tom-4.mp3");
                 tom4.play();
                 break;
        case "j":var crash = new Audio("/sounds/crash.mp3");
                 crash.play();
                 break;
        case "k":var kick = new Audio("/sounds/kick-bass.mp3");
                 kick.play();
                 break; 
        case "l":var snare = new Audio("/sounds/snare.mp3");
                 snare.play();
                 break;
        default:console.log(key);
                  break;
    }}
    function buttonAnimation(currentKey){
        var makeAnimation=document.querySelector("."+currentKey);
        makeAnimation.classList.add("pressed");
        setTimeout(function(){
            makeAnimation.classList.remove("pressed");
        },100);
    }



