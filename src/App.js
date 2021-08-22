import React, {useState} from 'react';
import Card from './Components/Card'
import NavBar from './Components/NavBar';
import Backdoor from './Components/Backdoor'


function App() {
  const [page, setPage] = useState("Card")


  return (
    <main id="home">
      <NavBar onChangePage={setPage}/>
      {page === "Card" ? <Card /> : <Backdoor />}
    </main>

  );
}

export default App;
