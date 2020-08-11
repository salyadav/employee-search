import React from "react";
import './SearchBar.scss';
import SearchList from './SearchList';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cursor: 0,
            searchName: "",
            list: []
        };
        this.handleChange = this.handleChange.bind(this);
        // this.onSearch = this.onSearch.bind(this);
        this.onKeyboardEvent = this.onKeyboardEvent.bind(this);
        this.onListSelect = this.onListSelect.bind(this);
        this.onSearchFieldFocus = this.onSearchFieldFocus.bind(this);
    }

    handleChange(event) {
        //To clear off the card currently in display
        this.props.sendDetail('');
        const searchName = event.target.value.toLowerCase();
        const list = this.props.list.filter((data) => {
            return data.employee_name.toLowerCase().includes(searchName);
        });
        this.setState({
            cursor: 0,
            searchName: searchName,
            list: list
        });
    }

    // /**On search button click */
    // onSearch(event) {
    //     event.preventDefault();
    // }

    /**on arrow up/down or enter 
     * TODO: scroll up/down automatically when keypress highlight goes beyond view scope
    */
    onKeyboardEvent(event) {
        // event.preventDefault();
        const state = this.state;
        if (event.key === "ArrowDown") {
            if (state.cursor < state.list.length-1)
                this.setState((prevState) => ({
                    cursor: prevState.cursor + 1
                }));
        } else if(event.key === "ArrowUp") {
            if(state.cursor > 0 )
                this.setState((prevState) => ({
                    cursor: prevState.cursor - 1
                }));
        } else if (event.key === "Enter") {
            const employee = state.list[state.cursor];
            this.onListSelect(employee.employee_name.toLowerCase(), employee.id);
        }
    }

    onListSelect(name, id) {
        //reset list and search view
        this.setState({
            cursor: 0,
            searchName: '',
            list: []
        });
        //get the card to display
        this.props.sendDetail(name, id);
    }
    
    /**
     * Scope: can show entire list onFocus. For now, only adding highlight styling
     */
    onSearchFieldFocus(event) {
        event.target.parentNode.classList.add('highlight-box');
    }

    render() {
        const searchName = this.state.searchName;
        const filteredList = this.state.list;

        return (
            <div className='searchBar' onKeyUp={this.onKeyboardEvent} data-testid='searchbar'>
                <div className='searchField' onFocus={this.onSearchFieldFocus}>
                    <i className="fas fa-search"></i>
                    <input
                        type="select"
                        value={searchName}
                        onChange={this.handleChange}
                        placeholder="Search by name..."
                    />
                </div>
                {/* <input 
                    className='searchButton'
                    type="submit" 
                    value="Search" 
                    onClick={this.onSearch} 
                /> */}
                {
                filteredList.length ? (
                    <SearchList 
                        data-testid='searchlist'
                        list={filteredList} 
                        onListSelect={this.onListSelect} 
                        cursor={this.state.cursor}
                    />
                ) : null
                }
            </div>
        );
    }
}
