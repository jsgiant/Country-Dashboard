import React from 'react';

import './index.css';

import { withRouter } from 'react-router-dom';
/*global fetch*/
import Header from '../Header';
import CountryCardDetails from './CountryCardDetails';

class CountryDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: [],
            countryDetails: {},
        };
    }

    componentDidMount() {
        this.getCountryListDetails();
    }

    async getCountryListDetails() {
        const data = await fetch("https://restcountries.eu/rest/v2/all")
            .then((response) => response.json())
            .then((JSONData) => JSONData)
            .catch(console.log);
        this.setState({
            countries: data,
            countryDetails: this.getCurrentCountryDetails(data),
        });
    }

    getCurrentCountryDetails = (countries) => {
        const countryAlpha3Code = this.props.match.params.alpha3code;
        return countries.find((country) => {
            return country.alpha3Code === countryAlpha3Code;
        });
    }



    navigateBack = () => {
        const { history } = this.props;
        history.goBack();
    };

    render() {
        const currentTheme = this.props.selectedTheme.themeClass;
        return (
            <div className={`dashboard-app ${currentTheme}`}>
                <Header 
                    selectedTheme={this.props.selectedTheme} 
                    onChangeTheme={this.props.onChangeTheme} 
                />
                <div className="py-3">
                <button
                    onClick={this.navigateBack}
                    className={`${currentTheme} back-button btn py-2 px-4 ml-3 ml-lg-5 rounded-sm`}>&larr; Back</button>
                </div>
                <CountryCardDetails countryDetails ={this.state.countryDetails}/>
            </div>
        );

    }
}

export default withRouter(CountryDetails);
