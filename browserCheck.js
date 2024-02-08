function checkBrowser() {
    var isChromium = window.chrome;

    // Test for Internet Explorer
    var isIE = false || !!document.documentMode;
    if (isIE) {
        const version = document.documentMode;
        alert("You are using Internet Explorer. Version: " + version + ". Please switch to the latest Chrome or Edge browser.");
    } else {
        var isFirefox = typeof InstallTrigger !== 'undefined';
        if (isFirefox) {
            var firefoxVersion = navigator.userAgent.match(/Firefox\/(\d+)/);
            if (firefoxVersion) {
                var intFirefoxVersion = parseInt(firefoxVersion[1])
                console.log("You are using Firefox. Version: " + firefoxVersion);

                // type="datetime-local" support started from version 93
                if (intFirefoxVersion <= 93) {
                    alert("You are using an older version of Firefox. Please update your browser for better compatibility.");
                }
            } else {
                console.log("The user agent string has been modified by the user");
            }
        } else {
            // Opera browser
            var isOpera = window.navigator.userAgent.indexOf("OPR") > -1 || window.navigator.userAgent.indexOf("Opera") > -1;
            var isEdge = navigator.userAgent.indexOf("Edg") != -1;
            if (isOpera) {
                // Latest Opera version supports Chromium
                if (isChromium) {
                    operaVersion = parseInt(navigator.userAgent.match(/OPR\/(\d+)/)[1], 10);
                    console.log("You are using Opera browser with Chromium engine. Version: " + operaVersion);
                } else {
                    operaVersion = parseInt(navigator.userAgent.match(/Opera\/(\d+)/)[1], 10);
                    alert("You are using Opera browser. Version: " + operaVersion + ". Please update your browser for better compatibility.");
                }
            } else if (isEdge) {
                var edgeVersion = parseInt(navigator.userAgent.match(/Edg\/(\d+)/)[1], 10);

                if (isChromium) {
                    console.log("You are using Microsoft Edge with Chromium engine. Version: " + edgeVersion);
                } else {
                    alert("You are using Legacy Microsoft Edge browser. Version: " + edgeVersion + ". Please update your browser for better compatibility.");
                }
            } else {
                // Check for Chrome and Safari
                let safariAgent = navigator.userAgent.indexOf("Safari") > -1;
                let chromeAgent = navigator.userAgent.indexOf("Chrome") > -1;
                if ((chromeAgent) && (safariAgent)) {
                    var chromeVersion = parseInt(navigator.userAgent.match(/Chrome\/(\d+)/)[1], 10);
                    console.log("You are using Chrome browser. Version: " + chromeVersion);
                    if (chromeVersion < 100) {
                        alert("You are using Chrome browser. Version: " + chromeVersion + ". Please update your browser for better compatibility.");
                    }
                } else if (safariAgent) {
                    var safariVersion = parseInt(navigator.userAgent.match(/Version\/(\d+)/)[1], 10);
                    console.log("You are using Safari browser. Version: " + safariVersion);
                    if (safariVersion < 10) {
                        alert("You are using Safari browser. Version: " + safariVersion + ". Please update your browser for better compatibility.");
                    }
                }
            }
        }
    }
}

// Call the function to check the browser
checkBrowser();
