import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
}
from 'react-router-dom';
import './App.css';
import CountryDashboardApp from './components/Dashboard';
import CountryDetails from './components/CountryDetails';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.themeOptions = {
      light: {
        id: "0",
        themeClass: 'lightMode',
        backgroundColor: "#ffffff",
        color: '#0000'
      },
      dark: {
        id: "1",
        themeClass: 'darkMode',
        backgroundColor: "#2b3945",
        color: "#ffffff",
      },
    };
    this.state = {
      selectedTheme: this.themeOptions.light,
    };
  }
  onChangeTheme = (selectedThemeOption) => {
    this.setState({
      selectedTheme: selectedThemeOption.id === '0' ? this.themeOptions.dark : this.themeOptions.light,
    });
  };

  render() {
    return (
      <Router>
          <Switch>
            <Route exact path='/details/:alpha3code'>
                <CountryDetails selectedTheme={this.state.selectedTheme} onChangeTheme={this.onChangeTheme} />
            </Route>
            <Route path='/'>
                <CountryDashboardApp selectedTheme={this.state.selectedTheme} onChangeTheme={this.onChangeTheme} />
            </Route>
          </Switch>
      </Router>
    );
  }
}

export default App;
