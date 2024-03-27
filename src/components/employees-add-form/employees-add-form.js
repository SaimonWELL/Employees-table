import {Component} from "react";

import './employees-add-form.css';

class EmployeesAddForm extends Component{
    constructor(props) {
        super(props);
        this.state={
            name:'',
            salary:''
        }
    }
    handleSubmit = (e)=>{
        e.preventDefault();
    }
    onValueChange=(e)=>{
        if(e.target.name==='name'){
            if(e.target.value.length<3 && typeof e.target.value !=='string' ){
                alert('The name must be more than 3 characters long')
                document.querySelector('.btn .btn-outline-light').disabled = true
            }
        }

        this.setState({
            [e.target.name] : e.target.value
        })
    }

   render() {
        const {name, salary} = this.state;
        const { onAdd} = this.props

       return(
           <div className="app-add-form">
               <h3>Add a new employee</h3>
               <form
                   onSubmit={this.handleSubmit}
                   className="add-form d-flex">
                   <input type="text"
                          className="form-control new-post-label"
                          placeholder="What's his name?"
                          value={name}
                          name="name"
                          onChange={this.onValueChange}/>
                   <input type="number"
                          className="form-contol new-post-label"
                          placeholder="a salary of $?"
                          value={salary}
                          name="salary"
                          onChange={this.onValueChange}/>

                   <button type="submit"
                           onClick={()=>{
                               console.log(!/^[^\d\s]+$/.test(name))
                               if(name.length < 3 || !/^[^\d\s]+$/.test(name)){
                                   alert('The name must be more than 3 characters long and consist only of the letters ')
                               }else if (Number(salary)<=0){
                                   alert('the salary must be greater than zero')
                               }else {
                                   onAdd(name,salary)
                               }

                           }}
                           className="btn btn-outline-light">Add</button>
               </form>
           </div>
       )
   }
}

export default EmployeesAddForm;