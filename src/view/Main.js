import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import Card from './Card/Card';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: null
        }

        this.getEmployeeDetails = this.getEmployeeDetails.bind(this);
    }

    getEmployeeDetails(name, id) {
        let employee = null;
        if (name.length) {
            employee = this.props.list.find(data => {
                //Ideally search by the ID clicked on (what if there are more than one person with same name)...
                //if not present, search by the name string received
                if (id) {
                    return data.id === id;
                }
                //Just to be on the safer side
                return data.employee_name.toLowerCase() === name.toLowerCase();
            });
        }
        this.setState({
            employee: employee ? employee : null
        });
    }

    render() {
        return (
            <div data-testid='main'>
                <SearchBar 
                    list = {this.props.list} 
                    sendDetail={this.getEmployeeDetails}
                    data-testid='searchbar' />
                {
                    this.state.employee ? (
                        <Card data={this.state.employee} data-testid='card'/>
                    ) : null
                }
            </div>
        )
    }
}