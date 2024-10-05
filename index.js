let gameseq = [];
let userseq = [];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let btns = ["red", "green", "yellow", "purple"]

// Starting the game
document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game started");
        started = true;
        levelUp();
    }
});

//creating "flash" class to add bg-c white and setting the time for color to flash.
function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);

}
function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);

}

// flashing the button
function levelUp() {
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    randIdx = Math.floor(Math.random() * 3);
    randColor = btns[randIdx];
    randBtn = document.querySelector(`.${randColor}`);//randColor is the class name,in the above step we assign the btns[randIdx] means btn[0] this will be assigned to randColor that is yellow and here document.querySelector(.${randColor}) = yellow 
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);
}

function checkbtn(idx) {
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length === gameseq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> press any Key to start.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 200)
        reset();
    }
}

function btnpress() {
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);
    console.log(userseq);

    checkbtn(userseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}

