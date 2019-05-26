/**
 * Modelo que especifica cómo es la estructura de datos que se espera en el componente.
 * Sin importar la estructura de datos que se reciba desde backend.
 * Mediante este modelo garantizamos que la aplicación no se va a romper debido a una estructura de datos no espeada.
 */

const formatTimestamp = timestamp => {
  const isoString = new Date(timestamp).toISOString();
  const array = isoString.split('T');
  console.log(array);
  const date = array[0];
  const time = array[1].substring(0, array[1].length - 8);

  return `${date} ${time}`;
};

const InboxEmail = incomingEmail => {
  const id = incomingEmail.id || '';
  const subject = incomingEmail.subject || '';
  const body = incomingEmail.body || '';
  const viewedAt = incomingEmail.viewedAt || '';
  const isImportant = incomingEmail.isImportant || false;
  let maybeTimestamp = incomingEmail.timestamp || '';

  try {
    maybeTimestamp = formatTimestamp(maybeTimestamp);
  } catch (error) {
    console.error(error.message);
    maybeTimestamp = '';
  }

  return {
    id,
    subject,
    isImportant,
    body,
    viewedAt,
    timestamp: maybeTimestamp
  };
};

module.exports = InboxEmail;
