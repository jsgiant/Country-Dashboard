import React from 'react';
import Loader from '../Loader';

class CountryCardDetails extends React.Component {

    getLanguages = () => {
        const languages = this.props.countryDetails.languages.map((language) => {
            return language.name;
        });
        return languages;
    };

    getCurrencies = () => {
        const currencies = this.props.countryDetails.currencies.map((currency) => {
            return currency.name;
        });
        return currencies;
    };

    render() {
        if (Object.keys(this.props.countryDetails).length !== 0) {
            const languages = this.getLanguages();
            const currencies = this.getCurrencies();
            return (<div className="country-details-container row m-0">
                        <div className="flag-container col-11 col-md-5 p-0 mt-3 mr-3 mr-md-0 ml-3 ml-lg-5">
                            <img className="country-flag" src={this.props.countryDetails.flag} alt={`${this.props.countryDetails.name} Flag`}/>
                        </div>
                        <div className="content-container col-11 col-md-6 mr-3 mr-md-0 p-3 pt-4">
                            <h1>{this.props.countryDetails.name}</h1>
                            <div className="d-flex">
                                <div className="country-details-left-section mr-5">
                                    <p className="mb-2 mt-3">
                                        <span className="font-weight-bold">Native Name:</span> {this.props.countryDetails.nativeName}
                                    </p>
                                    <p className="mb-2 mt-3">
                                        <span className="font-weight-bold">Population:</span> {this.props.countryDetails.population}
                                    </p>
                                    <p className="mb-2">
                                        <span className="font-weight-bold">Region:</span> {this.props.countryDetails.region}
                                    </p>
                                    <p className="mb-2">
                                        <span className="font-weight-bold">Sub Region:</span> {this.props.countryDetails.subregion}
                                    </p>
                                    <p className="mb-2">
                                        <span className="font-weight-bold">Capital:</span> {this.props.countryDetails.capital}
                                    </p>
                                </div>
                                <div className="country-details-right-section">
                                    <p className="mb-2 mt-3">
                                        <span className="font-weight-bold">Top Level Domain:</span> {this.props.countryDetails.topLevelDomain}
                                    </p>
                                    <p className="mb-2">
                                        <span className="font-weight-bold">Currencies:</span> {currencies.join(", ")}
                                    </p>
                                    <p className="mb-2">
                                        <span className="font-weight-bold">Languages:</span> {languages.join(", ")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>);
        }
        else {
            return <Loader/>;
        }
    }
}

export default CountryCardDetails;
