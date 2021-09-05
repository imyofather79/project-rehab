import React from 'react'
import PatientCard from './PatientCard';

 function Room({patients, onUpdatePatient}) {
     
    const patientCards = patients.filter((patient) => !patient.isHidden)
        .map((patient) => (
        <PatientCard 
            key={patient.id}
            patients={patient}
            onUpdatePatient={onUpdatePatient}
        />
    ));

    return (
        <div id="room">
            {patientCards}
        </div>
    )
}

export default Room;