chrome.cookies.set({url: "https://www.google.com", name: "CONSENT", value: "YES+DE.de+V14+BX", domain: ".google.com"}) //Google Cookies
chrome.cookies.set({url: "https://www.youtube.com", name: "CONSENT", value: "YES+DE.de+V14+BX", domain: ".youtube.com"}) //Youtube Cookie
chrome.cookies.set({url: "https://www.youtube.com", name: "NID", value: "204=wvaNJqiHUGet-fvFDfVVdE1ZSB8-2mW1zd4jqi5voEl-E1ZT5XYPU7ag08kOPuuPLsGlBojjjBSHnSs3RIimsB0wNj9a_m1S7sd6WSVZvPxcwJb_9j-HLM-1aLbtQn7sOBw1TIohf4Ncvj3RMRDQtTU6MVGs8_XU641TjDp9qY0", domain: ".youtube.com"})

chrome.tabs.onCreated.addListener(function(tabI) {
    console.log("1. PendingURL:" + tabI.pendingUrl);
    console.log("1. URL: " + tabI.url); //Outputs the current URL (DEBUG)
    setGYCookie(tabI)

    chrome.tabs.onActivated.addListener(function (tabInfo) {
        chrome.tabs.get(tabInfo.tabId, function(tabII) {
            console.log("2. PendingURL:" + tabII.pendingUrl);
            console.log("2. URL: " + tabII.url); //Outputs the current URL (DEBUG)
            setGYCookie(tabII)

        });
    });
    
    
});

function setGYCookie(tab) {
    if(!(tab.pendingUrl === void(0)))
    {
        if ((tab.pendingUrl).search("google.com") != -1 || (tab.pendingUrl).search("youtube.com") != -1 || (tab.pendingUrl).search("youtu.be") != -1 || (tab.pendingUrl).search("chrome://startpage/private") != -1)
        {
            chrome.cookies.set({url: "https://www.google.com", name: "CONSENT", value: "YES+DE.de+V14+BX", domain: ".google.com"}) //Google Cookies
            chrome.cookies.set({url: "https://www.youtube.com", name: "CONSENT", value: "YES+DE.de+V14+BX", domain: ".youtube.com"}) //Youtube Cookie
            chrome.cookies.set({url: "https://www.youtube.com", name: "NID", value: "204=wvaNJqiHUGet-fvFDfVVdE1ZSB8-2mW1zd4jqi5voEl-E1ZT5XYPU7ag08kOPuuPLsGlBojjjBSHnSs3RIimsB0wNj9a_m1S7sd6WSVZvPxcwJb_9j-HLM-1aLbtQn7sOBw1TIohf4Ncvj3RMRDQtTU6MVGs8_XU641TjDp9qY0", domain: ".youtube.com"})
            console.log("Google + Youtube Cookie set.")
        }
    }
    
    
    if(!(tab.url === void(0)))
    {
        if ((tab.url).search("google.com") != -1 || (tab.url).search("youtube.com") != -1 || (tab.url).search("youtu.be") != -1 || (tab.pendingUrl).search("chrome://startpage/private") != -1)
        {
            chrome.cookies.set({url: "https://www.google.com", name: "CONSENT", value: "YES+DE.de+V14+BX", domain: ".google.com"}) //Google Cookies
            chrome.cookies.set({url: "https://www.youtube.com", name: "CONSENT", value: "YES+DE.de+V14+BX", domain: ".youtube.com"}) //Youtube Cookie
            chrome.cookies.set({url: "https://www.youtube.com", name: "NID", value: "204=wvaNJqiHUGet-fvFDfVVdE1ZSB8-2mW1zd4jqi5voEl-E1ZT5XYPU7ag08kOPuuPLsGlBojjjBSHnSs3RIimsB0wNj9a_m1S7sd6WSVZvPxcwJb_9j-HLM-1aLbtQn7sOBw1TIohf4Ncvj3RMRDQtTU6MVGs8_XU641TjDp9qY0", domain: ".youtube.com"})
            console.log("Google + Youtube Cookie set.")
        }
    }
}

/*

chrome.tabs.onActivated.addListener(function(tabInfo) {
    chrome.tabs.get(tabInfo.tabId, function(tab) {
        console.log(tab.url); //Outputs the current URL (DEBUG)
        
        if ((tab.url).search("google.com") != -1 || (tab.url).search("youtube.com") != -1 || (tab.url).search("youtu.be") != -1)
        {
            console.log("if1") //DEBUG
            chrome.cookies.set({url: "https://www.google.com", name: "CONSENT", value: "YES+DE.de+V14+BX", domain: ".google.com"}) //Google Cookies
            console.log("Google found. Cookie set.")

            if((tab.url).search("youtube.com") != -1 || (tab.url).search("youtu.be") != -1)
            {
                console.log("if2") //DEBUG
                chrome.cookies.set({url: "https://www.youtube.com", name: "CONSENT", value: "YES+DE.de+V14+BX", domain: ".youtube.com"}) //Youtube Cookie
                chrome.cookies.set({url: "https://www.youtube.com", name: "NID", value: "204=wvaNJqiHUGet-fvFDfVVdE1ZSB8-2mW1zd4jqi5voEl-E1ZT5XYPU7ag08kOPuuPLsGlBojjjBSHnSs3RIimsB0wNj9a_m1S7sd6WSVZvPxcwJb_9j-HLM-1aLbtQn7sOBw1TIohf4Ncvj3RMRDQtTU6MVGs8_XU641TjDp9qY0", domain: ".youtube.com"})
                console.log("Youtube found. Cookie set.")
            }
        }
    });
});



*/