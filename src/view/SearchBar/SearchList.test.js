import React from 'react';
import { render } from '@testing-library/react';
import SearchList from './SearchList';

describe('testing SearchList component', ()=> {
    const mock_list=[{
        "id": "1",
        "employee_name": "Tiger Nixon",
        "employee_salary": "320800",
        "employee_age": "61",
        "profile_image": ""
    }];

    test('rendering searchlist component', ()=>{
        const {queryByTestId} = render(<SearchList list={mock_list} cursor={0} />);
        expect(queryByTestId('searchlist')).toBeInTheDocument();
    });

    // test('searchlist highlighted cursor element successfully', ()=>{
    //     const {getByTestId} = render(<SearchList list={mock_list} cursor={0} />);
    //     expect(getByTestId('searchlist')).toHaveClass('highlight');
    // });
});