function checkIfInSameWeek(date1, date2) {
  // Get the week number for the first date
  const week1 = date1.toLocaleDateString(undefined, { week: "numeric" });
  // Get the week number for the second date
  const week2 = date2.toLocaleDateString(undefined, { week: "numeric" });
  // Compare the week numbers
  return week1 === week2;
}

export default checkIfInSameWeek;
