import React from 'react';
import { connect } from 'react-redux';
import Temp from '../components/Temp';
import getTemp from '../actions/temp';

class TempContainer extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line
    const timer = setInterval(() => this.props.getTemp(), 1000);
    // eslint-disable-next-line
    this.setState({ timer });
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }


  render() {
    return Temp(this.props);
  }
}

function mapStateToProps(state) {
  return {
    temperature: state.temperature,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTemp: getTemp(dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TempContainer);

