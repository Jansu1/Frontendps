import React from 'react';
import SampleData from '../sample.json';

function Data() {
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col">Name</th>
                        <th scope="col">Latitude</th>
                        <th scope="col">Longitude</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        SampleData.map((record) => {
                            let id = record.id;
                            let name = record.name;
                            let la = record.lati;
                            let lo = record.lon;
                            return (<tr key={id}><td>{id}</td><td>{name}</td><td>{la}</td><td>{lo}</td></tr>);
                        })
                    }

                </tbody></table>

        </div>
    );
};

export default Data;