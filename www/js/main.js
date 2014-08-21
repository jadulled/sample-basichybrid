/*jslint browser:true, devel:true, white:true, vars:true, eqeq:true */
/*global $:false, intel:false*/
/* Use beep() method of notification object */



function beepOnce() {
    try {
		if(intel.xdk.device.platform == "iOS"){
			alert("The Notification object's beep method may not execute on iOS devices.");
		}
		intel.xdk.notification.beep(1);
    } catch (e) {}
} /* vibrate the device with vibrate() method of notification object */

function vibrateDevice() {
    try {
        intel.xdk.notification.vibrate();
    } catch (e) {}
} /* play a sound using player object */

function playSound() {
    try {
		if(intel.xdk.device.platform == "Android"){
			alert("The Player object's playSound method may not execute on Android devices.");
		}
        intel.xdk.player.playSound("sounds/dog_bark.wav");
    } catch (e) {}
} /*Darken the screen*/

function playDead() {
    document.getElementById("shroud").style.display = "block";
}

function wakeUp() {
    document.getElementById("shroud").style.display = "none";
}