import React from 'react';
import { connect } from 'react-redux';
import Devices from '../components/Devices';
import openDeviceSock from '../actions/device';

class TPLinkContainer extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line
    this.props.openDeviceSock();
  }

  render() {
    return Devices(this.props);
  }
}


function mapStateToProps(state) {
  return {
    devices: state.devices,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    openDeviceSock: openDeviceSock(dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TPLinkContainer);
