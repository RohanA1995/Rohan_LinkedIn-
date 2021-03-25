console.log(" hii im in background")

chrome.runtime.onConnect.addListener(function(port) {
    port.onMessage.addListener(function(wax) {
console.log("message", wax)

switch(wax.action) {
    case'Start' : messagegoes(wax)
    break;

    case 'badges':
                if (wax.badge) {
                  chrome.browserAction.setBadgeText({ text: wax.badge.text, tabId: wax.badge.tabID });
                }
               
                break;
}
    })
    
})

const messagegoes = (wax) => {
    var vx= { 
        action: "Run", 
        mydata: wax.rythm 
    }
    chrome.tabs.query({
        active: true,
        currentWindow : true
    }, function(tabs) {
        wax.tabID = tabs[0].id;
        chrome.tabs.sendMessage(tabs[0].id, vx , function(data){
            if (chrome.runtime.lastError) {
            } else {
            }
            console.log("mydata", vx);
        })
    })
}
