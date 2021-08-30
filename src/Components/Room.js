import React from 'react'
import PatientCard from './PatientCard';

 function Room({patients, onDeletePatient, onUpdatePatient}) {
     
    const patientCards = patients.map((patient) => (
        <PatientCard 
            key={patient.id}
            patients={patient}
            onDeletePatient={onDeletePatient}
            onUpdatePatient={onUpdatePatient}
        />
    ));

    return (
        <div className="room">
            {patientCards}
        </div>
    )
}

export default Room;