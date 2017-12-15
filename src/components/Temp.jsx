import React from 'react';
import PropTypes from 'prop-types';

const Temp = ({ temperature }) => (
  <div>
    <div>The temperature is: {temperature} celcius.</div>
  </div>
);

Temp.propTypes = {
  temperature: PropTypes.element.isRequired,
};

export default Temp;
