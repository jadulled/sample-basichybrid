/*jslint browser:true, devel:true, white:true, vars:true, eqeq:true */
/*global $:false, intel:false*/
//camera object
var objCamera = function() {
        return {
            capturePhoto: function() {
                intel.xdk.camera.takePicture(50, false, "jpg");
            },
            onCamera: function(evt) {
                if (evt.type == "intel.xdk.camera.picture.add") {
                    if (evt.success === true) {
                        // create image 
                        var largeImage = document.getElementById('largeImage');
                        //show the filename in the console
                        console.log(evt.filename);
                        //save the image
                        largeImage.src = intel.xdk.camera.getPictureURL(evt.filename);
                        largeImage.style.width = "480px";
                        largeImage.style.display = "block";
                    } else {
                        if (evt.message !== undefined) {
                            alert(evt.message);
                        } else {
                            alert("error taking picture");
                        }
                    }
                }
                if (evt.type == "intel.xdk.camera.picture.busy") {
                    console.log("busy");
                }
                if (evt.type == "intel.xdk.camera.picture.cancel") {
                    console.log("canceled");
                }
            },
            importPicture: function() {
                intel.xdk.camera.importPicture();
            },
            showPictureList: function() {
                var arrPictureList = intel.xdk.camera.getPictureList();
                if (arrPictureList.length > 1) {
                    intel.xdk.camera.deletePicture(arrPictureList[0]);
                    arrPictureList = intel.xdk.camera.getPictureList();
                }
                document.getElementById("largeImage").style.display = "none";
                for (var x = 0; x < arrPictureList.length; x++) {
                    // create image 
                    var newImage = document.createElement('img');
                    newImage.src = intel.xdk.camera.getPictureURL(arrPictureList[x]);
                    newImage.setAttribute("style", "width:100px;height:100px;");
                    newImage.id = document.getElementById("img_" + arrPictureList[x]);
                    document.body.appendChild(newImage);
                }
            },
            init: function(objOptions) {
                document.addEventListener("intel.xdk.camera.picture.add", objCamera.onCamera);
                document.addEventListener("intel.xdk.camera.picture.busy", objCamera.onCamera);
                document.addEventListener("intel.xdk.camera.picture.cancel", objCamera.onCamera);
                console.log("camera object wrapper initialized");
                if (objOptions.inject !== null) {
                    //inject a div to display an image and a camera button
                    var cameraDiv = document.createElement('div');
                    cameraDiv.id = "cameradiv";
                    document.body.appendChild(cameraDiv);
                    var imgLarge = document.createElement('img');
                    imgLarge.id = "largeImage";
                    imgLarge.setAttribute("style", "display:none");
                    document.getElementById("cameradiv").appendChild(imgLarge);
                    var btnCapture = document.createElement('button');
                    btnCapture.id = "btnPicture";
                    btnCapture.innerText = "Take Picture";
                    btnCapture.addEventListener("touchstart", objCamera.capturePhoto);
                    document.getElementById("cameradiv").appendChild(btnCapture);
                }
            }
        };
    }();
document.addEventListener("intel.xdk.device.ready", function() {
    objCamera.init({
        inject: true
    }); //start with an injected camera button
}, false);