import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';

const Home = () => {
    const [employees, setEmployees] = useState(null);

    const fetchEmployees = () => {
        api.getAllEmployees().then(res => {
            const result = res.data.data;
            setEmployees(result.data);
        })
    }
    useEffect(() => {
        fetchEmployees();
    }, [])

    const renderEmployees = () => {
        if(!employees) {
            return (
                <tr>
                    <td colSpan={4}>
                        Loading employees
                    </td>
                </tr>
            )
        }
        if(employees.length === 0) {
            return (
                <tr>
                    <td colSpan={4}>
                        No Data
                    </td>
                </tr>
            )
        }

        return employees.map(post => (
            <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.name}</td>
                <td>{post.age}</td>
                <td>{post.address}</td>
                <td>
                    <Link
                        to={`/edit/${post.id}`}
                        className="btn btn-success"
                    >
                        Edit
                    </Link>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => {
                            api.deleteEmployee(post.id)
                            .then(fetchEmployees)
                            .catch(err => {
                                alert('Delete failed');
                            })
                        }}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        ))
    }

    return (
        <AppContainer
            title="LIST"
        >
            <Link to="/add" className="btn btn-primary">Add employee</Link>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Address</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {renderEmployees()}
                </tbody>
            </table>
        </AppContainer>
    );
};

export default Home;