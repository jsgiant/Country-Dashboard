import React from 'react';

import { IoIosSearch } from 'react-icons/io';

class SearchCountry extends React.Component {

    render() {
        return (
            <div className="country-search-field-container col-10 col-md-3 p-0 ml-3 ml-lg-5 d-flex justify-content-between align-items-center mt-3 pl-3 rounded-lg">
                <IoIosSearch size={21} />
                <input
                    value={this.props.searchText}
                    onChange={this.props.onChangeSearchText}
                    className={`${this.props.selectedTheme} country-search-field w-100 rounded-lg`}
                    placeholder="Search for a country"
                />
            </div>
        );
    }
}

export default SearchCountry;
