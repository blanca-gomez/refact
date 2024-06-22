import React from "react";

const EmployersList = ({employees}) => {
    return(
        <div className="envoltura">
            {employees.map((employee,index)=> (
                <div key={index} className="card">
                    <p>Name:{employee.name} </p>
                    <p>Last name: {employee.lastName}</p>
                    <p>Hobbies: {employee.hobbies.join(',')}</p>
                    <p>age: {employee.age}</p>
                </div>

            ))}
        </div>
    )
}

export default EmployersList