exports.isSameDay = (date1, date2 = new Date()) => (
  date1.getDate() === date2.getDate()
    && date1.getMonth() === date2.getMonth()
    && date1.getFullYear() === date2.getFullYear()
);
