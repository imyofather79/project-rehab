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
        <div id="backdoor">
            <img src={"https://image.shutterstock.com/image-photo/drug-dealer-260nw-72045445.jpg"} height={400}/>
            <p>I have everything, what do you need?</p>
            {backdoorDealer}
        </div>
    )
}

export default Backdoor;