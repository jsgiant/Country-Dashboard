import React from 'react';
import './index.css';
import { FiMoon } from 'react-icons/fi';


class Header extends React.Component {

    shouldComponentUpdate(nextProps) {
        if (this.props.selectedTheme !== nextProps.selectedTheme) {
            return true;
        }
        return false;
    }

    onChangeTheme = () => {
        this.props.onChangeTheme(this.props.selectedTheme);
    };
    render() {
        const currentTheme = this.props.selectedTheme.themeClass;
        return (
            <div className={`header ${currentTheme} d-flex justify-content-between align-items-center`}>
                <div className="ml-3 ml-lg-5">
                    <a href="/" className={`${currentTheme} dashboard-title`}>Where in the World?</a>
                </div>
                <div className="d-flex align-items-center mr-1 mr-lg-3">
                    <button className={` ${currentTheme} border-0`} onClick={this.onChangeTheme}><FiMoon className="mb-1" size={22} /> {currentTheme === 'lightMode' ? 'Light Mode' : 'Dark Mode'}</button>
                </div>
            </div>
        );
    }
}

export default Header;
