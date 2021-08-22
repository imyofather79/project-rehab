import React from 'react'
import CardForm from './CardForm';

 function Home({onAddPerson}) {
  
    return (
        <div id="home">
            <h1>Welcome to the Rehab Center</h1>
            <br/>
            <span>Please input your information in the space below:</span>
            <CardForm onAddPerson={onAddPerson} />
        </div>
    )
}

export default Home;