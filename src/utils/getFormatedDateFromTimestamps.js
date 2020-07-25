export default function(timestamp) {
  const date = new Date(timestamp * 1000);
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
}
