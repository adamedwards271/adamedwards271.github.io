let number = "0";

function test() {
    document.getElementById("polygon").innerHTML = "1";
}



function polygons() {
    number = document.getElementById("polygonNumber").value;
    validateEntry();
    getShape();
}

function validateEntry() {
    if (number <= 10 && number >= -10) {
        number = number;
    } else {
        number = "wrong";
    }

    if (number % 1 != 0) {
        number = Math.round(number);
    }

    if (number < 0) {
        number = Math.abs(number);
    }
}

function getShape() {
    if (number == 0) {
        document.getElementById("polygon").innerHTML = "Your shape is a no-gon"
    } else if (number == 1) {
        document.getElementById("polygon").innerHTML = "Your shape is a henagon"
    } else if (number == 2) {
        document.getElementById("polygon").innerHTML = "Your shape is a digon"
    } else if (number == 3) {
        document.getElementById("polygon").innerHTML = "Your shape is a trigon"
    } else if (number == 4) {
        document.getElementById("polygon").innerHTML = "Your shape is a tetragon"
    } else if (number == 5) {
        document.getElementById("polygon").innerHTML = "Your shape is a pentagon"
    } else if (number == 6) {
        document.getElementById("polygon").innerHTML = "Your shape is a hexagon"
    } else if (number == 7) {
        document.getElementById("polygon").innerHTML = "Your shape is a heptagon"
    } else if (number == 8) {
        document.getElementById("polygon").innerHTML = "Your shape is a octogon"
    } else if (number == 9) {
        document.getElementById("polygon").innerHTML = "Your shape is a enneagon"
    } else if (number == 10) {
        document.getElementById("polygon").innerHTML = "Your shape is a decagon"
    } else {
        document.getElementById("polygon").innerHTML = "Please enter a correct number"
    }
}