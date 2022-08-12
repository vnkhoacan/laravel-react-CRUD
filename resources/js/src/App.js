import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Home from './components/Home'
import Add from './components/Add';
import Edit from './components/Edit';

const App = () => {
    return (
        <BrowserRouter className="App_constainer">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/add' element={<Add/>}/>
                <Route path='/edit/:id' element={<Edit/>}/>
            </Routes>
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));