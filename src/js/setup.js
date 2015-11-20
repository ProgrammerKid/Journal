var setup = {
    secondsUntilDone: 10,
    done: false
};

window.setInterval(function() {
    var elem = document.getElementById("setup-time-left");
    if (setup.secondsUntilDone >= 0) {
        elem.innerHTML = setup.secondsUntilDone;
        setup.secondsUntilDone--;
    } else if (!setup.done) {
        // Create button
        var button = document.createElement("button");
        button.innerHTML = "Proceed To Application";
        button.id = "setup-done-button";
        button.onclick = function() { window.location = "index.html"; };

        // Install Database
        localStorage.setItem("journal", "{entries: {}}");

        document.getElementById("setup-completion").innerHTML = "";
        document.getElementById("setup-completion").appendChild(button);
        setup.done = true;
    }
}, 1000);
