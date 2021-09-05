import React from 'react'
import CardForm from './CardForm';

 function Home({onAddPatient}) {
  
    return (
        <div>
            <h1>Welcome to the Rehab Center</h1>
            <h2>HELP is available</h2>
            <p>Speak with someone today</p>
            <br />
            <p>
                SAMHSA National Helpline
                Confidential free help, from public health agencies, to find substance use treatment and information. 
                
            </p>
            <p>Learn more</p>
            <h3>1-800-662-4357</h3>

            <br/>
            <span>Please put your information below:</span>
            <CardForm onAddPatient={onAddPatient} />
        </div>
    )
}

export default Home;