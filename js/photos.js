
// Script for dynamically setting background photo attributes for images on photography portfolio page

var portraits = document.getElementsByClassName("photo-portrait");
var naturePhotos = document.getElementsByClassName("photo-nature");
var sourceFile;

for (let i = 0; i < portraits.length; i++) {
    sourceFile = portraits.item(i).firstElementChild.innerHTML;
    console.log("Setting background image to " + sourceFile);
    portraits.item(i).style.backgroundImage = "url(" + sourceFile + ")";
    portraits.item(i).parentElement.classList.add("col-lg-4", "col-sm-6", "p-0");
}

for (let i = 0; i < naturePhotos.length; i++) {
    sourceFile = naturePhotos.item(i).firstElementChild.innerHTML;
    console.log("Setting background image to " + sourceFile);
    naturePhotos.item(i).style.backgroundImage = "url(" + sourceFile + ")";
    naturePhotos.item(i).parentElement.classList.add("col-lg-6", "p-0");
}
