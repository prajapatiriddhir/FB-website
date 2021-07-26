var settingData = document.querySelector(".setting-menu");
var darkBtn = document.getElementById("dark-btn");


function settingsMenuToggle(){
    settingData.classList.toggle("setting-menu-height");
}

darkBtn.onclick  = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}