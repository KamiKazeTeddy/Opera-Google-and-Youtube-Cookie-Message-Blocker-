function ChecknSetMaCookie(maUrl, maSource, madomain){
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
                        chrome.cookies.set({url: "https://www.youtube.com", name: "CONSENT", value: "YES+DE.de+V14+BX", domain: madomain}) //Youtube Cookies
                        chrome.cookies.set({url: "https://www.youtube.com", name: "VISITOR_INFO1_LIVE", value: "kfkINDTTTTM", domain: madomain}) //Youtube Loging pls
                        chrome.cookies.set({url: "https://www.youtube.com", name: "CheckMaCookie", value: "YEET", domain: madomain}) //OWN Check Cookie#
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
        if (document.cookie.search("CheckMaCookie=YEET" + madomain) != -1) //Google doesnt allow me do read my Cookie, so I have to use document.cookie (not like on YT)
        {
            //console.log("MaCookie for Google is set")//DEBUG
            return 0
        }
        else 
        {
            chrome.cookies.set({url: maUrl, name: "CONSENT", value: "YES+DE.de+V14+BX", domain: madomain}) //Google Cookies
            document.cookie = "CheckMaCookie=YEET" + madomain; //OWN Check Cookie
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
        if  ((tab.url).search("google") != -1)
        {
            if ((tab.url).search("google.com") != -1)
            {
                ChecknSetMaCookie("https://www.google.com", "g", ".google.com") //Worldwide
            }
            else if ((tab.url).search("google.de") != -1)
            {
                ChecknSetMaCookie("https://www.google.de", "g", ".google.de") //Germany
            }
            else if ((tab.url).search("google.ac") != -1)
            {
                ChecknSetMaCookie("https://www.google.ac", "g", ".google.ac") //Ascension Island
            }
            else if ((tab.url).search("google.ad") != -1)
            {
                ChecknSetMaCookie("https://www.google.ad", "g", ".google.ad") // Andorra
            }
            else if ((tab.url).search("google.co.jp") != -1)
            {
                ChecknSetMaCookie("https://www.google.co.jp", "g", ".google.co.jp") //Japan
            }
        }
        //Youtube
        else if((tab.url).search("youtube.com") != -1 || (tab.url).search("youtu.be") != -1)
        {
            ChecknSetMaCookie("https://www.youtube.com", "yt", ".youtube.com")      
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
