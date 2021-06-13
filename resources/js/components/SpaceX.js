import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';

export default class SpaceX extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: null,
            yearValue: 2020,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {    
        this.setState({yearValue: event.target.value});  
    }
    handleSubmit(event) {
      this.setState({year: this.state.yearValue});

      event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <form className="mt-8 sm:flex" onSubmit={this.handleSubmit}>
                    <label htmlFor="year" className="sr-only">Year</label>
                    <input id="year" name="year" type="year" value={this.state.yearValue} onChange={this.handleChange} className="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border-gray-300 rounded-md" placeholder="Enter year" />
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                        <button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Search
                        </button>
                    </div>
                </form>
                <Table year={this.state.year} />
            </div>
        );
    }
}

if (document.getElementById('spacex')) {
    ReactDOM.render(<SpaceX />, document.getElementById('spacex'));
}
