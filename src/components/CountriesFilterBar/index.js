import React from 'react';
import { FaSortAlphaDown, FaSortAlphaUp } from 'react-icons/fa';
import './index.css';

import SelectRegion from './SelectRegion';
import SearchCountry from './SearchCountry';

class CountriesFilterBar extends React.Component {

    onChangeSortOrder = () => {
        if (this.props.selectedSort === 'A-Z') {
            this.props.onChangeSortOrder('Z-A');
        }
        else {
            this.props.onChangeSortOrder('A-Z');
        }
    }

    render() {
        const currentTheme = this.props.selectedTheme.themeClass;
        return (
            <div className={`${currentTheme} countries-filter-bar row mr-lg-3 m-0 p-0 mt-1 justify-content-between align-items-center`}>
                <SearchCountry
                selectedTheme = {currentTheme}
                searchText={this.props.searchText} 
                onChangeSearchText={this.props.onChangeSearchText} />
                <SelectRegion regionOptions={this.props.regionOptions}
                    selectedRegion={this.props.selectedRegion}
                    onChangeSelectedRegion={this.props.onChangeSelectedRegion}
                />
                <span onClick={this.onChangeSortOrder} className={`${currentTheme} px-2 py-2 mt-2 `}>{this.props.selectedSort==='A-Z'?<FaSortAlphaDown size={30}/>:<FaSortAlphaUp size={30}/>}</span>
            </div>
        );
    }
}

export default CountriesFilterBar;
