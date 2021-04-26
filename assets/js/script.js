var dateTimeEl = $('#date-time');

// funtion to display time
function displayTime() {
  var now = moment().format('MMM DD, YYYY hh:mm:ss a');
  dateTimeEl.text(now);
}

// call displayTime function in every second
setInterval(displayTime, 1000);