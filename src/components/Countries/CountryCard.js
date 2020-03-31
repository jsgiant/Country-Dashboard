import React from 'react';

import { withRouter } from 'react-router-dom';

import './countrycard.css';

class CountryCard extends React.Component {

    navigateToCountryDetailsPage = () => {
        const { history } = this.props;
        history.push(`/details/${this.props.countryDetails.alpha3Code}`);
    }

    render() {
        const { countryDetails } = this.props;
        return (
            <div onClick={this.navigateToCountryDetailsPage} className=" country-card mx-3 my-3 rounded shadow-lg  ">
                <div className="rounded-top">
                    <img className="country-card-flag rounded-top w-100" src={countryDetails.flag} alt={`${countryDetails.name} Flag`}/>    
                </div>
                <div className="p-3">
                <strong className="text-lg">{countryDetails.name}</strong>
                <p className="mb-2 mt-3">
                    <b>Population:</b> {countryDetails.population}</p>
                 <p className="mb-2">
                    <b>Region:</b> {countryDetails.region}</p>
                <p className="">
                    <b>Capital:</b> {countryDetails.capital}</p>
            </div>
         </div>
        );
    }
}
export default withRouter(CountryCard);
