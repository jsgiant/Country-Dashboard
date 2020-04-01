import React from 'react';
import Header from './../Header';
import Countries from './../Countries';
import Loader from './../Loader';
import './index.css';
import CountriesFilterBar from './../CountriesFilterBar';
/*global fetch */

class CountryDashboardApp extends React.Component {
    constructor(props) {
        super(props);
        this.themeOptions = {
            light: {
                id: "0",
                backgroundColor: "#ffffff",
            },
            dark: {
                id: "1",
                backgroundColor: "#2b3945",
            },
        };
        this.state = {
            countries: [],
            searchText: '',
            selectedRegion: 'All',
            error: '',
            sortOrder: 'A-Z',
        };
    }

    getCountries = () => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then((data) => {
                this.setState({ countries: data });
            })
            .catch((e) => {
                this.setState({ error: 'Error while fetching countries data' })
            });
    }

    componentDidMount = () => {
        if (window.navigator.onLine) {
            this.getCountries();
        }
        else {
            this.setState({ error: 'Check your internet Connection' });
        }
    }

    onChangeSortOrder = (sortOrder) => {
        this.setState({
            sortOrder,
        });
    }

    onChangeSearchText = (event) => {
        this.setState({
            searchText: event.target.value.trim(),
        });
    };

    onChangeSelectedRegion = (selectedRegion) => {
        this.setState({
            selectedRegion
        });
    };

    getRegionOptions = () => {
        const allRegions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
        return allRegions;
    }

    filterCountriesBySearchText = () => {
        const { searchText } = this.state;
        const selectedCountries = this.state.sortOrder === 'A-Z' ? this.filterCountriesBySelectedRegion() : this.filterCountriesBySelectedRegion().reverse();
        const countriesToRender = selectedCountries.filter((country) => {
            return country.name.toLowerCase().includes(searchText.toLowerCase());
        });
        return countriesToRender;
    }

    filterCountriesBySelectedRegion = () => {
        const currentRegion = this.state.selectedRegion;
        let updatedCountries;
        if (currentRegion === 'All') {
            updatedCountries = [...this.state.countries];
        }
        else {
            updatedCountries = this.state.countries.filter(country => {
                return country.region === currentRegion;
            });
        }
        return updatedCountries;
    }

    displayCountries = () => {
        const countriesToRender = this.filterCountriesBySearchText();
        return countriesToRender;
    }

    render() {
        const currentTheme = this.props.selectedTheme.themeClass;
        if (this.state.error === '') {
            const regionOptions = this.getRegionOptions();
            const countriesToRender = this.displayCountries();
            return (<div className={`dashboard-app ${currentTheme}`}>
                <Header 
                    selectedTheme={this.props.selectedTheme} 
                    onChangeTheme={this.props.onChangeTheme} 
                />
                <CountriesFilterBar
                    selectedTheme={this.props.selectedTheme}
                    searchText={this.state.searchText}
                    onChangeSearchText={this.onChangeSearchText}
                    regionOptions={regionOptions}
                    selectedRegion={this.state.selectedRegion}
                    onChangeSelectedRegion={this.onChangeSelectedRegion}
                    selectedSort ={this.state.sortOrder}
                    onChangeSortOrder = {this.onChangeSortOrder}
                />
                {countriesToRender.length > 0 ?
                <Countries
                    countries={countriesToRender}
                />
                :this.state.countries.length ===0? <Loader />
                :<div className="d-flex justify-content-center h-100 align-items-center mt-5"><h3>No match found!</h3></div>}
            </div>);
        }
        else {
            return (<div className={`${currentTheme} dashboard-app d-flex flex-grow-1 w-100 justify-content-center align-items-center`}>
                           <h3>{this.state.error}</h3>
                        </div>);
        }
    }
}
export default CountryDashboardApp;
