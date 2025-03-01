export const convertDateToEuFormat = (date: string): string => {
  const [month, day, year] = date.split('-');

  return `${day}-${month}-${year}`;
}