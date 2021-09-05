import React from 'react'
import ReactTooltip from 'react-tooltip';

function Dealer({patients, onDeletePatient, onUpdatePatient}) {
    const {id, name, status, image } = patients;

    function handleDeleteClick(){
        fetch(`http://localhost:4000/patients/${id}`, {
            method: "DELETE",
        })
            .then((r) => r.json())
            .then(() =>(
             onDeletePatient(patients)
            ));
    }

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
        };
    
    return (
        <div className="backdoor-dealer">
            
            <ReactTooltip />
                <h2>Name: {name}</h2>
            <img
                src={image}
                alt={name}
                className="patientcard-img"
            />
            <br />
                <span data-tip={status}>Addiction: {userStatus} </span>
            
            <br />
            <button className="input-button" onClick={handleUpdateClick}>
                Take it
            </button>
            <button className="input-button" onClick={handleDeleteClick}>
                Leave it
            </button>
            
        </div>
    )
}

export default Dealer;