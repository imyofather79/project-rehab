import React from 'react'
import Dealer from './Dealer';

 function Backdoor({patients, onDeletePatient, onUpdatePatient}) {
     
    const backdoorDealer = patients.filter((patient) => patient.isHidden)
    .map((patient) => (
        <Dealer 
            key={patient.id}
            patients={patient}
            onDeletePatient={onDeletePatient}
            onUpdatePatient={onUpdatePatient}
        />
    ));

    return (
        <div className="backdoor">
            {backdoorDealer}
        </div>
    )
}

export default Backdoor;