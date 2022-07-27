// Welcome
var enter = document.getElementById("enter")

//1st page
var I = document.getElementById("I")
var I_btn = document.getElementById("I-btn")

// 2nd page
var II = document.getElementById("II")
var II_btn_1 = document.getElementById("II-btn-1")
var II_btn_2 = document.getElementById("II-btn-2")
var II_btn_3 = document.getElementById("II-btn-3")

// 2nd page combination buttons
var combination_button = document.getElementById("combination-button")
var combination_button_left = document.getElementById("combination-button-left")
var combination_button_middle = document.getElementById("combination-button-middle")
var combination_button_right = document.getElementById("combination-button-right")

// 7 try agains
var try_again = document.getElementById("try-again")
var try_again_1 = document.getElementById("try-again-1")
var try_again_2 = document.getElementById("try-again-2")
var try_again_3 = document.getElementById("try-again-3")
var try_again_4 = document.getElementById("try-again-4")
var try_again_5 = document.getElementById("try-again-5")
var try_again_6 = document.getElementById("try-again-6")
var try_again_7 = document.getElementById("try-again-7")

//try again buttons to go back to 2nd page
var try_btn_1 = document.getElementById("try-btn-1")
var try_btn_2 = document.getElementById("try-btn-2")
var try_btn_3 = document.getElementById("try-btn-3")
var try_btn_4 = document.getElementById("try-btn-4")
var try_btn_5 = document.getElementById("try-btn-5")
var try_btn_6 = document.getElementById("try-btn-6")
var try_btn_7 = document.getElementById("try-btn-7")

//end
var ended = document.getElementById("ended")

//boolean
let II_1 = false;
let II_2 = false;
let II_3 = false;

//var with digits
var tries = 0;

// Welcome to 1st page
enter.onclick = function () {
    I.style.display = "block";
    welcome.style.display = "none";
}

//1st page to 2nd page
I_btn.onclick = function () {
    II.style.display = "block";
    I.style.display = "none";
}

//2nd page combinations
II_btn_1.onclick = function () {
    II_1 = true;
    combination_button_left.style.display = "block";
    if (II_2 == true && II_3 == true) {
        try_again.style.display = "block";
        tries = tries + 1;
    }

    if (tries == 1) {
        try_again_1.style.display = "block";
    }
    else if (tries == 2) {
        try_again_2.style.display = "block";
    }
    else if (tries == 3) {
        try_again_3.style.display = "block";
    }
    else if (tries == 4) {
        try_again_4.style.display = "block";
    }
    else if (tries == 5) {
        try_again_5.style.display = "block";
    }
    else if (tries == 6) {
        try_again_6.style.display = "block";
    }
    else if (tries == 7) {
        try_again_7.style.display = "block";
    }
    else if (tries == 8) {
        ended.style.display = "block";
    }

}

II_btn_2.onclick = function () {
    II_2 = true;
    combination_button_middle.style.display = "block";
    if (II_1 == true && II_3 == true) {
        try_again.style.display = "block";
        tries = tries + 1;
    }

    if (tries == 1) {
        try_again_1.style.display = "block";
    }
    else if (tries == 2) {
        try_again_2.style.display = "block";
    }
    else if (tries == 3) {
        try_again_3.style.display = "block";
    }
    else if (tries == 4) {
        try_again_4.style.display = "block";
    }
    else if (tries == 5) {
        try_again_5.style.display = "block";
    }
    else if (tries == 6) {
        try_again_6.style.display = "block";
    }
    else if (tries == 7) {
        try_again_7.style.display = "block";
    }
    else if (tries == 8) {
        try_again.style.display = "none";
        ended.style.display = "block";
    }
}

II_btn_3.onclick = function () {
    II_3 = true;
    combination_button_right.style.display = "block";
    if (II_1 == true && II_2 == true) {
        try_again.style.display = "block";
        tries = tries + 1;
    }

    if (tries == 1) {
        try_again_1.style.display = "block";
    }
    else if (tries == 2) {
        try_again_2.style.display = "block";
    }
    else if (tries == 3) {
        try_again_3.style.display = "block";
    }
    else if (tries == 4) {
        try_again_4.style.display = "block";
    }
    else if (tries == 5) {
        try_again_5.style.display = "block";
    }
    else if (tries == 6) {
        try_again_6.style.display = "block";
    }
    else if (tries == 7) {
        try_again_7.style.display = "block";
    }
    else if (tries == 8) {
        ended.style.display = "block";
        try_again.style.display = "none";
    }
}

//7 try again buttons
try_btn_1.onclick = function () {
    try_again_1.style.display = "none";
    try_again.style.display = "none";
    combination_button_left.style.display = "none";
    combination_button_middle.style.display = "none";
    combination_button_right.style.display = "none";
    II_1 = false;
    II_2 = false;
    II_3 = false;
    tries = tries + 1
}

try_btn_2.onclick = function () {
    try_again_2.style.display = "none";
    try_again.style.display = "none";
    combination_button_left.style.display = "none";
    combination_button_middle.style.display = "none";
    combination_button_right.style.display = "none";
    II_1 = false;
    II_2 = false;
    II_3 = false;
}
try_btn_3.onclick = function () {
    try_again_3.style.display = "none";
    try_again.style.display = "none";
    combination_button_left.style.display = "none";
    combination_button_middle.style.display = "none";
    combination_button_right.style.display = "none";
    II_1 = false;
    II_2 = false;
    II_3 = false;
}
try_btn_4.onclick = function () {
    try_again_4.style.display = "none";
    try_again.style.display = "none";
    combination_button_left.style.display = "none";
    combination_button_middle.style.display = "none";
    combination_button_right.style.display = "none";
    II_1 = false;
    II_2 = false;
    II_3 = false;
}
try_btn_5.onclick = function () {
    try_again_5.style.display = "none";
    try_again.style.display = "none";
    combination_button_left.style.display = "none";
    combination_button_middle.style.display = "none";
    combination_button_right.style.display = "none";
    II_1 = false;
    II_2 = false;
    II_3 = false;
}
try_btn_6.onclick = function () {
    try_again_6.style.display = "none";
    try_again.style.display = "none";
    combination_button_left.style.display = "none";
    combination_button_middle.style.display = "none";
    combination_button_right.style.display = "none";
    II_1 = false;
    II_2 = false;
    II_3 = false;
}
try_btn_7.onclick = function () {
    try_again_7.style.display = "none";
    try_again.style.display = "none";
    combination_button_left.style.display = "none";
    combination_button_middle.style.display = "none";
    combination_button_right.style.display = "none";
    II_1 = false;
    II_2 = false;
    II_3 = false;
}
