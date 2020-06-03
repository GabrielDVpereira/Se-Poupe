import moment from 'moment';

export default function getFormatedValue(value, type) {
  switch (type) {
    case 'money':
      return Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(value);
    case 'date':
      return moment(value).format('DD/MM/YYYY');
    default:
      return undefined;
  }
}
