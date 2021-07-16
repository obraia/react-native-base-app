type TypeDate =
  | 'yyyy-mm-dd'
  | 'dd-mm-yyyy'
  | 'mm-dd-yyyy'
  | 'yyyy/mm/dd'
  | 'dd/mm/yyyy'
  | 'mm/dd/yyyy';

type TypeHour = 'hhhmm' | 'hh:mm';

export default function formatDate(
  date: Date,
  typeDate: TypeDate,
  typeHour?: TypeHour,
): string {
  let month = `${date.getMonth() + 1}`;
  let day = `${date.getUTCDate()}`;
  const year = date.getUTCFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  const dateformat = {
    'yyyy-mm-dd': [year, month, day].join('-'),
    'dd-mm-yyyy': [day, month, year].join('-'),
    'mm-dd-yyyy': [month, day, year].join('-'),
    'yyyy/mm/dd': [year, month, day].join('/'),
    'dd/mm/yyyy': [day, month, year].join('/'),
    'mm/dd/yyyy': [month, day, year].join('/'),
  };

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  const hourFormat = {
    'hhhmm': ` | ${[hours, minutes].join('h')}`,
    'hh:mm': ` | ${[hours, minutes].join(':')}`,
  };

  return dateformat[typeDate] + (typeHour ? hourFormat[typeHour] : '');
};
