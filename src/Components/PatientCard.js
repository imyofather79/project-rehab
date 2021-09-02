import React from 'react';
import ReactTooltip from 'react-tooltip';

 function PatientCard({patients, onUpdatePatient}) {
    const {id, name, status, image } = patients;
    
    function handleUpdateClick(){
        fetch(`http://localhost:4000/patients/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({isHidden: !patients.isHidden})
        })
        .then((r) => r.json())
        .then((submit) =>{ 
            onUpdatePatient(submit)  ;
            })
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
            <ReactTooltip />
                <h2>Name: {name}</h2>
            <img
                src={image}
                alt={name}
            />
            <br />
                <span data-tip={status}>Addiction: {userStatus} </span>
            <br />
            <button onClick={handleUpdateClick}>
                Detox?
            </button>
            
        </div>
    )
}

export default PatientCard;