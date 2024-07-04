var lst = document.querySelectorAll(".drum");
for(var i=0;i<lst.length;i++){
    lst[i].addEventListener("click",button_click);
}
function button_click(){
    var temp = this.innerHTML;
    makeSound(temp);
}
document.addEventListener("keydown",function(temp){
    makeSound(temp.key);
});
function makeSound(character){
    switch(character){
        case "w":
            new Audio("./sounds/tom-1.mp3").play();
            break;
        case "a":
            new Audio("./sounds/tom-2.mp3").play();
            break;
        case "s":
            new Audio("./sounds/tom-3.mp3").play();
            break;
        case "d":
            new Audio("./sounds/tom-4.mp3").play();
            break;
        case "j":
            new Audio("./sounds/snare.mp3").play();
            break;
        case "k":
            new Audio("./sounds/crash.mp3").play();
            break;
        case "l":
            new Audio("./sounds/kick-bass.mp3").play();
            break;
    }
    buttonAnimation(character);
    console.log(character);
}
function buttonAnimation(buttonText){
    document.querySelector("."+buttonText).classList.add("pressed");
    setTimeout(function() { 
        document.querySelector("."+buttonText).classList.remove("pressed");
    },100);
}