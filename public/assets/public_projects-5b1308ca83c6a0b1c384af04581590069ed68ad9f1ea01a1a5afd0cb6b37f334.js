"use strict";$(document).ready(function(){$("body").on("click",".button_team",function(t){var e=$(t.target).data("team-id"),n=document.getElementById("modal_".concat(e)),o=(document.getElementById("button_".concat(e)),document.getElementsByClassName("close")[0]);console.log("Success!"),n.style.display="block",o.onclick=function(){n.style.display="none"},window.onclick=function(t){t.target==n&&(n.style.display="none")}})});