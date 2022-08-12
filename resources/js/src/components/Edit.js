import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import AppContainer from './AppContainer';
import api from '../api';

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');

    const onEditSubmit = async () => {
        setLoading(true);
        try {
            await api.updateEmployee({
                name, age, address,
            }, id);
            navigate('/');
        } catch {
            alert('Edit employee failed');
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        api.getOneEmployee(id).then(res => {
            const result = res.data;
            const employee = result.data;
            setName(employee.name);
            setAge(employee.age);
            setAddress(employee.address);
        })
    }, [])

    return (
        <AppContainer
        title="Edit"
        >
            <form>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input
                        type="number"
                        className="form-control"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-success"
                    onClick={onEditSubmit}
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Edit'}
                </button>
            </form>
        </AppContainer>
    );
};

export default Edit;