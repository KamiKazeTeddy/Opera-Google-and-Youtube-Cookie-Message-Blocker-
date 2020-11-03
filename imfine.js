function ChecknSetMaCookie(maUrl, maSource){
    if (maSource == "yt")
    {
        //YOUTUBE
        chrome.cookies.get({url: maUrl, name: "CheckMaCookie"}, function(cookie)
                {
                    try {
                        if(cookie.value == "YEET")
                        {
                            //console.log("Cookie set. END YEETUNG 1") //DEBUG
                            return 0 //Cookie Gesetzt
                        }
                    }
                    catch {
                        //console.log("MaCookie not set")
                        chrome.cookies.set({url: "https://www.youtube.com", name: "CONSENT", value: "YES+DE.de+V14+BX", domain: ".youtube.com"}) //Youtube Cookies
                        chrome.cookies.set({url: "https://www.youtube.com", name: "VISITOR_INFO1_LIVE", value: "kfkINDTTTTM", domain: ".youtube.com"}) //Youtube Loging pls
                        chrome.cookies.set({url: "https://www.youtube.com", name: "CheckMaCookie", value: "YEET", domain: ".youtube.com"}) //OWN Check Cookie#
                        //console.log("2. Youtube Cookie set.") //DEBUG
                        chrome.tabs.getSelected(null, function(tab) { //Reload page
                            var code = 'window.location.reload();';
                            chrome.tabs.executeScript(tab.id, {code: code});
                            })
                    }
                })
    }
    else if (maSource == "g")
    {
        //GOOGLE
        if (document.cookie.search("CheckMaCookie=YEET") != -1) //Google doesnt allow me do read my Cookie, so I have to use document.cookie (not like on YT)
        {
            //console.log("MaCookie for Google is set")//DEBUG
            return 0
        }
        else 
        {
            chrome.cookies.set({url: "https://www.google.com", name: "CONSENT", value: "YES+DE.de+V14+BX", domain: ".google.com"}) //Google Cookies
            document.cookie = "CheckMaCookie=YEET"; //OWN Check Cookie
            //chrome.cookies.set({url: "https://www.google.com", name: "CheckMaCookie", value: "YEET", domain: ".google.com"}) //OWN Check Cookie //This doesnt work for google, dunno why
            chrome.tabs.getSelected(null, function(tab) { //Reload page
                var code = 'window.location.reload();';
                chrome.tabs.executeScript(tab.id, {code: code});
                })
        }
    }
                    
}

function setGYCookie(tab) {
    if(tab.url !== undefined)
    {
        //Google
        if ((tab.url).search("google.com") != -1)
        {
            ChecknSetMaCookie("https://www.google.com", "g")
        }
        //Youtube
        else if((tab.url).search("youtube.com") != -1 || (tab.url).search("youtu.be") != -1)
        {
            ChecknSetMaCookie("https://www.youtube.com", "yt")      
        }
    }
}


chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) { //Checks Tabstatus + activate script when Tab changes
    if (changeInfo.status == 'complete' && tab.active) {
        //console.log("1. PendingURL:" + tab.pendingUrl);
        //console.log("1. URL: " + tab.url); //Outputs the current URL (DEBUG)
        setGYCookie(tab)
         
    }
  })
