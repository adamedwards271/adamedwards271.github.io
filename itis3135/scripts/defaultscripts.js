let nameNum = 1;
let name = "no name";
let mood = "no mood";

function date() {
    let currentDate = new Date();
    document.getElementById("currentDate").innerHTML = "Today is " + currentDate;
}

function nameAndMood() {
    name = document.getElementById("nameForm").value;
    mood = document.getElementById("moodForm").value;

    document.getElementById("response").innerHTML = "Edwards' Software welcomes you, " + name + "! We're glad you are " + mood +"!";
}

function sayHi() {
    document.getElementById("sayHiMessage").innerHTML = "Hi";
}

function removeHi() {
    document.getElementById("sayHiMessage").innerHTML = "";
}

function randomNumber() {
    let num = Math.ceil(Math.random() * 10);
    document.getElementById("numberMessage").innerHTML = "Your number is " + num + "!";
}

function removeNumber() {
    document.getElementById("numberMessage").innerHTML = "";
}

function changeBackgroundColor() {
    document.body.style.background = "pink";
    document.getElementsByTagName("header").style.background = "#f4fff8";
    document.getElementsByName("header").style.background = "#f4fff8";
}

function originalBackground() {
    document.body.style.background = "#484a47";
}

function callName() {
    if (nameNum==1) {
        document.getElementById("callNameMessage").innerHTML = "You are beautiful.";
    } else if (nameNum==2) {
        document.getElementById("callNameMessage").innerHTML = "You are beautiful.\nYou are amazing.";
    } else if (nameNum==3) {
        document.getElementById("callNameMessage").innerHTML = "You are beautiful.\nYou are amazing.\nYou are awesome.";
    } else if (nameNum==4) {
        document.getElementById("callNameMessage").innerHTML = "You are beautiful.\nYou are amazing.\nYou are awesome.\nYou are " + name + ".";
    } else if (nameNum==5) {
        document.getElementById("callNameMessage").innerHTML = "You are beautiful.\nYou are amazing.\nYou are awesome.\nYou are " + name + ".\nYou are " + mood + ".";
    } else if (nameNum==6) {
        document.getElementById("callNameTakeBack").innerHTML = "THAT IS ENOUGH TAKE IT BACK NOW."
    }
    nameNum = nameNum + 1;
}

function removeName() {
    document.getElementById("callNameMessage").innerHTML = "";
    document.getElementById("callNameTakeBack").innerHTML = "";
    nameNum = 1;
}