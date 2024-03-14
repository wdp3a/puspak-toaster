// SHOWING PURCHASED TICKET
let noTicketAvailable = document.querySelector(".purchased-bus-tkt .no-tkt-available");
let ticketContainer = document.querySelector(".purchased-tkt-container .tkt-container");

/* values will be added to ticketEle after the element get inserted into the page. it will be used to display ticket in 
large form */
let ticketEle;

if (localStorage.getItem("tickets") === null) {
    null;
} else {
    noTicketAvailable.style.display = "none";
    let storeTickets = JSON.parse(localStorage.getItem("tickets"));
    let ticketElement = purchasedTicketEle(storeTickets[0].busNo, storeTickets[0].route, storeTickets[0].startingStop, storeTickets[0].endingStop, storeTickets[0].ticketQuan, storeTickets[0].ticketColors, storeTickets[0].amount, storeTickets[0].bookingTime);

    ticketContainer.innerHTML = ticketElement
    ticketEle = document.querySelector(".purchased-bus-tkt .tkt");
    if (!checkDate(storeTickets[0].bookingTime[4], (storeTickets[0].bookingTime[1] - 1), storeTickets[0].bookingTime[0], storeTickets[0].bookingTime[5], storeTickets[0].bookingTime[6], storeTickets[0].bookingTime[7])) {
        document.querySelector(".tkt-invalid-container").style.display = "none";
    };

    /*
     * to see the purchased ticket in large form 
     */
    ticketEle.addEventListener("click", function () {
        noTicketAvailable.style.display = "none";
        tktdisplayManager(0);
    });

};

// CLOSING THE LARGE TKT
let ticketDisplayCloseBtn = document.querySelector(".tkt-lrg-container .tkt-lrg-container-header .btn-wrapper");
ticketDisplayCloseBtn.addEventListener("click", function () {
	tktLrgContainer.classList.remove("active");
	metaThemeColor.setAttribute("content", "#fff");
	HTMLbody.classList.remove("overflow-none");
});
// all tkt display btn inside the large tkt container
let allTicketBtn = document.querySelector(".tkt-lrg-container .tkt-lrg-container-header .all-tkts-btn");
allTicketBtn.addEventListener("click", function(){
	tktLrgContainer.classList.remove("active");
	metaThemeColor.setAttribute("content", "#fff");
	ShowingAllPurchasedTickets()
});



// SHOWING ALL PURCHASED TICKETS
let viewAllBtnEle = document.querySelector(".purchased-bus-tkt .view-all");
let viewAllCnclBtnEle = document.querySelector(".all-purchased-tkt-header .hide-btn .btn-wrapper");

viewAllBtnEle.addEventListener("click", function (e) {
    ShowingAllPurchasedTickets()
});

viewAllCnclBtnEle.addEventListener("click", function (e) {
    viewAllTktContEle.classList.remove("active");
    HTMLbody.classList.remove("overflow-none");
});