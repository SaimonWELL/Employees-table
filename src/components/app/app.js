import {Component} from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-fillter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './app.css';

class App extends Component{

    constructor(props) {
        super(props);
        this.state={
             data : [
                {name:'John C.', salary:800,increase:true,rise:true,id:1},
                {name:'Alex M.', salary:3000,increase:false,rise:false,id:2},
                {name:'Carl W.', salary:5000,increase:false,rise:false,id:3}
            ],
            term: '',
            filter:''
        }
    }

    deleteItem = (id) =>{
        this.setState(({data})=>{
            return{
                data: data.filter(item => item.id !== id)
            }

        })
    }
    addItem = (name,salary)=>{
        function generateUniqueId(data) {
            let id = Math.random().toString(36).substr(2, 9);
            while (data.find(item=>item.id===id)){
                id=Math.random().toString(36).substr(2, 9);
            }
            return id
        }

        const newItem = {
            name,
            salary,
            increase:false,
            rise:false,
            id:generateUniqueId(this.state.data)
        }

        this.setState(({data})=>{
            return {
                data:[...data,newItem]
            }
        })

    }

    onToggleProp = (id,prop) =>{

        this.setState(({data})=>({
            data: data.map(item=>{
                if(item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if(term.length === 0){
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    onUpdateSearch = (term) =>{
        this.setState({term});
    }

    filterPost = (items, filter) =>{
        switch (filter){
            case 'rise':
                return items.filter(item => item.rise);
            case 'moreThan1000':
                return items.filter(item=> item.salary > 1000);
            default :
                return items
        }
    }

    onFilterSelect = (filter) =>{
        this.setState({filter})
    }



    render() {
        const {data,term,filter} = this.state
        const employees = data.length;
        const increased = data.filter(item=>item.increase===true).length;
        const visibleData = this.filterPost(this.searchEmp(data,term), filter);

        return(
            <div className='app'>
                <AppInfo numEmployees={employees} theyGetBonus={increased}/>

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
                </div>

                <EmployeesList
                    onDelete={this.deleteItem}
                    onToggleProp ={this.onToggleProp}
                    data ={visibleData} />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        )
    }
}

export default App;