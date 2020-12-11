function getMonthName(monthNum) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let mo = monthNum - 1;

  if (monthNum <= 12) {
    return months[mo]
  } else {
    throw 'InvalidMonth Num'
  }
}

try {
  monthName = getMonthName(13)
} 
catch (m) {
  console.log(m);
}

// getMonthName(13);