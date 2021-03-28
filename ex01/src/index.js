
var capsLock = document.getElementById('caps-lock');
var textarea = document.getElementById('textarea');
var capsLock = document.getElementById('caps-lock');
var shift = document.getElementById('shift');

function capsLockOn(result) {
    if (result === "off") {
        capsLock.value = "on";
    }
    if (result === "on") {
        capsLock.value = "off";
    }
}

function display(result) {
    if (capsLock.value === "on") {
        textarea.value = textarea.value + result.toUpperCase();
    } else if (shift.value === "on") {
        textarea.value = textarea.value + result.toUpperCase();
        shift.value = "off";
    } else {
        textarea.value = textarea.value + result;
    }
}

function backSpace() {
    textarea.value = textarea.value.slice(0, -1);
}

function enter() {
    textarea.value = textarea.value + '\n';
}

function myAlert() {
    alert(textarea.value);
}

function shiftOn() {
    if (capsLock.value === "off") {
        shift.value = "on";
    }
}
