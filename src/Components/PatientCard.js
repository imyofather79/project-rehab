import React from 'react'

 function PatientCard({patients, onDeletePatient, onUpdatePatient}) {
    const {id, name, status, image } = patients;
    
    function handleDeleteClick(){
        fetch(`http://localhost:4000/patients/${id}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then(() =>{ 
                onDeletePatient(patients);
            });
    }

    let userStatus;

        switch(status) {
            case 'Alcohol':
                userStatus = '🍻'
                break
            case 'Drug':
                userStatus = '💉'
                break
            case 'Behavioral':
                userStatus = '🐾'
                break
            default:
                userStatus = '🍻&💉&🐾'
        }

    
    return (
        <div className="page-container">
            <h2>Name: {name}</h2>
            <img
                src={image}
                alt={name}
            />
            <br />
            <span>Addiction: {userStatus} </span>
            <br />
            <button onClick={handleDeleteClick}>
                Detox
            </button>
            
        </div>
    )
}

export default PatientCard;