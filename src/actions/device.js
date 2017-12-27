import SockJs from 'sockjs-client';

function newDeviceReceived(data) {
  const json = JSON.parse(data);
  return {
    type: 'RECEIVE_DEVICE',
    payload: json,
  };
}


export default function openDeviceSock(dispatch) {
  const sockjsUrl = 'http://localhost:8080/tplink';
  const sockjs = new SockJs(sockjsUrl);
  return () => {
    sockjs.onopen = () => console.log('Connected.');
    sockjs.onclose = () => console.log('Connection closed');
    sockjs.onmessage = event => dispatch(newDeviceReceived(event.data));
  };
}
