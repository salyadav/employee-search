import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('testing search bar rendering and details', ()=> {
    const mock_list=[{
        "id": "1",
        "employee_name": "Tiger Nixon",
        "employee_salary": "320800",
        "employee_age": "61",
        "profile_image": ""
    }];

    test('render searchbar successfully', ()=> {
        const { getByTestId } = render(<SearchBar list = {mock_list} />)
        expect(getByTestId('searchbar')).toHaveClass('searchBar');
    });
});
