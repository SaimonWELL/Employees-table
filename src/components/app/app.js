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
                {name:'John C.', salary:800 ,increase:true,rise:true,id:1},
                {name:'Alex M.', salary:3000,increase:false,rise:false,id:2},
                {name:'Carl W.', salary:5000,increase:false,rise:false,id:3}
            ]
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

    onToggleIncrease = (id) =>{

        this.setState(({data})=>({
            data: data.map(item=>{
                if(item.id === id){
                    return {... item, increase: !item.increase}
                }
                return item;
            })
        }))
    }

    onToggleRise = (id)=>{
       console.log(`Rise this ${id}`)
    }

    render() {
        return(
            <div className='app'>
                <AppInfo/>

                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>

                <EmployeesList
                    onDelete={this.deleteItem}
                    onToggleIncrease ={this.onToggleIncrease}
                    onToggleRise ={this.onToggleRise}
                    data ={this.state.data} />
                <EmployeesAddForm onAdd={this.addItem} />
            </div>
        )
    }
}

export default App;