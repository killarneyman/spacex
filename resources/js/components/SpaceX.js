import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Table from './Table';

export default class SpaceX extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: null,
        };
    }
    render() {
        return (
            <div className="container">
                <form className="mt-8 sm:flex">
                    <label htmlFor="emailAddress" className="sr-only">Email address</label>
                    <input id="emailAddress" name="email" type="email" autoComplete="email" required className="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border-gray-300 rounded-md" placeholder="Enter year" />
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                        <button type="submit" className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
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
