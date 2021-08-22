import React from 'react';

function NavBar({onChangePage}) {
  

  return (
    <nav>
      <a href="#home" onClick={() => onChangePage=("home")}>Home</a>
      <a href="#room" onClick={() => onChangePage=("room")}>Room</a>
      <a href="#backdoor" onClick={() => onChangePage=("backdoor")}>Backdoor</a>
    </nav>
  );
}

export default NavBar;
