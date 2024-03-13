import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data,onDelete,onToggleIncrease,onToggleRise}) =>{

    const elements = data.map((item)=>{

        const {id,...itemProps} = item;

        return (
            <EmployeesListItem
                key = {id}
                {...itemProps}
                onToggleIncrease={()=>{onToggleIncrease(id)}}
                onToggleRise={()=>{onToggleRise(id)}}
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