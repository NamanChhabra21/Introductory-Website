const more_button = document.getElementById("more-img");
const mobile_tabs = document.getElementById("mobile-view-tabs")
more_button.addEventListener("click", function() {
    if( mobile_tabs.style.display == "flex"){
        mobile_tabs.style.display = "None";
    }
    else{
        mobile_tabs.style.display = "flex";
    }
});