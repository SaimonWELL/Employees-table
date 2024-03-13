import './app-info.css';

const AppInfo = ({numEmployees,theyGetBonus}) =>{


    return(
        <div className='app-info'>
            <h1>Employee accounting at NoName Company</h1>
            <h2>Total number of employees: {numEmployees}</h2>
            <h2>They'll get a bonus: {theyGetBonus}</h2>
        </div>
    )
}

export default AppInfo;