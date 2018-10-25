import React, { Component } from 'react';
import Map from '../Map/Map';
import Nav from '../Nav/Nav';
import Legend from '../Legend/Legend';
import Settings from '../Settings/Settings';
import SearchCountry from '../SearchCountry/SearchCountry';

import './Dashboard.css';

class Dashboard extends Component {
  state = {
    showingSettings: false,
    searchCountry: ''
  };

  toggleSettings = () => {
    this.setState({ showingSettings: !this.state.showingSettings });
  };

  handleSearchSubmit = e => {
    e.preventDefault();
    const searchQuery = e.target.search.value;
    this.setState({ searchCountry: searchQuery });
  };

  render() {
    return (
      <div className="Dashboard">
        <Nav toggleSettings={this.toggleSettings} />
        <Legend />
        <SearchCountry
          handleSearchSubmit={this.handleSearchSubmit}
        />
        <Map searchCountry={this.state.searchCountry} />
        {this.state.showingSettings && (
          <Settings onClick={this.toggleSettings} />
        )}
      </div>
    );
  }
}

export default Dashboard;
