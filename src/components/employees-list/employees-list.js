import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = () =>{
    return(
        <ul className="app-list list-group">
            <EmployeesListItem name="John C." salary={800} />
            <EmployeesListItem name="Alex M." salary={3000} />
            <EmployeesListItem name="Carl W." salary={5000} />
        </ul>
    )
}

export default EmployeesList;