//var icon = document.getElementById("icon-drawer-artist");
var modals = document.getElementsByClassName("js-chat-interface chat-interface__wrap ember-view");
var chatContainers = document.getElementsByClassName("textarea-contain ember-view");
var toogled = false;
var popupContainerId = 'twitchdrawer-view'
var popupHtml = '<div class="twitchdrawer-box"> <div class="panel"><div class="tool"> <img class="twitchdrawer-box-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDE5LjI5MSAxOS4yOTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE5LjI5MSAxOS4yOTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNy42MjEsMTAuMjY3Yy0wLjM2NywwLjQwNC0wLjQ1NywwLjY5NC0wLjkzOCwxLjQ1NGMwLjMxMSwwLjIxNywwLjkwOCwwLjcxOCwxLjMyMiwxLjU4MSAgIGMwLjgyNy0wLjQ3NSwxLjIxMy0wLjU0NywxLjY1MS0wLjkxNmMyLjg2Mi0yLjQxLDkuODctMTEuMDQ5LDkuNjI5LTExLjI5OUMxOS4wMzIsMC44MjIsMTAuMTQxLDcuNTAzLDcuNjIxLDEwLjI2N3ogTTUuODU3LDEyLjM5MiAgIGMtMS4yNDMtMC4yMi0yLjQ3LDAuNTY2LTMuMjg5LDIuNTNjLTAuODIsMS45NjQtMi4yODQsMi43NS0yLjU2OCwyLjcwMmMxLjUyOCwwLjU1Myw2LjE4OCwxLjk2Nyw3LjM0Ni0zLjQxNiAgIEM2Ljg1NCwxMi45MTcsNS44NTcsMTIuMzkyLDUuODU3LDEyLjM5MnoiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />     <input type="text" id="draw-symbol" class="symb" value="█"></div>   <div class="tool">      <img class="twitchdrawer-box-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ0NC44OTIgNDQ0Ljg5MiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDQ0Ljg5MiA0NDQuODkyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCI+CjxnIGlkPSJYTUxJRF80NzZfIj4KCTxwYXRoIGlkPSJYTUxJRF81MDNfIiBkPSJNNDQwLjQ5OCwxNzMuMTAzYzUuODU4LTUuODU3LDUuODU4LTE1LjM1NSwwLTIxLjIxM2wtMjIuNTExLTIyLjUxMWMtNS4wOTEtNS4wOTEtMTMuMDg0LTUuODQ2LTE5LjAzOC0xLjggICBsLTQ3LjMzMiwzMi4xN2wzMS45NzUtNDcuNjUyYzMuOTkzLTUuOTUxLDMuMjE5LTEzLjg5Ny0xLjg1LTE4Ljk2NGwtNDguODMtNDguODNjLTQuNTA4LTQuNTA4LTExLjM3Mi01LjY3NS0xNy4xMTQtMi45MDggICBsLTguNDQzLDQuMDY1bDQuMDQzLTguOTdjMi41NjMtNS42ODUsMS4zNDEtMTIuMzYxLTMuMDY4LTE2Ljc3MUwyOTMuMDAyLDQuMzkzYy01Ljg1Ny01Ljg1Ny0xNS4zNTUtNS44NTctMjEuMjEzLDAgICBsLTExOS4wNiwxMTkuMDU5bDE2OC43MSwxNjguNzFMNDQwLjQ5OCwxNzMuMTAzeiIgZmlsbD0iIzAwMDAwMCIvPgoJPHBhdGggaWQ9IlhNTElEXzExOTlfIiBkPSJNMTMwLjU2LDE0NS42MjJsLTM0LjQ2NiwzNC40NjZjLTIuODEzLDIuODEzLTQuMzk0LDYuNjI4LTQuMzk0LDEwLjYwNnMxLjU4LDcuNzk0LDQuMzk0LDEwLjYwNiAgIGwzMi42OTQsMzIuNjk0YzYuMjk5LDYuMjk5LDkuMzU0LDE0Ljk5Miw4LjM4MiwyMy44NDljLTAuOTcxLDguODUxLTUuODQzLDE2LjY3Ny0xMy4zNjYsMjEuNDczICAgQzI3LjczNiwzNDAuNTU0LDE4Ljc4MSwzNDkuNTEsMTUuODM5LDM1Mi40NTNjLTIxLjExOSwyMS4xMTgtMjEuMTE5LDU1LjQ4LDAsNzYuNmMyMS4xNCwyMS4xNCw1NS41MDQsMjEuMDk4LDc2LjYsMCAgIGMyLjk0NC0yLjk0MywxMS45MDItMTEuOTAyLDczLjEzNi0xMDcuOTY1YzQuNzg0LTcuNTA1LDEyLjYwNy0xMi4zNjYsMjEuNDYyLTEzLjMzOWM4Ljg4My0wLjk2OSwxNy41NzUsMi4wNzEsMjMuODU5LDguMzU0ICAgbDMyLjY5NCwzMi42OTRjNS44NTcsNS44NTcsMTUuMzU2LDUuODU3LDIxLjIxMywwbDM0LjQ2Ny0zNC40NjdMMTMwLjU2LDE0NS42MjJ6IE03MC4wNSw0MDQuODI1Yy04LjI4LDguMjgtMjEuNzA0LDguMjgtMjkuOTgzLDAgICBjLTguMjgtOC4yOC04LjI4LTIxLjcwNCwwLTI5Ljk4M2M4LjI4LTguMjgsMjEuNzA0LTguMjgsMjkuOTgzLDBDNzguMzMsMzgzLjEyMSw3OC4zMywzOTYuNTQ1LDcwLjA1LDQwNC44MjV6IiBmaWxsPSIjMDAwMDAwIi8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" /> <input type="text" id="background-symbol" class="symb" value="░"><br>   </div>    <div class="tool">         <img class="twitchdrawer-box-icon" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjI0cHgiIGhlaWdodD0iMjRweCIgdmlld0JveD0iMCAwIDQzOC41MzMgNDM4LjUzMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDM4LjUzMyA0MzguNTMzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTQyMC4yNjUsMzI4Ljg5N0gxOC4yNzRjLTQuOTUyLDAtOS4yMzUsMS44MTMtMTIuODUxLDUuNDI4QzEuODA3LDMzNy45MzgsMCwzNDIuMjI0LDAsMzQ3LjE3MnYzNi41NDggICAgYzAsNC45NDksMS44MDcsOS4yMyw1LjQyNCwxMi44NDhjMy42MTksMy42MTMsNy45MDIsNS40MjQsMTIuODUxLDUuNDI0aDQwMS45OTFjNC45NDgsMCw5LjIyOS0xLjgxMSwxMi44NDctNS40MjQgICAgYzMuNjE0LTMuNjE3LDUuNDIxLTcuODk4LDUuNDIxLTEyLjg0OHYtMzYuNTQ4YzAtNC45NDgtMS44LTkuMjMzLTUuNDIxLTEyLjg0N0M0MjkuNDk1LDMzMC43MTEsNDI1LjIxNywzMjguODk3LDQyMC4yNjUsMzI4Ljg5N3ogICAgIiBmaWxsPSIjMDAwMDAwIi8+CgkJPHBhdGggZD0iTTQzMy4xMTIsNDEuOTY4Yy0zLjYxNy0zLjYxNy03Ljg5OC01LjQyNi0xMi44NDctNS40MjZIMTguMjc0Yy00Ljk1MiwwLTkuMjM1LDEuODA5LTEyLjg1MSw1LjQyNiAgICBDMS44MDcsNDUuNTgzLDAsNDkuODY2LDAsNTQuODEzVjkxLjM2YzAsNC45NDksMS44MDcsOS4yMjksNS40MjQsMTIuODQ3YzMuNjE5LDMuNjE4LDcuOTAyLDUuNDI0LDEyLjg1MSw1LjQyNGg0MDEuOTkxICAgIGM0Ljk0OCwwLDkuMjI5LTEuODA3LDEyLjg0Ny01LjQyNGMzLjYxNC0zLjYxNyw1LjQyMS03Ljg5OCw1LjQyMS0xMi44NDdWNTQuODEzQzQzOC41MzMsNDkuODY2LDQzNi43MjksNDUuNTgzLDQzMy4xMTIsNDEuOTY4eiIgZmlsbD0iIzAwMDAwMCIvPgoJCTxwYXRoIGQ9Ik00MjAuMjY1LDE4Mi43MkgxOC4yNzRjLTQuOTUyLDAtOS4yMzUsMS44MDktMTIuODUxLDUuNDI2QzEuODA3LDE5MS43NjEsMCwxOTYuMDQ0LDAsMjAwLjk5MnYzNi41NDcgICAgYzAsNC45NDgsMS44MDcsOS4yMzYsNS40MjQsMTIuODQ3YzMuNjE5LDMuNjE0LDcuOTAyLDUuNDI4LDEyLjg1MSw1LjQyOGg0MDEuOTkxYzQuOTQ4LDAsOS4yMjktMS44MTMsMTIuODQ3LTUuNDI4ICAgIGMzLjYxNC0zLjYxLDUuNDIxLTcuODk4LDUuNDIxLTEyLjg0N3YtMzYuNTQ3YzAtNC45NDgtMS44MDctOS4yMzEtNS40MjEtMTIuODQ3QzQyOS40OTUsMTg0LjUyOCw0MjUuMjE3LDE4Mi43Miw0MjAuMjY1LDE4Mi43MnoiIGZpbGw9IiMwMDAwMDAiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" />  <input type="number" id="line-count" class="symb" value="10"><br>   </div>     </div>   <input type="button" id="copy-to-clipboard" class="accept" value="Copy to clipboard">  <input type="button" id="refresh" class="accept" value="Clear">  <div id="drawer" class="panel"></div>   </div>';
var url = document.location.hostname;
var twitchDrawerIcon = "data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjMycHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDQ1OSA0NTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1OSA0NTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8ZyBpZD0icGFsZXR0ZSI+CgkJPHBhdGggZD0iTTIyOS41LDBDMTAyLDAsMCwxMDIsMCwyMjkuNVMxMDIsNDU5LDIyOS41LDQ1OWMyMC40LDAsMzguMjUtMTcuODUsMzguMjUtMzguMjVjMC0xMC4yLTIuNTUtMTcuODUtMTAuMi0yNS41ICAgIGMtNS4xLTcuNjUtMTAuMi0xNS4zLTEwLjItMjUuNWMwLTIwLjQsMTcuODUxLTM4LjI1LDM4LjI1LTM4LjI1aDQ1LjljNzEuNCwwLDEyNy41LTU2LjEsMTI3LjUtMTI3LjVDNDU5LDkxLjgsMzU3LDAsMjI5LjUsMHogICAgIE04OS4yNSwyMjkuNWMtMjAuNCwwLTM4LjI1LTE3Ljg1LTM4LjI1LTM4LjI1UzY4Ljg1LDE1Myw4OS4yNSwxNTNzMzguMjUsMTcuODUsMzguMjUsMzguMjVTMTA5LjY1LDIyOS41LDg5LjI1LDIyOS41eiAgICAgTTE2NS43NSwxMjcuNWMtMjAuNCwwLTM4LjI1LTE3Ljg1LTM4LjI1LTM4LjI1UzE0NS4zNSw1MSwxNjUuNzUsNTFTMjA0LDY4Ljg1LDIwNCw4OS4yNVMxODYuMTUsMTI3LjUsMTY1Ljc1LDEyNy41eiAgICAgTTI5My4yNSwxMjcuNWMtMjAuNCwwLTM4LjI1LTE3Ljg1LTM4LjI1LTM4LjI1UzI3Mi44NSw1MSwyOTMuMjUsNTFzMzguMjUsMTcuODUsMzguMjUsMzguMjVTMzEzLjY1LDEyNy41LDI5My4yNSwxMjcuNXogICAgIE0zNjkuNzUsMjI5LjVjLTIwLjQsMC0zOC4yNS0xNy44NS0zOC4yNS0zOC4yNVMzNDkuMzUsMTUzLDM2OS43NSwxNTNTNDA4LDE3MC44NSw0MDgsMTkxLjI1UzM5MC4xNSwyMjkuNSwzNjkuNzUsMjI5LjV6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==";
var popup;

