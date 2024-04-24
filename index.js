const music = document.querySelector("#myButton");
const audio = document.querySelector("#myAudio");
const playButton = document.querySelector("#playButton");
const pauseButton = document.querySelector("#pauseButton");

music.addEventListener("click", () => {
    if(myAudio.paused) {
        audio.play();
        pauseButton.style.display = "block";
        playButton.style.display = "none";
    }
    else {
        audio.pause();
        pauseButton.style.display = "none";
        playButton.style.display = "block";
    }
})

const checkButton = document.querySelector("#checkButton");
checkButton.addEventListener("click", result);
const par = document.querySelector("#show");
const JackPics = document.querySelector("#victorySmile");

function result(e) {
    e.preventDefault();

    let points = 0;
    if(document.querySelector("#answer1").checked) {
        points++;
    } 
    if(document.querySelector("#answer2").checked) {
        points++;
    } 
    if(document.querySelector("#answer3").checked) {
        points++;
    } 
    if(document.querySelector("#answer4").checked) {
        points++;
    } 
    if(document.querySelector("#answer5").checked) {
        points++;
    } 
    if(document.querySelector("#answer6").checked) {
        points++;
    } 
    if(document.querySelector("#answer7").checked) {
        points++;
    } 
    if(document.querySelector("#answer8").checked) {
        points++;
    } 
    if(document.querySelector("#answer9").checked) {
        points++;
    } 
    if(document.querySelector("#answer10").checked) {
        points++;
    } 
    par.textContent = "Ваши баллы: " + points + "/10";
    JackPics.style.display = "block";
    par.style.padding = "10px";

    if(points >= 0 && points < 4) {
        JackPics.src="Jack1.jpg";
    }
    if(points >= 4 && points < 7) {
        JackPics.src="Jack2.jpg";
    }
    if(points >= 7 && points < 10) {
        JackPics.src="Jack3.jpg";
    }
    if(points === 10) {
        JackPics.src="JackSmiles.gif";
    }
}

const tryAgain = document.querySelector("#tryAgain");
tryAgain.addEventListener("click", () => {
    window.location.reload(); 
    scroll(0,0);
})

const showAnswers = document.querySelector("#showAnswers");
const rightAnswers = document.querySelectorAll(".correct");
showAnswers.addEventListener("click", function onClick(event) {
    rightAnswers.forEach((answer) => {
        answer.style.color = "#1db1bf";
        answer.style.fontWeight = "bold";
        scroll(0,0);
    })
})

gsap.to("h1", {
    text: "КВИЗ ПИРАТЫ КАРИБСКОГО МОРЯ",
    duration: 3,
    delay: 0.5,
    ease: "power1.in",
})




