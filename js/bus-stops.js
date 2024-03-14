// NAVIGATION
let busStopContainerEle = document.getElementById('bus-stops');
let busStopContainerHideBtn = document.querySelector('.bus-stops .header .hide-btn .btn-wrapper');
let busIconEle = document.querySelector('.ftr .navigation .icon-bus')

busIconEle.addEventListener('click', function(){
    busStopContainerEle.classList.add('active');
    HTMLbody.classList.add('overflow-none');
    savedStopDisplayManager()
});
busStopContainerHideBtn.addEventListener('click', function(){
    busStopContainerEle.classList.remove('active');
    HTMLbody.classList.remove('overflow-none');
});



// FORM
let stopSaverStartingInputEle = document.getElementById('stop-saver-starting-stop-input');
let stopSaverEndingInputEle = document.getElementById('stop-saver-ending-stop-input');
let stopSaverFromELe = document.getElementById('stop-saver-form');

stopSaverFromELe.addEventListener('submit', function (e) {
    e.preventDefault();

    let storageArray = [];
    let storageObject = {};

    let slicedTimeStr = `${new Date().getTime()}`;
    slicedTimeStr = slicedTimeStr.slice(slicedTimeStr.length - 12);
    let uniqueId = `${slicedTimeStr.slice(0,4)}-19-${slicedTimeStr.slice(4,6)}-12-${slicedTimeStr.slice(6,8)}-16-${slicedTimeStr.slice(8)}`;

    let startingStopValue = stopSaverStartingInputEle.value;
    let endingStopValue = stopSaverEndingInputEle.value;

    storageObject.starting = startingStopValue;
    storageObject.ending = endingStopValue;
    storageObject.id = uniqueId;
    storageArray.unshift(storageObject);

    if (localStorage.getItem('stops-name') === null){
        let storageData = JSON.stringify(storageArray);
        localStorage.setItem('stops-name', storageData)
    } else{
        let localStorageData = JSON.parse(localStorage.getItem('stops-name'));
        localStorageData.forEach(function(ele){ storageArray.push(ele) });
        let storageData = JSON.stringify(storageArray);
        localStorage.setItem('stops-name', storageData)
    }
    savedStopDisplayManager()
    
});


let stopDelWrapperEle = document.querySelector('.stop-delete-wrapper');
let noStopSavedEle = document.querySelector('.no-saved-stop-text');

// SAVED STOP DISPLAY MANAGER
function savedStopDisplayManager(){
    if (localStorage.getItem('stops-name') === null){
        noStopSavedEle.classList.remove('hide');
    } else{
        let storedData = JSON.parse(localStorage.getItem('stops-name'));
        let elementStr = '';
        storedData.forEach(function(ele){
            let element = saveStopNameELe(ele.starting, ele.ending, ele.id);
            elementStr = elementStr+'\n'+element;
        });
        stopDelWrapperEle.innerHTML = elementStr;
        noStopSavedEle.classList.add('hide');



        // Opening Ticket Buyer while clicking on saved stop
        let SavedStopNameELes = document.querySelectorAll('.stop-delete-container .starting-ending');
        SavedStopNameELes.forEach(function(ele){
            ele.addEventListener('click', function(){
                tktBuyerELe.classList.add("active");
                HTMLbody.classList.add("overflow-none");

                startingStopInput.value = `${ele.firstElementChild.firstElementChild.nextElementSibling.innerText}`;
                EndingStopInput.value = `${ele.firstElementChild.nextElementSibling.firstElementChild.nextElementSibling.innerText}`;
                
                busStopContainerEle.classList.remove('active');
            });
        });



        // DELETING SAVED STOPS
        let SavedStopEles = document.querySelectorAll('.stop-delete-container');
        for (let i = 0; i < SavedStopEles.length; i++){
            SavedStopEles[i].addEventListener('click', function(e){
                if(e.target === SavedStopEles[i].firstElementChild.nextElementSibling || e.target ===  SavedStopEles[i].firstElementChild.nextElementSibling.firstElementChild || e.target ===  SavedStopEles[i].firstElementChild.nextElementSibling.firstElementChild.firstElementChild){
                    SavedStopEles[i].remove();
                    storedData.shift(i);
                    if (storedData.length === 0 ){
                        localStorage.removeItem('stops-name');
                        noStopSavedEle.classList.remove('hide');
                    } else{
                        localStorage.setItem('stops-name', JSON.stringify(storedData));
                    }
                }
            });
    
        }
        
    }
}







// REFRESH BTN
let savedStopsRrefreshBtn = document.querySelector('.saved-stops .heading .refresh-btn');
savedStopsRrefreshBtn.addEventListener('click', function(){savedStopDisplayManager()});