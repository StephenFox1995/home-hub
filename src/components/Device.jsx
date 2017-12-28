import React from 'react';
import PropTypes from 'prop-types';
import Switch from 'material-ui/Switch';
import '../style/Device.css';
import { deviceStateChanged } from '../actions/device';

class Device extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      device: props.device,
      lightState: props.device.lightState,
      style: props.style,
    };
  }

  handleChange(host) {
    return (event, checked) => {
      this.setState({ lightState: checked });
      deviceStateChanged(host, checked);
    };
  }

  render() {
    return (
      <div className="device" style={this.state.style}>
        <div className="device-summary">
          <div className="device-alias">{this.state.device.alias}</div>
          <Switch
            checked={this.state.lightState}
            onChange={this.handleChange(this.state.device.host)}
            aria-label="lightState"
          />
        </div>
        <div className="device-details">
          <div className="device-detail">{this.state.device.host}</div>
          <div className="device-detail">{this.state.device.model}</div>
          <div className="device-detail">{this.state.device.description}</div>
          <div className="device-detail">10KW/h</div>
        </div>
      </div>);
  }
}

export default Device;
