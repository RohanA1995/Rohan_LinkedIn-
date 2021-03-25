var PPport = chrome.extension.connect(
    {
        name: "popup-Background"
    }
)

const HBO= document.querySelector("#time");
HBO.addEventListener("submit" , function() {
    var times=document.querySelector("#qr").value;
    console.log("See this time ", times)
   
chrome.tabs.query(
    {
        active: true,
        currentWindow: true
    },
    function(tabs) {
        var wax= {
            action: "Start",
            rythm : {
                timevalue: times,
                tabID: tabs[0].id
            }
        };
        sendRequest(wax);
      }
      )        
    }
)





const sendRequest = (data) => {
    try {
        PPport.postMessage(data);
    }
    catch(e) {
        alert("please reload ");
    }
}