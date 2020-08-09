import React from "react";
import './SearchBar.css';

export default class SearchList extends React.Component {
    constructor(props) {
        super(props);
        this.onListSelect = this.onListSelect.bind(this);
    }

    onListSelect(event) {
        this.props.onListSelect(event.target.innerText, event.target.id);
    }

    render() {
        return (
            <ul className='searchList' onClick={this.onListSelect} data-testid="searchlist">
                {   
                    this.props.list.map((data, index) => {
                        if (index === this.props.cursor) {
                            return <li className='highlight' key={data.id} id={data.id}>{data.employee_name}</li>
                        }
                        return <li key={data.id} id={data.id}>{data.employee_name}</li>
                    })
                }
            </ul>
        );
    }
}