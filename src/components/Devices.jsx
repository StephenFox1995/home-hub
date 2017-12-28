import React from 'react';
import PropTypes from 'prop-types';
import Device from './Device';


const styles = [
  { backgroundColor: '#194d33', color: '#FFFFFF' },
  { backgroundColor: '#FF8A65', color: '#FFFFFF' },
];

function* style() {
  let i = 0;
  yield styles[i += 1];
}

const styleGenerator = style();

const Devices = ({ devices }) => (
  <div className="devices">
    {devices.map(device => Device(device, styleGenerator.next()))}
  </div>
);

Devices.propTypes = {
  devices: PropTypes.element.isRequired,
};

export default Devices;
