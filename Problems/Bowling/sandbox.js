// today + 14 days

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

var date = new Date();


function addDays(days){
    let date = new Date();
    date.setDate(date.getDate() + days);
    return date;
}

function subtractDays(dueDate, today){
// To calculate the time difference of two dates
var Difference_In_Time = today.getTime() - dueDate.getTime();
  
// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return Math.floor(Difference_In_Days);
}
const duDate = addDays(10);

const overdue = subtractDays(duDate, new Date());

let d = new Date();
d.setDate(d.getDate() + 12);