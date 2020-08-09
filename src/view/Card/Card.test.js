import React from 'react';
import { render } from '@testing-library/react';
import Card from './Card';
// import 'jest-extended';

describe('testing card layout rendering', () => {
    const mock_list = {
        "id": "1",
        "employee_name": "Tiger Nixon",
        "employee_salary": "320800",
        "employee_age": "61",
        "profile_image": ""
    };

    test('rendering card layout', ()=> {
        const { getByTestId, queryByText } = render(<Card data={mock_list}/>);
        expect(getByTestId('card')).toHaveClass('card');
    });

    test('card layout displays employee name', ()=> {
        const { getByTestId } = render(<Card data={mock_list}/>);
        const card = getByTestId('card');
        expect(card).toHaveTextContent(new RegExp(/Tiger Nixon/gm));
    });

    test('card layout displays employee age', ()=> {
        const { getByTestId } = render(<Card data={mock_list}/>);
        const card = getByTestId('card');
        expect(card).toHaveTextContent(new RegExp(/61/gm));
    });

    test('card layout displays employee salary', ()=> {
        const { getByTestId, queryByText } = render(<Card data={mock_list}/>);
        const card = getByTestId('card');
        expect(card).toHaveTextContent(new RegExp(/320800/gm));
    });
});