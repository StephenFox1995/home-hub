export default function temp(state = [], action) {
  switch (action.type) {
    case 'RECEIVE_TEMP':
      return {
        ...state,
        temperature: action.payload.temperature,
      };
    default:
      return state;
  }
}
