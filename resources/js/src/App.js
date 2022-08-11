import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Home from './components/Home'

const App = () => {
    return (
        <BrowserRouter className="App_constainer">
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));