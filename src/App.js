import React from 'react';
import './App.css';
import Main from './view/Main';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      employeeList: []
    };
  }

  componentDidMount() {
    const successFn = (result) => {
      result.data.sort(
        (a,b) => 
        (a.employee_name.toLowerCase() > b.employee_name.toLowerCase()) ? 1 : -1
      );
      this.setState({
        isLoaded: true,
        employeeList: result.data
      });
    };

    const failureFn = (error) => {
      this.setState({
        isLoaded: true,
        error: error
      });
    };

    // fetch("http://dummy.restapiexample.com/api/v1/employees")
    //   .then((response) => response.json())
    //   .then(successFn, failureFn);
    this.fetchData('http://dummy.restapiexample.com/api/v1/employees', successFn, failureFn);
  }

  fetchData(url, successFn, failureFn) {
    fetch(url)
      .then((response) => response.json())
      .then(successFn, failureFn);
  }

  render() {
    return (
      <div id='app' className="App" data-testid='app'>
        <h1>Employee Details</h1>
        <Main list = {this.state.employeeList} data-testid='main'/>
      </div>
      );
  }
}
