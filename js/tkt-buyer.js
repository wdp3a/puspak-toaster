let formELe = document.getElementById("tkt-buyer-form");
let busNoInputStarting = document.getElementsByName("starting-no");
let busNoInputEnding = document.getElementById("bus-no-input");
let routeInput = document.getElementById("route-input");
let startingStopInput = document.getElementById("starting-stop-input");
let EndingStopInput = document.getElementById("ending-stop-input");
let ticketQuanInput = document.getElementsByName("tkt-quan");
let busColorInput = document.getElementsByName("tkt-color");
let AmountInput = document.getElementsByName("amount");

let busColors = {
    R: "#d63a3a",
    G: "#219653",
    O: "#f28627",
    B: "#113ecb",
    E: "#1bbabf"
};

// Random transaction IDs
let transactionIds = ["02eb2be999", "0ac8f75ff4", "3207235349", "7f56b6d5db", "9cccbc8b3a", "2205ec2f49", "9e41b9e7d7", "77340b11fb", "7260440938", "c33b8365e2", "7f98195d85", "a4a4f09909", "60e4aeafbe", "3fb0071436", "434aa8f397"];

formELe.addEventListener("submit", function (e) {
    e.preventDefault();
    let ticket = {};
    let tickets = [];

    let randomNo = Math.floor(Math.random() * (transactionIds.length));
    let randomTranId = transactionIds[randomNo];
    let tranIdDate = date();
    let tranId = `T${tranIdDate[0]}${tranIdDate[1]}${tranIdDate[4]}${randomTranId}`;

    let busNoStartNo;
    busNoInputStarting.forEach(function (ele) {
        if (ele.checked) {
            busNoStartNo = ele.value
        }
    });
    let bsNoValue = `${busNoStartNo}${busNoInputEnding.value}`;

    let routeValue = routeInput.value;
    let startingStopValue = startingStopInput.value;
    let endingStopValue = EndingStopInput.value;

    let ticketQuantityValue;
    ticketQuanInput.forEach(function (ele) {
        if (ele.checked) {
            ticketQuantityValue = ele.value;
        }
    });

    let colorInputValue;
    busColorInput.forEach(function (ele) {
        if (ele.checked) {
            colorInputValue = busColors[ele.value];
        }
    });

    let amountInputValue;
    AmountInput.forEach(function (ele) {
        if (ele.checked) {
            amountInputValue = ele.value;
        }
    });

    ticket.busNo = bsNoValue;
    ticket.route = routeValue;
    ticket.startingStop = startingStopValue;
    ticket.endingStop = endingStopValue;
    ticket.ticketQuan = ticketQuantityValue;
    ticket.ticketColors = colorInputValue;
    ticket.amount = amountInputValue;
    ticket.bookingTime = date();
    ticket.tranId = tranId;
    tickets.unshift(ticket); // adding all ticket values to one array

    console.log(tickets)

    if (localStorage.getItem("tickets") === null) {
        let storageData = JSON.stringify(tickets);
        localStorage.setItem("tickets", storageData);
    } else {
        let storedStorageData = JSON.parse(localStorage.getItem("tickets"));
        for (let i = 0; i < storedStorageData.length; i++) {
            tickets.push(storedStorageData[i]);

            if (tickets.length > 25) {
                break
            }
        }
        let newstorageData = JSON.stringify(tickets);
        localStorage.setItem("tickets", newstorageData);
    };

    location.reload();

});