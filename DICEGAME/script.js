function roll(){
    var ran1 = Math.random()*6;
    ran1 = (Math.floor(ran1))+1;

    var ran2 = Math.random()*6;
    ran2 = (Math.floor(ran2))+1;

    if(ran1 == 1){
        document.querySelector(".img1").setAttribute("src","dice-152173_1280.png");
    }else if(ran1 == 2){
        document.querySelector(".img1").setAttribute("src","dice-152174_1280.png");
    }else if(ran1 == 3){
        document.querySelector(".img1").setAttribute("src","dice-152175_1280.png");
    }else if(ran1 == 4){
        document.querySelector(".img1").setAttribute("src","dice-152176_1280.png");
    }else if(ran1 == 5){
        document.querySelector(".img1").setAttribute("src","dice-152177_1280.png");
    }else if(ran1 == 6){
        document.querySelector(".img1").setAttribute("src","dice-152178_1280.png");
    }

    if(ran2 == 1){
        document.querySelector(".img2").setAttribute("src","dice-152173_1280.png");
    }else if(ran2 == 2){
        document.querySelector(".img2").setAttribute("src","dice-152174_1280.png");
    }else if(ran2 == 3){
        document.querySelector(".img2").setAttribute("src","dice-152175_1280.png");
    }else if(ran2 == 4){
        document.querySelector(".img2").setAttribute("src","dice-152176_1280.png");
    }else if(ran2 == 5){
        document.querySelector(".img2").setAttribute("src","dice-152177_1280.png");
    }else if(ran2 == 6){
        document.querySelector(".img2").setAttribute("src","dice-152178_1280.png");
    }

    if(ran1>ran2){
        document.querySelector(".player").innerHTML = " player 1 wins";
        document.querySelector(".player").style.visibility = "visible";
        document.querySelector(".fa1").style.visibility = "visible";
        alert("Player 1 wins");
    }else if(ran2>ran1){
        document.querySelector(".player").innerHTML = "player 2 wins";
        document.querySelector(".player").style.visibility = "visible";
        document.querySelector(".fa2").style.visibility = "visible";
        alert("player 2 wins");
    }else{
        document.querySelector(".player").innerHTML = "Draw";
        document.querySelector(".player").style.visibility = "visible";
        alert("Draw");
    }

    if(ran1>ran2){
        document.querySelector(".fa2").style.visibility = "hidden";
    }else if(ran2>ran1){
        document.querySelector(".fa1").style.visibility = "hidden";
    }else{
        document.querySelector(".fa2").style.visibility = "hidden";
        document.querySelector(".fa1").style.visibility = "hidden";
    }
}