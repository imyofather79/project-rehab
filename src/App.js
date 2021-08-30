import React, {useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './Components/NavBar';
import Backdoor from './Components/Backdoor';
import Home from "./Components/Home";
import Room from "./Components/Room";


function App() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/patients")
    .then((r) => r.json())
    .then(setPatients)
  }, []);

  function handleAddPatient(newPatient){
    setPatients([...patients, newPatient]);
  }

  function handleRemovePatient(removePatient){
    const updatedPatients = patients.filter(
      (patient) => patient.id !== removePatient.id);
      setPatients(updatedPatients);
  }
  
  function handleUpdatedPatient(updatedPatient){
    const updatedPatients = patients.map((patient) => 
    patient.id === updatedPatient.id ? updatedPatient : patients
    );
    setPatients(updatedPatients);
  }



  return (
    <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home onAddPatient={handleAddPatient}/>  
          </Route>
          <Route exact path="/room">
            <Room 
                  patients={patients}
                  onDeletePatient={handleRemovePatient}
                  onUpdatePatient={handleUpdatedPatient}
            />  
          </Route>
          <Route exact path="/backdoor">
              <Backdoor />
          </Route>
        </Switch>
    
    </div>

  );
}

export default App;
