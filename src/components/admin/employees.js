import React from 'react'
import Routers from '../../Routers';
import { useState, useEffect } from 'react';

const EmployeesManagement = () => {
    const [employees, setEmployees] = useState([]);
    useEffect(() => {
        const getEmployees = async () => {
            const response = await fetch('http://localhost:3007/employees');
            const data = await response.json();
            setEmployees(data);
        }
        getEmployees();
    }, []);

    // const addEmployee = async (item) => {

    //     const index = employees.length === 0 ? 1 : 1 + Number(employees[employees.length - 1].id);

    //     const data = {
    //         id: index,
    //         ...item
    //     }
    //     await fetch('http://localhost:3007/employees', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //     });
    //     setEmployees([
    //         ...employees,
    //         data
    //     ]);

    // }

    // const removeEmployee = async (id) => {
    //     let confirmRemove = window.confirm('Bạn có chắc chắn muốn xóa không?');
    //     if (confirmRemove) {
    //         await fetch(`http://localhost:3007/employees/${id}`, {
    //             method: 'DELETE',
    //         });
    //         const newemployees = employees.filter(employee => employee.id !== id);
    //         setEmployees(newemployees);
    //     }
    // }


    // const editEmployee = async (employee) => {
    //     await fetch(`http://localhost:3007/employees/${employee.id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(employee)
    //     });
    //     const newemployees = employees.map(item => (item.id == employee.id ? employee : item));
    //     console.log(newemployees)
    //     setEmployees(newemployees)
    // }
    return (
        <div>

            <Routers employees={employees}
                // onAdd={addEmployee}
                // onRemove={removeEmployee}
                // onEdit={editEmployee}
            />

        </div>
    )
}

export default EmployeesManagement
