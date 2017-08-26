var url = document.location.hostname;
document.getElementById("background-symbol").addEventListener("change", createBackground);
document.getElementById("copy-to-clipboard").addEventListener("click", copyResultToClipBoard);
document.getElementById("line-count").addEventListener("change", createBackground);
document.getElementById("refresh").addEventListener("click", createBackground);

//if (url == "twitch.tv") {
console.log("on twitch page");
var drawer = document.getElementById("drawer");
if (drawer) {
    console.log("drawer found");
}

var formatSymbol = function(c) {
    var template = "<p class = \"symbols\">";
    var result = template + c + "</p>";
    return result;
}
var getDrawSymbol = function() {
    var drawSymbol = document.getElementById("draw-symbol").value;
    return drawSymbol;
}

var getBackgroundSymbol = function() {
    var backgroundSymbol = document.getElementById("background-symbol").value;
    return backgroundSymbol;
}

function createBackground() {
    console.log("creatingBackground");
    var x = 0;
    var result = "";
    var lines = document.getElementById("line-count").value;
    while (x < lines) {

        var y = 0;
        while (y < 35) {

            result += formatSymbol(getBackgroundSymbol());
            y++;
        }

        result += "<br>";
        x++;

    }
    drawer.innerHTML = result;
    var symbols = document.getElementsByClassName("symbols");
    for (var i = 0; i < symbols.length; i++) {
        symbols[i].addEventListener('mouseover', changeSymbol, false);
    }
    reloadData();
}
var getResult = function() {
    var symbols = document.getElementsByClassName("symbols");
    var result = "";
    for (var i = 0; i < symbols.length; i++) {
        result += symbols[i].innerText;
    }
    return result;
}

function copyResultToClipBoard() {
    var result = getResult();
    copyTextToClipboard(result);
    console.log(1);
}

function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");

    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = 0;
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }
    document.body.removeChild(textArea);
}
var changeSymbol = function(event) {
    if (event.buttons == 1 || event.buttons == 3) {
        event.target.innerText = getDrawSymbol();
    }
    reloadData();
}
var reloadData = function() {
    copyResultToChat();
}
createBackground();