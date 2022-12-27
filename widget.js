window.onload = function () {
    const dateWidgetSchedule = new Date();
    const dayWidgetSchedule = dateWidgetSchedule.getDay();
    const hourWidgetSchedule = dateWidgetSchedule.getHours();
    const rndIntWidgetSchedule = Math.floor(Math.random() * 600) + 1
    const elementWidgetSchedule = document.getElementById("cs-hours");


    if (dayWidgetSchedule != 0 && hourWidgetSchedule >= 10 && hourWidgetSchedule < 18) { //In this exemple, open everyday between 10 AM and 6 PM excluding sunday
        elementWidgetSchedule.classList.add("cs-hours-open");
        let divhours = document.querySelector('.cs-hours-open'); //load css of open ticker
        divhours.innerHTML += ' open';
        divhours.setAttribute('rand', rndIntWidgetSchedule);  // prevent browser caching
    } else {
        elementWidgetSchedule.classList.add("cs-hours-closed");
        let divhours = document.querySelector('.cs-hours-closed'); //load css of closed ticker
        divhours.innerHTML += ' closed';
        divhours.setAttribute('rand', rndIntWidgetSchedule); // prevent browser caching
    }
};