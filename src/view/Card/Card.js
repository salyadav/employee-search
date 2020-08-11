import React from "react";
import './Card.scss';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: this.props.data
        }
    }

    render() {
        const employee = this.state.employee;

        return (
            <div className='card' data-testid='card'>
                <legend>{employee.employee_name}</legend>
                <img className='employeeIcon' alt=''/>
                <div>
                    Age: {employee.employee_age}
                </div>
                <label className='salary'>$ {employee.employee_salary}</label>
            </div>
        );
    }
}