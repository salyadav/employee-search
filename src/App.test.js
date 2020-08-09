import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
// import { create } from 'react-test-renderer';
import App from './App';
import Main from './view/Main';

describe('testing main app rendering', () => {
    test('renders employee app heading', () => {
        const { getByTestId } = render(<App />);
        expect(getByTestId("app")).toHaveTextContent("Employee Details");
    });
    
    test('renders employee app successfully', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    test('render main layout correctly', ()=> {
        const mock_list=[{
            "id": "1",
            "employee_name": "Tiger Nixon",
            "employee_salary": "320800",
            "employee_age": "61",
            "profile_image": ""
        }];
        const { getByTestId } = render(<Main list={mock_list} />);
        const searchbar = getByTestId('searchbar');
        expect(getByTestId('main')).toContainElement(searchbar);
    });

    // test('testing employee detail function', ()=> {
    //     const mock_list=[{
    //         "id": "1",
    //         "employee_name": "Tiger Nixon",
    //         "employee_salary": "320800",
    //         "employee_age": "61",
    //         "profile_image": ""
    //     }];
    //     const mainComponent = render(<Main list={mock_list} />);
    //     mainComponent.getEmployeeDetails('Tiger');
    //     expect(main.state.employee.employee_name).toBe("Tiger Nixon");
    // });
});