var dateTimeEl = $('#date-time');
var pbodyEl = $('#pbody');
var pmodal = $('#modal');
var pformEl = $('#pform');
var pnameEl = $('#i-pname');
var ptypeEl = $('#i-ptype');
var prateEl = $('#i-prate');
var pdateEl = $('#i-pdate');

// funtion to display time
function displayTime() {
  var now = moment().format('MMM DD, YYYY hh:mm:ss a');
  dateTimeEl.text(now);
}

// form save project button
function saveProject(event) {
  // console.log("I am here");
  // stop default behavior
  event.preventDefault();

  var pname = pnameEl.val().trim();
  var ptype = ptypeEl.val().trim();
  var prate = prateEl.val().trim();
  var pdate = pdateEl.val().trim();
  
  // debugger;

  var prow = $('<tr>');
  var pnameTD = $('<td>').addClass('p-2').text(pname);
  var ptypeTD = $('<td>').addClass('p-2').text(ptype);
  var prateTD = $('<td>').addClass('p-2').text(prate);
  var pdateTD = $('<td>').addClass('p-2').text(pdate);

  // calculate remaining days
  var diff = moment(pdate, 'MM/DD/YYYY').diff(moment(), 'days');
  var diffTD = $('<td>').addClass('p-2').text(diff);

  // calculate potential earnings, assuming 8 hours a day
  var pearn = prate * (diff * 8);
  var pearnTD = $('<td>').addClass('p-2').text(pearn);

  // add delete button to row
  var delBtnTD = $('<td>').addClass('p-2 delete-btn text-center').text('X');

  // add all TDs to TR to form the row
  prow.append(pnameTD, ptypeTD, prateTD, pdateTD, diffTD, pearnTD, delBtnTD);
  console.log(prow);

  // now add this row to the display
  pbodyEl.append(prow);

  // and hide the modal and reset form
  pmodal.modal('hide');
  pformEl[0].reset();
}

// delete project
function deleteProject(event){
  console.log(event.target);
  var row = $(event.target);

  row.parent('tr').remove();
}

// event handlers
pformEl.on('submit', saveProject);
pbodyEl.on('click', '.delete-btn', deleteProject);
pdateEl.datepicker({ startDate: "today" });

// call displayTime function in every second
setInterval(displayTime, 1000);