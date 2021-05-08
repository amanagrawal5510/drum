var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0; i<numberOfDrumButtons;i++)
{
    var element = document.querySelectorAll(".drum")[i];
       element.addEventListener("click", gotClicked);
}

function gotClicked()
{
    //var id = this.innerHTML;
    
    playSound(this.innerHTML);

    btnAnimation(this.innerHTML);

    

}

document.addEventListener("keypress",function(event){
    playSound(event.key);

    btnAnimation(event.key);
});



function playSound(key)
{
    switch(key)
    {
        case "w":
           
            var audio_w = new Audio("sounds/tom-1.mp3");
            audio_w.play();
            break;
           

        case "a":
            
             var audio_a = new Audio("sounds/tom-2.mp3");
             audio_a.play();
             break;
            
        case "s":
           
            var audio_s = new Audio("sounds/tom-3.mp3");
            audio_s.play();
            break;
           
        case "d":
           
            var audio_d = new Audio("sounds/tom-4.mp3");
            audio_d.play();
            break;
           
        case "j":
           
            var audio_j = new Audio("sounds/snare.mp3");
            audio_j.play();
            break;
           
        case "k":
           
            var audio_k = new Audio("sounds/crash.mp3");
            audio_k.play();
            break;
           
        default:
           
            var audio_l = new Audio("sounds/kick-bass.mp3");
            audio_l.play();
            break;
        
    }
}

function btnAnimation(key)
{
    var activeButton = document.querySelector("." +key);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}