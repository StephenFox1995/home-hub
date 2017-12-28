import React from 'react';
import PropTypes from 'prop-types';
import Device from './Device';

const Devices = ({ devices }) => (
  <div className="devices">
    {devices.map(device => Device(device))}
  </div>
);


Devices.propTypes = {
  devices: PropTypes.element.isRequired,
};

export default Devices;
