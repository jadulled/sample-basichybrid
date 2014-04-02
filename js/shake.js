/*jslint browser:true, devel:true, white:true, vars:true, eqeq:true */
/*global $:false, intel:false*/
//shake object
var watchID;
var objShake = function() {
        return {
            prevX: null,
            prevY: null,
            prevZ: null,
            sensitivity: 0.2,
            helloWorld: function() {
                alert("hello world");
            },
            init: function() {
                //inject a div to display instructions
                var instructionsDiv = document.createElement('div');
                instructionsDiv.id = "shakeInstructionsDiv";
                instructionsDiv.setAttribute("style", "width:100%;text-align:center;font-family:arial;");
                instructionsDiv.innerHTML = "<b>Shake the device to hear it beep</b>";
                document.body.appendChild(instructionsDiv);
                var options = {
                    frequency: 300,
                    adjustForRotation: true
                }; // Update every .3 seconds
                watchID = intel.xdk.accelerometer.watchAcceleration(function(acc) {
                    if (objShake.prevX !== null) {
                        var deltaX = Math.abs(acc.x - objShake.prevX);
                        var deltaY = Math.abs(acc.y - objShake.prevY);
                        var deltaZ = Math.abs(acc.z - objShake.prevZ);
                        if (deltaX > objShake.sensitivity || deltaY > objShake.sensitivity || deltaZ > objShake.sensitivity) {
                            intel.xdk.notification.beep();
                            console.log("beep");
                        }
                    }
                    objShake.prevX = acc.x;
                    objShake.prevY = acc.y;
                    objShake.prevZ = acc.Z;
                }, options);
            }
        };
    }();
document.addEventListener("intel.xdk.device.ready", function() {
    objShake.init(); //start with an injected camera button
}, false);