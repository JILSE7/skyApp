import React, { useEffect, useState } from 'react'

import logo from '../Assets/logost2.png';
import TableSummary from '../Components/TableSummary';

import { fetchFunction } from '../Helpers/fetch';

const Reports = () => {

    const [msi, setMSI] = useState([]);
    const [located, setLocated] = useState([]);

    const getMSI = async() => {
        const dataMSI = await (await fetchFunction("Routes/MSI.php")).json();
        const dataLocated = await (await fetchFunction("Routes/Located.php")).json();

        console.log(dataLocated);

        setTimeout(() => {
            setMSI([...dataMSI]);
            setLocated([...dataLocated])
        }, 1000);
    };


    console.log(msi);

    useEffect(() => {
        getMSI();
    }, [])

    return (
        <div className="container">
            <header className="flex-center">
                <img src={logo} className="logo"/>
                
            </header>
            <h2 className="bold">Missing In Action</h2>
            <p>Perdidos en accion: {msi.length}</p>
             <div className="flex-center w-90">
                <main className="w-90 mt-5">
                    <TableSummary data={msi} comments="Resumen de Unidades que dejaron de reportar"/>
                </main>
             </div>
            
            <div className="separator"></div>

            
            <h2>Located - Report</h2>
            <p>Localizados: {located.length}</p>
             <div className="flex-center w-90">
                <main className="w-90 mt-5">
                    <TableSummary data={located} comments="Resumen de Unidades Localizadas"/>
                </main>
             </div>
                
            

        </div>
    )
}

export default Reports
