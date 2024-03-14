/**
 * <==== Date Checker function or date validator ====>
 * @param {int} year
 * @param {int} mon
 * @param {int} day
 * @param {int} hour
 * @param {int} min
 * @param {int} sec
 */
function checkDate(year, mon, day, hour, min, sec) {
	let oneDayAgo = new Date().getTime() - (12 * 60 * 60 * 1000);
	let dateGiven = new Date(year, mon, day, hour, min, sec, 0).getTime();
	return oneDayAgo > dateGiven;
}


/**
 * function will take radio btn element as input and add a checked class on radio label.
 * checked class will be removed from label if the radio btn is unchecked or user click on other radio btn
 * @param {radioBtn} element
 *
 */
function radioELeClicking(element) {
	element.forEach(function (ele) {
		ele.addEventListener("change", (e) => {
			for (let i = 0; i < element.length; i++) {
				if (!element[i].checked) {
					element[i].parentNode.classList.remove("checked");
				}
			}
			if (e.target.checked) {
				e.target.parentNode.classList.add("checked");
			};
		});
	});
}


/**
 *  <==== Date retuner ====>
 * @returns [date, month (but 1 in jan), month in str, year, fullyear, hour, min, sec]
 * required date in array
 */
function date() {
	let dateTime = new Date();
	let date = `${dateTime.getDate()}`.padStart(2, '0');
	let month = dateTime.getMonth();
	let year = `${dateTime.getFullYear()}`.slice(2);
	let yearFull = dateTime.getFullYear();
	let hour = `${dateTime.getHours()}`.padStart(2, '0');
	let min = `${dateTime.getMinutes()}`.padStart(2, '0');
	let sec = `${dateTime.getSeconds()}`.padStart(2, '0');

	let monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
	let monthStr = monthName[month]

	return [`${date}`, `${month+1}`.padStart(2, '0'), `${monthStr}`, `${year}`, `${yearFull}`, `${hour}`, `${min}`, `${sec}`]
}



/**
 * function will manage the display of all puchased tickets
 * and the below variables are the elements required by the function
*/
let viewAllTktContEle = document.querySelector(".all-purchased-tkt-container");
let viewAllNoTktEle = document.getElementById("no-tkt-purchased");
let viewAllTktWrapperELe = document.querySelector(".all-tkts");

function ShowingAllPurchasedTickets(){
	viewAllTktContEle.classList.add("active");
    HTMLbody.classList.add("overflow-none");

    if (localStorage.getItem("tickets") === null) {
        viewAllNoTktEle.classList.remove("none");
    } else {
        viewAllNoTktEle.classList.add("none");
        let storeTickets = JSON.parse(localStorage.getItem("tickets"));

        let EleString = '';

        for (let i = 0; i < storeTickets.length; i++) {
            let ticketElement = purchasedTicketEle(storeTickets[i].busNo, storeTickets[i].route, storeTickets[i].startingStop, storeTickets[i].endingStop, storeTickets[i].ticketQuan, storeTickets[i].ticketColors, storeTickets[i].amount, storeTickets[i].bookingTime);
            EleString = EleString + ticketElement + "\n";
        }
        viewAllTktWrapperELe.innerHTML = EleString;

        let allTktELes = document.querySelectorAll(".all-tkts .tkt")

        // DISPLAYING ALL PUCHASED TICKET WHEN CLICKED
        for (let i = 0; i < allTktELes.length; i++) {
            allTktELes[i].addEventListener("click", function (e) {
                tktdisplayManager(i)
            });
			// checking if the tkt is invalid or not
            if (!checkDate(storeTickets[i].bookingTime[4], (storeTickets[i].bookingTime[1] - 1), storeTickets[i].bookingTime[0], storeTickets[i].bookingTime[5], storeTickets[i].bookingTime[6], storeTickets[i].bookingTime[7])) {
                let invalidContainerELe = allTktELes[i].firstElementChild.nextElementSibling.nextElementSibling;
                invalidContainerELe.style.display = "none";
            };
        };
    };
}



/**
 * <==== tkt display manager (large) ====>
 * function will take index of the ticket store in local storage and
    manage display of ticket in large form
 * @param {integer} tktIndex
*/
let tktLrgContainer = document.querySelector(".tkt-lrg-container");
let allTktWrapper = document.querySelector(".tkt-lrg-wrapper")
function tktdisplayManager(tktIndex) {
	let storeTickets = JSON.parse(localStorage.getItem("tickets"));

	HTMLbody.classList.add("overflow-none");
	// change the theme on phone browser
	metaThemeColor.setAttribute("content", storeTickets[tktIndex].ticketColors);
	
	tktLrgContainer.style.background = storeTickets[tktIndex].ticketColors;
	tktLrgContainer.classList.add("active");
	
	let tktInnerELement = ticketDisplayELe(storeTickets[tktIndex].busNo, storeTickets[tktIndex].route, storeTickets[tktIndex].startingStop, storeTickets[tktIndex].endingStop, storeTickets[tktIndex].ticketQuan, storeTickets[tktIndex].ticketColors, storeTickets[tktIndex].amount, storeTickets[tktIndex].bookingTime, storeTickets[tktIndex].tranId);
	allTktWrapper.innerHTML = tktInnerELement;

	// checking if the tkt is invalid or not
	let tktEle = document.querySelector(".tkt-lrg");
	if (!checkDate(storeTickets[tktIndex].bookingTime[4], (storeTickets[tktIndex].bookingTime[1] - 1), storeTickets[tktIndex].bookingTime[0], storeTickets[tktIndex].bookingTime[5], storeTickets[tktIndex].bookingTime[6], storeTickets[tktIndex].bookingTime[7])) {
		let invalidContainerELe = tktEle.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;;
		invalidContainerELe.style.display = "none";
	};
};