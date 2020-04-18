//define vars
let min = 1,
    max = 10,
    guessleft = 3,
    winnum = grandom(min, max);

//UI vars
let nummin = document.querySelector(".min-num");
let nummax = document.querySelector(".max-num");
let game = document.querySelector("#game");
let input = document.querySelector("#guess-input");
let btn = document.querySelector("#guess-btn");
let message = document.querySelector(".message");

nummin.textContent = min;
nummax.textContent = max;
game.addEventListener('mousedown', (e) => {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});
btn.addEventListener("click", () => {
    let int = parseInt(input.value);

   

    //win
    if (int === winnum) {
        gameover(`درست است !! شما برنده شدید ${winnum}  `, "green");
    } else {
        guessleft -= 1;
        if (guessleft === 0) {
            gameover(` شما باختید ، عدد درست :  ${winnum}`, "red");
        } else {
            smessage(` عدد  ${int} درست نیست , شما میتوانید ${guessleft}  بار دیگر امتحان کنید`);
            cleaerin();
        }
    }
    if (isNaN(int) || int < min || int > max) {
        input.style.borderColor = "red";
        smessage("لطفا بین 1 تا 10 انتخاب کنید", "red");
        guessleft += 1;
    }
});

function smessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;

}
function cleaerin(){
    input.value = '';
}

function gameover(msg, color) {
    input.disabled = true;
    input.style.borderColor = color;
    smessage(msg, color);
    btn.value = "بازی مجدد";
    btn.className = 'play-again';
    btn.style.backgroundColor = 'white';
    btn.style.marginTop = '33px';
    btn.style.border = '1px solid green';
    btn.style.color = 'green';
    btn.style.padding = '4px 17px';
}

function grandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}