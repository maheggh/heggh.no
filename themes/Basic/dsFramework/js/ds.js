/* Domeneshop css framework v.1.4 */

// document.cookie = "BROWSERLANGUAGE="+navigator.language;

/*This page was generated using the Domainname.shop sitebuilder. The theme and design elements of this website is licensed under Creative Commons Attribution 4.0 (https://sidebygger.domeneshop.no/license.txt).*/

/* Henter inn alle diver med class ds-bar-container. Dette er hamburgerikonet */
var class_dsbarcontainer = document.getElementsByClassName("ds-hamburger-container");
var class_dsSendMailForm = document.getElementsByClassName("ds-submit-mail");
var class_ds_thumbnail = document.getElementsByClassName("ds-image-thumb");

function dsHamburgerContainer() {
    var dataCollapseId = this.getAttribute("data-collapse");
    var dataToggle = this.getAttribute("data-toggle");

    // dataCollapse viser til id på element som skal få klassen collapse / responsive
    dsCollapse(dataCollapseId);

    // toogler classen change
    this.classList.toggle(dataToggle);
}

function dsSendMailForm() {
    switch (document.documentElement.lang) {
        case "no":
            txt = "Meldingen er sendt";
            break;
        case "se":
            txt = "Meldingen er sendt";
            break;
        default:
            txt = "Your message has been sent";
            break;
    }
    alert(txt);
}

for(var i=0; i<class_dsbarcontainer.length; i++){
    class_dsbarcontainer[i].addEventListener('click', dsHamburgerContainer, false);

}
for(var i=0; i<class_dsSendMailForm.length; i++){
    class_dsSendMailForm[i].addEventListener('click', dsSendMailForm, false);

}

for(var i=0; i<class_ds_thumbnail.length; i++){
    class_ds_thumbnail[i].addEventListener('click', dsOpenImageModal, false);

}

function dsOpenImageModal() {
    "use strict";

    var modal = document.getElementById('ds-modal-image-gallery');

    var img = this.getAttribute("src");

    var modalImg = document.getElementById("modalimage");
    modalImg.src = img;
    modal.style.display = "block";


    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("ds-modal-close")[0];

    modal.onclick = function () {
        modal.style.display = "none";
    };
// When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

}




// Submit Contact form

var class_dsSendMailForm = document.getElementsByClassName("ds-submit-mail-alert");

function dsSendMailForm() {
    switch (document.documentElement.lang) {
        case "no":
            txt = "Meldingen er sendt";
            break;
        case "se":
            txt = "Eposten har skickats";
            break;
        case "dk":
            txt = "Beskeden er blevet sendt";
            break;
        default:
            txt = "Your message has been sent";
            break;
    }
    alert(txt);
}


for(var i=0; i<class_dsSendMailForm.length; i++){
    class_dsSendMailForm[i].addEventListener('click', dsSendMailForm, false);

}


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function dsCollapse(id) {
    var x = document.getElementById(id);

    var classList = x.className;

    if (x.classList.contains("collapse")){
        if (x.classList.contains("collapse") && (x.classList.contains("responsive") === false)) {
            x.className += " responsive";
        } else {
            x.classList.remove("responsive");
        }
    }
}


/* Benyttes til å toogle en classe på et dom objekt id. id=id på objekt, togled=class som skal toogles med */
function dsToogle(id,toggled) {

    var element = document.getElementById(id);

    if (element.classList) {
        element.classList.toggle(toggled);
    } else {
        // For IE9
        var classes = element.className.split(" ");
        var i = classes.indexOf(toggled);

        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push(toggled);
        element.className = classes.join(" ");
    }
}