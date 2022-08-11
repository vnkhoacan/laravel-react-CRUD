import React from 'react';

const Home = () => {
    return (
        <div className="container">
            <div className="card">
                <h5 className="card-header">Laravel-React CRUD</h5>
                <div className="card-body">
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;