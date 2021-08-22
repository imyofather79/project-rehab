import React, {useState, useEffect} from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './Components/NavBar';
import Backdoor from './Components/Backdoor';
import PageContainer from './Components/PageContainer';
import Home from "./Components/Home";
import Room from "./Components/Room";


function App() {
  const [page, setPage] = useState("Home")
  const [personList, setPersonList] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/person")
    .then((r) => r.json())
    .then(setPersonList)
  }, []);

  function handleAddPerson(newPerson){
    setPersonList([...personList, newPerson]);
  }

  function handleRemovePerson(removePerson){
    const updatedPersonList = personList.filter(
      (person) => person.id !== removePerson.id);
      setPersonList(updatedPersonList);
  }
  function handleUpdatedPerson(updatedPerson){
    const updatedPersonList = personList.map((person) => 
    person.id === updatedPerson.id ? updatedPerson : personList
    );
    setPersonList(updatedPersonList);
  }

  

  return (
    <main id="home">
      <NavBar onChangePage={setPage}/>
      <Switch>
        <Route exact path="/home">
          <Home onAddPerson={handleAddPerson}/>  
        </Route>
        <Route exact path="/room">
          <Room />  
        </Route>
        <Route exact path="/backdoor">
            <Backdoor />
        </Route>
      </Switch>
      <PageContainer
        personList={personList}
        onDeletePerson={handleRemovePerson}
        onUpdatePerson={handleUpdatedPerson}
      />
    </main>

  );
}

export default App;
