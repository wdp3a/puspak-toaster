let metaThemeColor = document.querySelector('meta[name="theme-color"]');
const HTMLbody = document.body;


let startingBusNoRadioEle = document.querySelectorAll(".bus-no-label .input");
radioELeClicking(startingBusNoRadioEle);

let tktQuanRadioEle = document.querySelectorAll(".tkt-quan-label .input");
radioELeClicking(tktQuanRadioEle);

let colorRadioEle = document.querySelectorAll(".tkt-color-label .input");
radioELeClicking(colorRadioEle);

let amountRadioEle = document.querySelectorAll(".amount-lable .input");
radioELeClicking(amountRadioEle);



/*
 *  NVAIGATION STUFF
   opening and closing of the ticket buyer page 
*/
let buyTicketBtn = document.querySelector(".tkt-type-bus");
let tktBuyerELe = document.querySelector(".tkt-buyer");
let tktBuyerCloseBtnELe = document.querySelector(".tkt-buyer .cancel-btn");

// to open and close the ticket purchaser
buyTicketBtn.addEventListener("click", function (e) {
    tktBuyerELe.classList.add("active");
    HTMLbody.classList.add("overflow-none");
});

tktBuyerCloseBtnELe.addEventListener("click", function (e) {
    tktBuyerELe.classList.remove("active");
    HTMLbody.classList.remove("overflow-none");
});


// maximizing and minimizing the page
let htmlElement = document.documentElement;
let maximizeIcon = document.querySelector(".icon-maximize");
let minimizeIcon = document.querySelector(".icon-minimize");

maximizeIcon.addEventListener("click", function (e) {
    if (htmlElement.requestFullscreen) {
        htmlElement.requestFullscreen();
        htmlElement.classList.add("fullscreen")
    } else if (htmlElement.webkitRequestFullScreen) {
        htmlElement.webkitRequestFullScreen();
        htmlElement.classList.add("fullscreen")
    } else if (htmlElement.mozRequestFullScreen) {
        htmlElement.mozRequestFullScreen();
        htmlElement.classList.add("fullscreen")
    }

});

minimizeIcon.addEventListener("click", function (e) {
    if (document.exitFullscreen) {
        document.exitFullscreen();
        htmlElement.classList.remove("fullscreen")
    } else if (document.cancelFullScreen) {
        document.document.webkitCancelFullScreen();
        htmlElement.classList.remove("fullscreen")
    } else if (document.cancelFullScreen) {
        document.cancelFullScreen();
        htmlElement.classList.remove("fullscreen")
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
        htmlElement.classList.remove("fullscreen")
    };
    document.exitFullscreen();
});




// IntersectionObserver for bottom border
const intersecObsOptions = {
    rootMargin: "-1px 0px 0px 0px",
    threshold: 1
}
const intersecObs = new IntersectionObserver(function (items) {
    items.forEach(function (item) {
        item.target.classList.toggle("touching-top", !item.isIntersecting);
    });

}, intersecObsOptions);

let intersecObsItems = [document.querySelector("#bus-stops .header"), document.querySelector(".tkt-buyer .tkt-buyer-header"), document.querySelector(".all-purchased-tkt-container .all-purchased-tkt-header"),];
intersecObsItems.forEach(function (item) {
    intersecObs.observe(item);
});