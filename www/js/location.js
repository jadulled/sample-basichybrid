/*jslint browser:true, devel:true, white:true, vars:true, eqeq:true, unparam:true */
/*jshint unused:false */
/*global intel */

//Intel Location Service object
var map;

//inject a div to display the map
function initMap() {
    'use strict';
    var mapContainerDiv = document.createElement('div');
    mapContainerDiv.id = "mapContainerDiv";
    mapContainerDiv.setAttribute("style", "width:100%;background-color:blue;");
    document.body.appendChild(mapContainerDiv);
    var mapDiv = document.createElement('div');
    mapDiv.id = "map_div";
    mapDiv.setAttribute("style", "width:60%; height:100%;float:left;");
    document.getElementById("mapContainerDiv").appendChild(mapDiv);
    console.log("about to determine location");
    var location = new intel.maps.Location();
    location.login({
        client_id: 'ae92762cccd95621b23bdd709697c75c',
        secret_id: '5a88dd07e04ba586'
    }, on_login);

    function drawMap() {
        console.log("drawing map");
        var prefs = {
            mapTypeId: intel.maps.MapTypeId.ROADMAP,
            zoom: 13,
            center: new intel.maps.LatLng(45.52345, -122.676)
        };
        map = new intel.maps.Map(document.getElementById("map_div"), prefs);
        window.onresize = function() {
            intel.maps.event.trigger(map, "resize");
        };
    }

    function on_login(response, status) {

        console.log("on login");
        if (status != "OK") {alert("Login failure: " + status);}
        else {
            drawMap();
        }
    }
}
window.addEventListener("load", initMap, false);