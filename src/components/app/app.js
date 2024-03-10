import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-fillter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './app.css';

function App(){

    const data = [
        {name:'John C.', salary:800 ,increase:true},
        {name:'Alex M.', salary:3000,increase:false},
        {name:'Carl W.', salary:5000,increase:false}
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