var init = function() {

    var modal = modals[0];
    var chatContainer = chatContainers[0];
    var icon = document.createElement("img");
    icon.id = "icon-drawer-artist";
    icon.src = twitchDrawerIcon;
    chatContainers[0].appendChild(icon);
    modal.appendChild(initializeContainer(popupContainerId));
    popup = document.getElementById(popupContainerId);
    console.log(popup);
    var icon = document.getElementById("icon-drawer-artist");
    icon.addEventListener("click", toogle);

    //if (url == "twitch.tv") {
    console.log("on twitch page");
    var drawer = document.getElementById("drawer");
    if (drawer) {
        console.log("drawer found");
    }
}
var initializeContainer = function(id) {
    var container = document.createElement('div');
    container.id = id;
    //container.innerHTML = html;
    return container;
}

function toogle() {
    console.log("here");
    if (toogled) {
        console.log(toogled);
        console.log(popup);
        if (popup) popup.innerHTML = "";
        toogled = false;
    } else {
        console.log(toogled);
        console.log(popup);
        if (popup) {
            popup.innerHTML = popupHtml;
            document.getElementById("background-symbol").addEventListener("change", createBackground);
            document.getElementById("copy-to-clipboard").addEventListener("click", copyResultToClipBoard);
            document.getElementById("line-count").addEventListener("change", createBackground);
            document.getElementById("refresh").addEventListener("click", createBackground);

            createBackground();
        }
        toogled = true;
    }
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
        symbols[i].addEventListener('mousedown', changeSymbol, false);
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
        console.log("here");
        if (event.ctrlKey) { event.target.innerText = getBackgroundSymbol(); } else { event.target.innerText = getDrawSymbol(); }
    }
    reloadData();
}
var reloadData = function() {
    var chat = document.getElementsByClassName("js-chat-input chat-input balloon-wrapper ember-view");
    //console.log(chat);

}
document.body.onload = init;