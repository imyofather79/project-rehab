import React, {useState, useEffect} from 'react';
import CardForm from './Components/Card';
import NavBar from './Components/NavBar';
import Backdoor from './Components/Backdoor';
import PageContainer from './Components/PageContainer';


function App() {
  const [page, setPage] = useState("Card")
  const [personList, setPersonList] = useState([])

  useEffect(() => {
    fetch("http://localhost:4001/person")
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
      {page === "CardForm" ? <CardForm  onAddPerson={handleAddPerson}/> : <Backdoor />}
      <PageContainer
        personList={personList}
        onDeletePerson={handleRemovePerson}
        onUpdatePerson={handleUpdatedPerson}
      />
    </main>

  );
}

export default App;
