import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-fillter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './app.css';

function App(){

    const data = [
        {name:'John C.', salary:800},
        {name:'Alex M.', salary:3000},
        {name:'Carl W.', salary:5000}
    ]

    return(
        <div className='app'>
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>
                <AppFilter/>
            </div>

            <EmployeesList data ={data} />
            <EmployeesAddForm/>
        </div>
    )
}

export default App;