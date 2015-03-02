(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  Beep */
    $(document).on("click", ".uib_w_3", function(evt)
    {
        /* your code goes here */ 
         try {
        if(intel.xdk.device.platform == "iOS"){
            alert("The Notification object's beep method may not execute on iOS devices.");
        }
        navigator.notification.beep(1);
    } catch (e) {}
    });
    
        /* button  Vibrate */
    $(document).on("click", ".uib_w_4", function(evt)
    {
        /* your code goes here */ 
                 try {
        navigator.notification.vibrate(1000);
    } catch (e) {}
    });
    
        /* button  Play Sound */
    $(document).on("click", ".uib_w_5", function(evt)
    {
        /* your code goes here */ 
         try {
        if(intel.xdk.device.platform == "Android"){
            alert("The Player object's playSound method may not execute on Android devices.");
        }
        intel.xdk.player.playSound(intel.xdk.webRoot + "sounds/dog_bark.wav");
    } catch (e) {}
    });
    
        /* button  Play Dead */
    $(document).on("click", ".uib_w_6", function(evt)
    {
        /* your code goes here */ 
        document.getElementById("shroud").style.display = "block";
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
