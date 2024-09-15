
function opentab(tabname) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    for (var tablink of tablinks) {
        tablink.classList.remove("activ-link");
    }

    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("activ-link");
    document.getElementById(tabname).classList.add("active-tab");
}
