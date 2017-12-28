import React from 'react';
import { Row, Input } from 'react-materialize';
import '../style/Device.css';

const Device = device => (
  <div className="device">
    <div className="device-summary">
      <div className="device-alias">{device.alias}</div>
      <Row>
        <Input name="on" type="switch" value="0" />
      </Row>
    </div>
    <div className="device-details">
      <div className="device-detail">{device.host}</div>
      <div className="device-detail">{device.description}</div>
      <div className="device-detail">10KW/h</div>
    </div>
  </div>
);

export default Device;
