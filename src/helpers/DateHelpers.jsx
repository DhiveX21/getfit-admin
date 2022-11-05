export function dateFormater(dateString) {
  const date = new Date(dateString).getDate();
  const month = getMonthName(new Date(dateString).getMonth());
  const year = new Date(dateString).getFullYear();
  return date + "-" + month + "-" + year;
}

export function getMonthName(integerMonth) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return monthNames[integerMonth];
}
