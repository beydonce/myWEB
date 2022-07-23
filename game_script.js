// function moveFunction() {
//     const style = document.getElementById('google-Logo').style;
//     for (let i = 1; i <= 69; i++) {
//         const currentMargin = parseInt(style.marginLeft) || 0;
//         style.marginLeft = `${currentMargin + 10}px`;
//     }
// }

let count = 0;
let count2 = 0;

function playAgain() {
    let randomNumber1 = Math.floor(Math.random() * 6) +1;
    let randomNumber2 = Math.floor(Math.random() * 6) +1;
    let randomImages = "dice" + randomNumber1 + ".png";
    let randomImages2 = "dice" + randomNumber2 + ".png";

    document.querySelectorAll("img")[0].setAttribute("src", randomImages);

    document.querySelectorAll("img")[1].setAttribute("src", randomImages2);
    
    if (randomNumber1 > randomNumber2) {
        document.getElementById("header").innerHTML = "🌟Player 1 Wins!🌟";
        document.getElementById("countOne").innerText = `${++count}` ;
    }
    else if(randomNumber2>randomNumber1) {
        document.getElementById("header").innerHTML = "🌟Player 2 Wins!🌟";
        document.getElementById("countTwo").innerText = `${++count2}` ;
    }
    else {
        document.getElementById("header").innerHTML = "Draw !";
    }
}

document.getElementById("end").onclick = function(){
    location.href = "home_screen.html";
}





  
