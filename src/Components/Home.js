import React from 'react'
import CardForm from './CardForm';

 function Home({onAddPatient}) {
  
    return (
        <div id="home">
            <h1>Welcome to the Rehab Center</h1>
            <br/>
            <span>Please check in below:</span>
            <CardForm onAddPatient={onAddPatient} />
        </div>
    )
}

export default Home;