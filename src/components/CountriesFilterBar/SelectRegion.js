import React from 'react';

class SelectRegion extends React.Component {

    shouldComponentUpdate(nextProps) {
        if (this.props.selectedRegion !== nextProps.selectedRegion ||
            JSON.stringify(this.props.regionOptions) !== JSON.stringify(nextProps.regionOptions)) {
            return true;
        }
        return false;
    }

    onChangeSelectedRegion = (event) => {
        this.props.onChangeSelectedRegion(event.target.value);
    };

    render() {
        const regionOptions = this.props.regionOptions.map((regionOption) => {
            return <option value={regionOption} key={regionOption}>{regionOption}</option>;
        });
        return (
            <div className="col-10 col-md-2 d-flex justify-content-md-end p-0 ml-3 ml-md-0 mr-3 mr-lg-5 mt-3">
                <select
                    value={this.props.selectedRegion}
                    onChange={this.onChangeSelectedRegion}
                    className=" border-0  shadow-sm rounded-sm">
                    {regionOptions}
                </select>
            </div>
        );
    }
}

export default SelectRegion;
