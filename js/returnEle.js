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
								<div class="bus-icon"  style="background-color: ${tc}"><svg class="icon-svg" viewBox="0 0 576 512" fill="currentColor"><path d="M520 128H512V80C512 35.25 412.75 0 288 0S64 35.25 64 80V128H56C42.75 128 32 138.75 32 152V232C32 245.25 42.75 256 56 256H64V416C64 433.625 78.375 448 96 448V480C96 497.625 110.375 512 128 512H160C177.625 512 192 497.625 192 480V448H384V480C384 497.625 398.375 512 416 512H448C465.625 512 480 497.625 480 480V448H486.375C502.375 448 512 435.25 512 422.375V256H520C533.25 256 544 245.25 544 232V152C544 138.75 533.25 128 520 128ZM208 64H368C376.836 64 384 71.162 384 80C384 88.836 376.836 96 368 96H208C199.164 96 192 88.836 192 80C192 71.162 199.164 64 208 64ZM144 400C126.375 400 112 385.625 112 368S126.375 336 144 336S176 350.375 176 368S161.625 400 144 400ZM272 288H160C142.375 288 128 273.625 128 256V160C128 142.375 142.375 128 160 128H272V288ZM304 288V128H416C433.625 128 448 142.375 448 160V256C448 273.625 433.625 288 416 288H304ZM432 400C414.375 400 400 385.625 400 368S414.375 336 432 336S464 350.375 464 368S449.625 400 432 400Z"/></svg></div>
								<div class="bus-detail">
									<div class="route-no"><p>${rt}</p></div>
									<div class="bus-no"><p>VALIDATED</p></div>
								</div>
							</div>
							<div class="success"><p>Success</p></div>
						</div>
						<div class="from-to"><p>${ss} &nbsp;<svg class="icon-svg" viewBox="0 0 448 512" fill="currentColor"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h306.7L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg>&nbsp; ${es}</p></div>
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
    let validateText = document.getElementById("validated-section-text");
    validateText.innerHTML = `Validated At: ${bt[0]}-${bt[1]}-${bt[4]} | ${bt[5]}:${bt[6]}`
    let tktDisplayELe = `
        <div class="tkt-lrg">
            <div class="heading"><p>Transport Dept. of Delhi</p></div>
            <!-- rt-fr-tm-qn -> bus-no, price, route-no, fare, booking-time, quantity -->
            <div class="bus-and-price-detail">
                <div class="bus-no tkt-lrg-value">VALIDATED</div>
                <div class="price tkt-lrg-value">₹${(am * tq).toFixed(1)}</div>
            </div>
            <div class="tkt-lrg-sep"></div>
            <div class="rt-fr-tm-qn route-and-fare-detail">
                <div class="route-wrapper">
                    <div class="text">Bus Route</div>
                    <div class="route-no tkt-lrg-value">${rt}</div>
                </div>
                <div class="fare-wrapper">
                    <div class="text">Fare</div>
                    <div class="fare tkt-lrg-value">₹${((am * tq)-((am * tq) * 10 / 100)).toFixed(1)}</div>
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
                    <div class="qr-icon"><svg class="icon-svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm8 2v2h2v-2h-2zm-2-2h2v2h-2v-2zm4 4h2v2h-2v-2zm-2-2h2v2h-2v-2zm4 0h2v2h-2v-2zm0-4h2v2h-2v-2zm2 2h2v2h-2v-2z"/></svg> </div>
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
                <div class="starting-ending-stop"><svg class="icon-svg" viewBox="0 0 512 512" fill="currentColor"><circle cx="256" cy="256" r="256"/></svg><p>${startingStop}</p></div>
                <div class="starting-ending-stop"><svg class="icon-svg" viewBox="0 0 384 512" fill="currentColor"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg><p>${endingStop}</p></div>
            </div>
            <div class="delete-stop">
                <div class="delete-icon"><svg class="icon-svg" viewBox="0 0 448 512" fill="currentColor"><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0h120.4c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64s14.3-32 32-32h96l7.2-14.3zM32 128h384v320c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"/></svg></div>
            </div>
        </div>
    `;
    return element;
};