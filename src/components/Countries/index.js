import React from 'react';

import './index.css';

import CountryCard from './CountryCard';
import Loader from './../Loader';

class Countries extends React.Component {
    render() {
        const { countries } = this.props;
        return (
            <div className="d-flex flex-wrap mt-3 ml-3">
                {countries.length > 0 ? countries.map((country => 
                        <CountryCard key={country.alpha3Code} countryDetails={country} />
            )) : <Loader/>}
            </div>
        );
    }
}

export default Countries;
