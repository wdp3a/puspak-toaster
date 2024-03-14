/*
    this function will return html that will be required to display the purchased ticket in small form
*/
function purchasedTicketEle(no,rt,ss,es,tq,tc,am,bt){
    let purchasedTktEle = `
				<div class="tkt">
					<div class="tkt-color"  style="background-color: ${tc}"></div>
					<div class="tkt-wrapper">
						<div class="bus-and-success">
							<div class="bus-container">
								<div class="bus-icon"  style="background-color: ${tc}"><i class="fa-solid fa-bus-simple"></i></div>
								<div class="bus-detail">
									<div class="route-no"><p>${rt}</p></div>
									<div class="bus-no"><p>${no}</p></div>
								</div>
							</div>
							<div class="success"><p>Success</p></div>
						</div>
						<div class="from-to"><p>${ss} &nbsp;<i class="fa-regular fa-arrow-right-long"></i>&nbsp; ${es}</p></div>
						<div class="seprator"></div>
						<div class="time-and-amount">
							<div class="time-detail"><p>${bt[0]} ${bt[2]}, ${bt[3]} | ${bt[5]}:${bt[6]}</p></div>
							<div class="amount-detail"><p>${am} x ${tq} = ₹${((am * tq)-((am * tq) * 10 / 100)).toFixed(1)}</p></div>
						</div>
					</div>
					<div class="tkt-invalid-container">
						<div class="tkt-invalid">
							<p class="tkt-invalid-text">Invalid</p>
						</div>
					</div>
				</div>
    `; 
    return purchasedTktEle;
}



/*
    this function will return html that will be required to display the desired ticket in large form
*/
function ticketDisplayELe(no,rt,ss,es,tq,tc,am,bt,tranId){
    let tktDisplayELe = `
        <div class="tkt-lrg">
            <div class="heading"><p>Transport Dept. of Delhi</p></div>
            <!-- rt-fr-tm-qn -> bus-no, price, route-no, fare, booking-time, quantity -->
            <div class="bus-and-price-detail">
                <div class="bus-no tkt-lrg-value">${no}</div>
                <div class="price tkt-lrg-value">₹${((am * tq)-((am * tq) * 10 / 100)).toFixed(1)}</div>
            </div>
            <div class="tkt-lrg-sep"></div>
            <div class="rt-fr-tm-qn route-and-fare-detail">
                <div class="route-wrapper">
                    <div class="text">Bus Route</div>
                    <div class="route-no tkt-lrg-value">${rt}</div>
                </div>
                <div class="fare-wrapper">
                    <div class="text">Fare</div>
                    <div class="fare tkt-lrg-value">₹${(am * tq).toFixed(1)}</div>
                </div>
            </div>
            <div class="rt-fr-tm-qn bkg-time-and-quan-detail">
                <div class="bkg-time-wrapper">
                    <div class="text">Booking Time</div>
                    <div class="bkg-time tkt-lrg-value">${bt[0]}-${bt[1]}-${bt[4]} ${bt[5]}:${bt[6]}:${bt[7]}</div>
                </div>
                <div class="quan-wrapper">
                    <div class="text">Bus Tickets</div>
                    <div class="quan tkt-lrg-value">${tq}</div>
                </div>
            </div>
            <div class="stop-detail starting-stop">
                <div class="text">Starting Stop</div>
                <div class="stop-name tkt-lrg-value">${ss}</div>
            </div>
            <div class="stop-detail ending-stop">
                <div class="text">Ending Stop</div>
                <div class="stop-name tkt-lrg-value">${es}</div>
            </div>
            <div class="qr-wrapper">
                <div class="qr-no"><p>${tranId}</p></div>
                <div class="show-qr-code" style="background-color: ${tc}">
                    <div class="qr-icon"><i class="fa-light fa-qrcode"></i> </div>
                    <div class="qr-text">Show QR Code</div>
                </div>
            </div>
            <div class="tkt-invalid-container">
                <div class="tkt-invalid">
                    <p class="tkt-invalid-text">Invalid</p>
                </div>
            </div>
        </div>
    `;
    return tktDisplayELe;
};


/**
 * @param {string} startingStop 
 * @param {string} endingStop 
 * @param {string} id 
 * @returns HTML Element
 */
function saveStopNameELe(startingStop, endingStop, id){
    let element = `
        <div id="${id}" class="stop-delete-container">
            <div class="starting-ending">
                <div class="starting-ending-stop"><i class="fa-solid fa-circle"></i><p>${startingStop}</p></div>
                <div class="starting-ending-stop"><i class="fa-solid fa-location-dot"></i><p>${endingStop}</p></div>
            </div>
            <div class="delete-stop">
                <div class="delete-icon"><i class="fa-regular fa-trash-can"></i></div>
            </div>
        </div>
    `;
    return element;
};