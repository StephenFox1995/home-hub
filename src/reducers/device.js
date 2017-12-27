export default function device(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_DEVICE':
      return {
        ...state,
        devices: [...state.devices, action.payload],
      };
    default:
      return state;
  }
}
