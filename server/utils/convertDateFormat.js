const convertDateFormat = (dateString) => {
    const dateObj = new Date(dateString);
    const day = String(dateObj.getUTCDate()).padStart(2, '0');
    const month = String(dateObj.getUTCMonth() + 1).padStart(2, '0');
    const year = dateObj.getUTCFullYear();

  return `${day}/${month}/${year}`;
}

export default convertDateFormat
