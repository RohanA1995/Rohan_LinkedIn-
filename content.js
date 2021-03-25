console.log("Rohan is here");

 var port = chrome.runtime.connect ({
    name: "ContentScript"
}) 


chrome.runtime.onMessage.addListener (function(vx){
    console.log("Rohandata", vx);
    switch(vx.action) {
        case "Run" : Start(vx.mydata)
        break;
    }
    return true;
} ) 


var like = 0;

/* This section is for Post Like Function */

const Start = (vx ,count=0) => {
    var LinkedIn = document.querySelector ('svg[class="mercado-match"]');
    LinkedIn.className = "relative ember-view"; 
    if (LinkedIn.className != "relative ember-view") { 
         console.log("hey bro"); 
         const Time = vx.timevalue;
         var timeoutInterval=setTimeout(() => {
         var likebutton = document.querySelector ('button[aria-pressed="false"]');
         likebutton.click()
         like++;
         notify(vx,like);
         Start(vx,count+1)
         }, Time*1000 );
    }
    
    else {
        return false;
    }
} 

/* This section is for badges   */


const notify = (wax,count = 0) => {
    const sentCount = count;
   
 
      wax = {
        action: "badges",
        badge: {
          tabID: wax.tabID,
          text: sentCount.toString(),
        }
      };
    
    port.postMessage(wax);
  };