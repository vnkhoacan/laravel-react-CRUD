import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import AppContainer from './AppContainer';
import api from '../api';

const Add = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');

    const onAddSubmit = async () => {
        setLoading(true);
        try {
            await api.addEmployee({
                name, age, address,
            })
            navigate('/');
        } catch {
            alert('Add employee failed');
        } finally {
            setLoading(false);
        }
    }

    return (
        <AppContainer
        title="ADD"
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
                    onClick={onAddSubmit}
                    disabled={loading}
                >
                    {loading ? 'Loading...' : 'Add'}
                </button>
            </form>
        </AppContainer>
    );
};

export default Add;