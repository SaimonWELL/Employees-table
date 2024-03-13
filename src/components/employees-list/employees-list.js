import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data,onDelete}) =>{

    const elements = data.map((item)=>{

        const {id,...itemProps} = item;

        return (
            <EmployeesListItem
                key = {id}
                {...itemProps}
                onDelete={()=> onDelete(id)}/> // name={item.name} salary={item.salary === {...item}
        )
    })

    return(
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;