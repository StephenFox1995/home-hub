import fetch from 'node-fetch';

function newTempReceived(json) {
  return {
    type: 'RECEIVE_TEMP',
    payload: json,
  };
}

export default function getTemp(dispatch) {
  return () =>
    fetch('http://localhost:8080/api/alexa/temperature')
      .then(res => res.json())
      .then(json => dispatch(newTempReceived(json)))
      .catch(err => console.log(err));
}
