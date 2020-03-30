function formatDate(numb, format)
{

  const time = new Date((numb - 1) * 24 * 3600000 + 1);
  time.setYear(time.getFullYear() - 70);
  const year = time.getFullYear() + '';
  const month = time.getMonth() + 1 + '';
  const date = time.getDate() - 1 + '';

  if (format && format.length === 1)
  {
    return year + format + month + format + date;
  }

  return year + (month < 10 ? '0' + month : month) + (date < 10 ? '0' + date : date);
}

console.log(formatDate(43861, '-'));;