import moment from 'moment';

export default function compareAndOrder(spends, type) {
  switch (type) {
    case 'value-desc':
      return orderByValueDesc(spends);
    case 'value-asc':
      return orderByValueAsc(spends);
    case 'data-asc':
      return orderByDataAsc(spends);
    case 'data-des':
      return orderByDataDesc(spends);
    default:
      return 'teste';
  }
}

function orderByValueAsc(spends) {
  return spends.sort((spend1, spend2) => spend1.value - spend2.value);
}

function orderByValueDesc(spends) {
  return spends.sort((spend1, spend2) => spend2.value - spend1.value);
}
function orderByDataAsc(spends) {
  const spendsByData = spends.sort((spend1, spend2) => {
    const date1 = {
      day: Number(moment(spend1.date).format('DD')),
      month: Number(moment(spend1.date).format('MM')),
      year: Number(moment(spend1.date).format('YYYY')),
    };
    const date2 = {
      day: Number(moment(spend2.date).format('DD')),
      month: Number(moment(spend2.date).format('MM')),
      year: Number(moment(spend2.date).format('YYYY')),
    };

    let comparison = 0;

    if (date1.year > date2.year) comparison = 1;
    if (date1.year < date2.year) comparison = -1;

    if (date1.month > date2.month) comparison = 1;
    if (date1.month < date2.month) comparison = -1;

    if (date1.day > date2.day) comparison = 1;
    if (date1.day < date2.day) comparison = -1;

    return comparison;
  });
  return spendsByData;
}
function orderByDataDesc(spends) {
  const spendsByData = spends.sort((spend1, spend2) => {
    const date1 = {
      day: Number(moment(spend1.date).format('DD')),
      month: Number(moment(spend1.date).format('MM')),
      year: Number(moment(spend1.date).format('YYYY')),
    };
    const date2 = {
      day: Number(moment(spend2.date).format('DD')),
      month: Number(moment(spend2.date).format('MM')),
      year: Number(moment(spend2.date).format('YYYY')),
    };

    let comparison = 0;

    if (date1.year > date2.year) comparison = -1;
    if (date1.year < date2.year) comparison = 1;

    if (date1.month > date2.month) comparison = -1;
    if (date1.month < date2.month) comparison = 1;

    if (date1.day > date2.day) comparison = -1;
    if (date1.day < date2.day) comparison = 1;

    return comparison;
  });
  return spendsByData;
}
