let timeEl = document.querySelector('#time');
let dateEl = document.querySelector('#date');
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

showDate();
var inter = setInterval(showDate, 30000);

function showDate() {
    let d = new Date();
    timeEl.innerHTML = formatAMPM(d);
    dateEl.innerHTML = days[d.getDay()] + ", " + months[d.getMonth()] + ' ' + d.getDate();
}

function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes;// + '<span id="ampm">' + ampm + '</span>';
    return strTime;
}