import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCurrentWeatherByGPS, fetchLocalExtendedForecast } from '../actions/index';

import HeaderContainer from '../containers/HeaderContainer';

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({fetchCurrentWeatherByGPS, fetchLocalExtendedForecast}, dispatch);
};

class App extends Component {

    findLocalCoordinates() {
        if (!navigator.geolocation) {
            console.error('geolocation is not supported by your browser');
            return;
        }
        navigator.geolocation.getCurrentPosition((position) => {
            this.props.fetchCurrentWeatherByGPS(position);
            this.props.fetchLocalExtendedForecast(position);
        });
    }

    componentDidMount() {
        this.findLocalCoordinates();
    }

    render() {
        return (
            <div>
                <HeaderContainer />
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
