Date.prototype.getDayName = function () {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayNumber = this.getDay();
    return dayNames[dayNumber];
}

let dateObj = new Date();
console.log(dateObj);
console.log('date: ', dateObj.getDate());
console.log('dayNumber: ', dateObj.getDay());
console.log('day Name: ', dateObj.getDayName());