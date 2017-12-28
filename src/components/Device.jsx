import React from 'react';
import Switch from 'material-ui/Switch';
import '../style/Device.css';

const isSwitchChecked = state => state === 'on';

const Device = (device, style) => (
  <div className="device" style={style}>
    <div className="device-summary">
      <div className="device-alias">{device.alias}</div>
      <Switch checked={isSwitchChecked(device.lightState)} />
    </div>
    <div className="device-details">
      <div className="device-detail">{device.host}</div>
      <div className="device-detail">{device.description}</div>
      <div className="device-detail">10KW/h</div>
    </div>
  </div>
);

export default Device;
