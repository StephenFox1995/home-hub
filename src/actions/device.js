import SockJs from 'sockjs-client';
import fetch from 'node-fetch';

function newDeviceReceived(data) {
  const json = JSON.parse(data);
  return {
    type: 'RECEIVE_DEVICE',
    payload: json,
  };
}

export function deviceStateChanged(host, state) {
  if (state) {
    fetch(`http://localhost:8080/api/${host}/on`);
  } else {
    fetch(`http://localhost:8080/api/${host}/off`);
  }
}


export function openDeviceSock(dispatch) {
  const sockjsUrl = 'http://localhost:8080/tplink';
  const sockjs = new SockJs(sockjsUrl);
  return () => {
    sockjs.onopen = () => console.log('Connected.');
    sockjs.onclose = () => console.log('Connection closed');
    sockjs.onmessage = event => dispatch(newDeviceReceived(event.data));
  };
}

export default {
  deviceStateChanged, openDeviceSock,
};
