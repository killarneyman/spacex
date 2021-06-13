import React, { Component } from 'react';
import ReactDatatable from '@ashvin27/react-datatable';

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
        };

        this.columns = [
            {
                key: "flight_number",
                text: "Flight Number",
                className: "name",
                align: "left",
                sortable: false,
            },
            {
                key: "mission_name",
                text: "Flight Number",
                className: "address",
                align: "left",
                sortable: false
            },
            {
                key: "launch_year",
                text: "Launch Year",
                className: "postcode",
                sortable: true
            },
            {
                key: "details",
                text: "Details",
                className: "rating",
                align: "left",
                sortable: false
            },
        ];

        this.config = {
            page_size: 20,
            show_pagination: true,
            pagination: 'advance',
            length_menu: [ 10, 20, 50 ],
            button: {
                excel: false,
                print: false,
                extra: false,
            },
            sort: { column: "launch_year", order: "desc" },
            show_filter: false,
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.year !== this.props.year) {
          this.load(this.props.year)
        }
      
      }

    load(year) {
        let url = "./api/spacex";

        if(year) {
            url += '/' + this.props.year;
        }

        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    componentDidMount() {
        this.load(this.props.year)
    }

    render() {

        const { error, isLoaded, data } = this.state;

        console.log(data);

        return (
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            

                            <ReactDatatable
                                config={this.config}
                                records={data}
                                columns={this.columns}
                                className="min-w-full divide-y divide-gray-200"
                                tHeadClassName="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            />
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
