/* Use beep() method of notification object */

    function beepOnce()
    {
        try
        {
            intel.xdk.notification.beep(1);
        }
        catch(e) {}
    }
   
      
    /* vibrate the device with vibrate() method of notification object */
    function vibrateDevice()
    {
        try
        {
            intel.xdk.notification.vibrate();
        }
        catch(e) {} 
    }

    /* play a sound using player object */
    function playSound()
    {
        try
        {
            intel.xdk.player.playSound("sounds/dog_bark.wav"); 
        }
        catch(e) { } 
    }
    
    /*Darken the screen*/
    function playDead()
    {
        document.getElementById("shroud").style.display="block";
    }
    
    function wakeUp()
    {
        document.getElementById("shroud").style.display="none";
    }   
