const checkIfAWeekPassed = (dateString) => {
  const currentDate = new Date();
  const inputDate = new Date(dateString);

  const timeDifference = currentDate.getTime() - inputDate.getTime();

  const daysPassed = Math.floor(timeDifference / (1000 * 3600 * 24));

  if (daysPassed >= 7) {
    return true;
  } else {
    return false;
  }
}

export default checkIfAWeekPassed
