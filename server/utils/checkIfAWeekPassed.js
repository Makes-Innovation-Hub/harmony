const checkIfAWeekPassed =(date) =>{
  const currentDate = new Date();
  const inputDate = new Date(date)
  const timeDifference = currentDate.getTime() - inputDate.getTime();

  const weeksPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));

  return weeksPassed >= 1;
}
export default checkIfAWeekPassed;
